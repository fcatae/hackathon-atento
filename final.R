## testando com R
library('pROC')
library('SDMTools')

dados_ori = read.csv2('exemplo_dados_atento_cpfs.csv')

dados_filter = c('CPF_CNPJ', 'DESC_STATUS_CONTRATO', 'VALOR_DIVIDA', 'PAGOU', 'TENTATIVA', 'ALO', 'CPC'
	, 'SUCESSO', 'UF', 'POSSUI_TEL', 'POSSUI_VEICULO', 'POSSUI_EMAILS', 'SEXO', 'RENDA', 'POSSUI_RESIDENCIA')

dados_ori = dados_ori[dados_filter]
names(dados_ori)

to_keep = complete.cases(dados_ori)
to_test = c('POSSUI_RESIDENCIA', 'POSSUI_TEL', 'POSSUI_EMAILS', 'POSSUI_VEICULO', 'SEXO')
for(i in 1:length(to_test)){
	add_drop = dados_ori[[to_test[i]]] == ''
	to_keep = as.logical(to_keep * !(add_drop))
}

dados = dados_ori[to_keep, ]

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
    + POSSUI_VEICULO
    + POSSUI_EMAILS
    + POSSUI_RESIDENCIA
	+ sexo
	# + renda
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

# Gerando as amostras para a apresentação

variaveis = c('VALOR_DIVIDA', 'POSSUI_TEL', 'POSSUI_VEICULO', 'POSSUI_EMAILS', 'POSSUI_RESIDENCIA', 'CPC'
	, 'sexo', 'faixa_renda', 'resposta')
prevs = dados[variaveis]
prevs$score = 100*predict(modelo, prevs, type='response')
prevs['recomendação'] = prevs$score >= 100*thres
head(prevs, 10)

write.csv2(prevs, 'previsão_atento.csv', row.names=FALSE)

prevs_cut = head(prevs[order(prevs$score), ], 20)
prevs_cut = rbind(prevs_cut, head(prevs[order(-prevs$score), ], 20))
nrow(prevs_cut)
write.csv(prevs_cut, 'previsão_atento_melhores_piores.csv', row.names=FALSE)

prevs_cut

####
# Pegando dois exemplos para comparar
prevs3 = prevs[c('101905', '115805'), ]
prevs3$score = prevs3$score*(5/thres)
prevs3