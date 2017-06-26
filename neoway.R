## testando com R
library('pROC')
library('SDMTools')

dados_ori = read.csv2('exemplo_dados_atento_cpfs.csv')
dados_neoway = read.csv2('pf renda e nome.csv')

dados_filter = c('CPF_CNPJ', 'DESC_STATUS_CONTRATO', 'VALOR_DIVIDA', 'PAGOU', 'TENTATIVA', 'ALO', 'CPC'
	, 'SUCESSO', 'UF', 'POSSUI_TEL', 'POSSUI_VEICULO', 'POSSUI_EMAILS', 'SEXO', 'RENDA', 'POSSUI_RESIDENCIA')

dados_ori = dados_ori[dados_filter]
names(dados_ori)

dados_merge = merge(dados_ori, dados_neoway, by.x='CPF_CNPJ', by.y='CPF')
head(dados_merge)

to_keep = complete.cases(dados_merge)
to_test = c('POSSUI_RESIDENCIA', 'POSSUI_TEL', 'POSSUI_EMAILS', 'POSSUI_VEICULO', 'SEXO', 'Idade')
for(i in 1:length(to_test)){
	add_drop = dados_merge[[to_test[i]]] == ''
	to_keep = as.logical(to_keep * !(add_drop))
}

dados = dados_merge[to_keep, ]

aggregate(dados$PAGOU, by=list(dados$PAGOU), FUN=length)
aggregate(dados$TENTATIVA, by=list(dados$TENTATIVA), FUN=length)
aggregate(dados$SUCESSO, by=list(dados$SUCESSO), FUN=length)
aggregate(dados$UF, by=list(dados$UF), FUN=length)
aggregate(dados$SEXO, by=list(dados$SEXO), FUN=length)
# aggregate(dados$PAGOU, by=list(dados$RENDA), FUN=length)
aggregate(dados$POSSUI_RESIDENCIA, by=list(dados$POSSUI_RESIDENCIA), FUN=length)
aggregate(dados$POSSUI_TEL, by=list(dados$POSSUI_TEL), FUN=length)
aggregate(dados$POSSUI_EMAILS, by=list(dados$POSSUI_EMAILS), FUN=length)
aggregate(dados$POSSUI_VEICULO, by=list(dados$POSSUI_VEICULO), FUN=length)


# Criando novas variaveis, para ter resultados mais inteligíveis


dados$resposta = dados$PAGOU > 0
dados$sexo = factor(as.character(dados$SEXO), levels=c('I', 'F', 'M'))
dados$renda = as.numeric(as.character(dados$RENDA))
dados$faixa_renda = cut(dados$renda, c(0, 2000, 4000, 10000, Inf), dig.lab=5)
aggregate(dados$faixa_renda, by=list(dados$faixa_renda), FUN=length)
dados$faixa_renda = factor(as.character(dados$faixa_renda), levels=c('NA', levels(dados$faixa_renda)))
dados[dados$RENDA == '', 'faixa_renda'] = 'NA'
aggregate(dados$faixa_renda, by=list(dados$faixa_renda), FUN=length)

# Separação entre duas amostras

set.seed(7)
train_lines = sample(1:nrow(dados), 0.7*floor(nrow(dados)))
dados_train = dados[train_lines, ]
dados_teste = dados[-train_lines, ]

# Modelagem

names(dados_train)
modelo = glm(resposta ~ VALOR_DIVIDA
	+ POSSUI_TEL
	# + POSSUI_VEICULO
	+ POSSUI_EMAILS
	# + POSSUI_RESIDENCIA
	+ Idade
	# + sexo
	+ faixa_renda
	, data=dados_train, family='binomial')
summary(modelo)

res = data.frame(real = dados_teste$resposta, pred = predict(modelo, dados_teste, type='response'))
res = res[complete.cases(res), ]

roc_final = roc(real ~ pred, data=res)
print(roc_final)
plot(roc_final)

thres = coords(roc_final, 'best')['threshold']
confusion.matrix(as.numeric(res$real), res$pred, threshold = thres)

# Preparando saída

variaveis = c('VALOR_DIVIDA', 'POSSUI_TEL', 'POSSUI_VEICULO', 'POSSUI_EMAILS', 'POSSUI_RESIDENCIA'
	, 'sexo', 'faixa_renda', 'resposta')
prevs = dados[variaveis]
prevs$score = 100*predict(modelo, prevs, type='response')
prevs['recomendação'] = prevs$score >= 100*thres
head(prevs, 10)

write.csv2(prevs, 'previsão_neoway.csv', row.names=FALSE)