# Tentando encontrar coisas interessantes para visualizar
library('ggplot2')

prevs = read.csv2('previsão_atento.csv')
prevs = prevs[complete.cases(prevs), ]

aggregate(as.numeric(prevs$score), by=list(prevs$resposta), FUN=mean) # Isso é importante saber
aggregate(as.numeric(prevs$resposta), by=list(prevs$recomendação), FUN=function(x){sum(as.numeric(x))})

aggregate(as.numeric(prevs$resposta), by=list(prevs$recomendação), FUN=mean)
mean(prevs$resposta)
mean(prevs$resposta * prevs$VALOR_DIVIDA)
mean(prevs[prevs$recomendação == TRUE, 'resposta'])
mean(prevs[prevs$recomendação == TRUE, 'resposta'] * prevs[prevs$recomendação == TRUE, 'VALOR_DIVIDA'])

mean(prevs$CPC)
mean(prevs[prevs$recomendação == TRUE, 'CPC'])

aggregate(as.numeric(prevs$resposta), by=list(prevs$faixa_renda), FUN=length)

aggregate(as.numeric(prevs$VALOR_DIVIDA), by=list(prevs$resposta), FUN=mean) # Isso é importante saber

aggregate(as.numeric(prevs$score), by=list(prevs$sexo), FUN=mean)

prevs_graph = prevs
prevs_graph$resposta_factor = factor(prevs_graph$resposta)
prevs_graph$resposta_factor
levels(prevs_graph$resposta_factor) = c('Não Pagou', 'Pagou')

gs = ggplot(prevs_graph, aes(x=score, fill=resposta_factor)) + 
  geom_density(alpha = 0.5, adjust=1.5) + 
  scale_fill_manual( values = c('blue', 'orange')) +
  ggtitle('Distribuição do score dos pagantes/não-pagantes') +
  theme(plot.title = element_text(size=20),
  	axis.title.x = element_text(size=16),
  	axis.title.y = element_text(size=16),
  	legend.title = element_text(size=18),
  	legend.text = element_text(size=16))

png('gráfico_score.png', width=800, height=540)
gs
dev.off()