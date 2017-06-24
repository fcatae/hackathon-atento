
var data = {

    usuario: {
        imagem: 'https://image.shutterstock.com/z/stock-photo--face-blonde-happy-bride-before-the-wedding-portrait-of-a-young-girl-with-a-beautiful-smile-the-546759520.jpg',
        cpf: '433.333.555-45',
        renda: 'R$ 10.000,00',
        idade: '-',
        cidade: 'São Bernardo do Campo, Sao Paulo',
        sexo: 'Feminino',
        imoveis: '0',
        carros: '0',
        tentativas: '5',
        score: 806,
        nome: 'Isadora Rafaela Barros'
    },

    history:
    [
        {
            titulo: 'Fatura 10/02/2017 - R$ 1.000,00',
            eventos: [
                { titulo: 'Contato Telefônico - Não Atende', data: '15/02/2017', hora:'09:00', texto: '1' },
                { titulo: 'Contato Telefônico - Recado', data: '16/02/2017', hora:'10:00', texto: '2' },
                { titulo: 'Contato SMS - Pede Retorno', data: '18/02/2017', hora:'08:00', texto: '3' },
                { titulo: 'Contato Receptivo - Promessa Pagamento', data: '19/02/2017', hora:'19:30', texto: '4' },
                { titulo: 'Contato SMS - Linha Digitável', data: '19/02/2017', hora:'19:40', texto: '4' },
                { titulo: 'Pagou!', data: '20/02/2017', hora:'', texto: '' }
            ]
        },
        {
            titulo: 'Fatura 10/03/2017 - R$ 1.000,00',
            eventos: [
                { titulo: 'Contato Telefônico - Recado', data: '16/03/2017', hora:'10:00', texto: '1' },
                { titulo: 'Contato PA Digital - Recado', data: '18/03/2017', hora:'10:00', texto: '2' },
                { titulo: 'Contato Telefônico - Não Pode falar agora', data: '19/03/2017', hora:'15:00', texto: '3' },
                { titulo: 'Contato SMS - Linha Digitável', data: '20/03/2017', hora:'08:00', texto: '4' },
                { titulo: 'Pagou!', data: '20/03/2017', hora:'', texto: '' }
            ]
        },
        {
            titulo: 'Fatura 10/04/2017 - R$ 1.000,00',
            eventos: [
                { titulo: 'Recomendação SMS - Linha Digitável', data: '15/04/2017', hora:'08:00', texto: 'Entre em contato às 08:00.' }
            ]
        }
    ],

    usuario2: {
        imagem: 'images/2.jpg',
        cpf: '853.426.388-44',
        renda: '-',
        idade: '-',
        cidade: 'Paraisópolis, Sao Paulo',
        sexo: 'Masculino',
        imoveis: '0',
        carros: '0',
        tentativas: '31',
        score: 285,
        nome: 'Raul Danilo dos Santos'
    },

    history2:
    [
        {
            titulo: 'Fatura 10/02/2017 - R$ 1.000,00',
            eventos: [
                { titulo: 'Contato Telefônico - Não Atende', data: '15/02/2017', hora:'09:00', texto: '1' },
                { titulo: 'Contato Telefônico - Recado', data: '16/02/2017', hora:'10:00', texto: '2' },
                { titulo: 'Contato SMS - Pede Retorno', data: '18/02/2017', hora:'08:00', texto: '3' },
                { titulo: 'Contato Receptivo - Promessa Pagamento', data: '19/02/2017', hora:'19:30', texto: '4' },
                { titulo: 'Contato SMS - Linha Digitável', data: '20/02/2017', hora:'19:40', texto: '4' },
                { titulo: 'Contato Telefônico - Não Atende', data: '22/02/2017', hora:'09:00', texto: '1' },
                { titulo: 'Contato Telefônico - Recado', data: '25/02/2017', hora:'10:00', texto: '2' },
                { titulo: 'Contato SMS - Pede Retorno', data: '26/02/2017', hora:'08:00', texto: '3' },
                { titulo: 'Contato Receptivo - Promessa Pagamento', data: '01/03/2017', hora:'19:30', texto: '4' },
                { titulo: 'Contato SMS - Linha Digitável', data: '05/03/2017', hora:'19:40', texto: '4' },
                { titulo: 'Não pagou!', data: '14/03/2017', hora:'', texto: '' }
            ]
        },
        {
            titulo: 'Fatura 10/03/2017 - R$ 1.000,00',
            eventos: [
                { titulo: 'Contato Telefônico - Recado', data: '16/03/2017', hora:'10:00', texto: '1' },
                { titulo: 'Contato PA Digital - Recado', data: '18/03/2017', hora:'10:00', texto: '2' },
                { titulo: 'Contato Telefônico - Não Pode falar agora', data: '19/03/2017', hora:'15:00', texto: '3' },
                { titulo: 'Contato SMS - Linha Digitável', data: '20/03/2017', hora:'08:00', texto: '4' },
                { titulo: 'Contato Telefônico - Recado', data: '16/03/2017', hora:'10:00', texto: '1' },
                { titulo: 'Contato PA Digital - Recado', data: '18/03/2017', hora:'10:00', texto: '2' },
                { titulo: 'Contato Telefônico - Não Pode falar agora', data: '19/03/2017', hora:'15:00', texto: '3' },
                { titulo: 'Contato SMS - Linha Digitável', data: '20/03/2017', hora:'08:00', texto: '4' },
                { titulo: 'Contato PA Digital - Recado', data: '25/03/2017', hora:'10:00', texto: '2' },
                { titulo: 'Contato Telefônico - Não Pode falar agora', data: '12/04/2017', hora:'15:00', texto: '3' },
                { titulo: 'Contato SMS - Linha Digitável', data: '10/04/2017', hora:'08:00', texto: '4' },
                { titulo: 'Não pagou!', data: '15/04/2017', hora:'', texto: '' }
            ]
        },
        {
            titulo: 'Fatura 10/04/2017 - R$ 1.000,00',
            eventos: [
                { titulo: 'Envio de Boleto por Email', data: '15/04/2017', hora:'', texto: '' }
            ]
        }
    ],
    profiles: [{
        imagem: 'https://image.shutterstock.com/z/stock-photo--face-blonde-happy-bride-before-the-wedding-portrait-of-a-young-girl-with-a-beautiful-smile-the-546759520.jpg',
        cpf: '433.333.555-45',
        renda: 'R$ 10.000,00',
        idade: '32',
        cidade: 'São Bernardo do Campo, Sao Paulo',
        sexo: 'Feminino',
        imoveis: '(nada consta)',
        carros: '(nada consta)',
        tentativas: '5',
        score: 806,
        nome: 'Isadora Rafaela Barros'
    }, {
        imagem: 'images/2.jpg',
        cpf: '853.426.388-44',
        renda: '-',
        idade: '45',
        cidade: 'Paraisópolis, Sao Paulo',
        sexo: 'Feminino',
        imoveis: '(nada consta)',
        carros: '(nada consta)',
        tentativas: '31',
        score: 285,
        nome: 'Raul Danilo dos Santos'

    }, {
        imagem: 'images/1.jpeg',
        cpf: '435.923.685-91',
        renda: '1369,94',
        idade: '64',
        cidade: 'Jardim da Pedreira, Sao Paulo',
        sexo: 'Masculino',
        imoveis: '(nada consta)',
        carros: '(nada consta)',
        tentativas: '0',
        score: 789,
        nome: 'Laís Joana Rodrigues'

    },
    {
        imagem: 'images/3.jpg',
        cpf: '939.381.233-03',
        renda: '5276,96',
        idade: '23',
        cidade: 'São Bernardo do Campo, Sao Paulo',
        sexo: 'Feminino',
        imoveis: '(nada consta)',
        carros: '(nada consta)',
        tentativas: '6',
        score: 765,
        nome: 'Felipe Gomes'
    }, {
        imagem: 'images/4.png',
        cpf: '317.559.995-85',
        renda: '6567,10',
        idade: '43',
        cidade: 'Jardim São Paulo, Sao Paulo',
        sexo: 'Masculino',
        imoveis: '(nada consta)',
        carros: '(nada consta)',
        tentativas: '1',
        score: 732,
        nome: 'Julio de Paula'

    }, {
        imagem: 'images/5.png',
        cpf: '331.102.092-84',
        renda: '8562,86',
        idade: '34',
        cidade: 'Jardim das Praias, Sao Paulo',
        sexo: 'Feminino',
        imoveis: '(nada consta)',
        carros: '(nada consta)',
        tentativas: '0',
        score: 675,
        nome: 'Rebeca Pereira'

    }, {
        imagem: 'images/6.png',
        cpf: '331.102.092-84',
        renda: '8562,86',
        idade: '34',
        cidade: 'Jardim das Praias, Sao Paulo',
        sexo: 'Feminino',
        imoveis: '(nada consta)',
        carros: '(nada consta)',
        tentativas: '0',
        score: 643,
        nome: 'Lavinia Cavalcanti'

    }, {
        imagem: 'images/7.png',
        cpf: '331.102.092-84',
        renda: '8562,86',
        idade: '34',
        cidade: 'Jardim das Praias, Sao Paulo',
        sexo: 'Masculino',
        imoveis: '(nada consta)',
        carros: '(nada consta)',
        tentativas: '0',
        score: 612,
        nome: 'Marcos Vinicius Pinto'

    }, {
        imagem: 'images/8.jpg',
        cpf: '331.102.092-84',
        renda: '8562,86',
        idade: '34',
        cidade: 'Jardim das Praias, Sao Paulo',
        sexo: 'Masculino',
        imoveis: '(nada consta)',
        carros: '(nada consta)',
        tentativas: '0',
        score: 597,
        nome: 'Brenda Ferreira Santos'

    }, {
        imagem: 'images/9.png',
        cpf: '331.102.092-84',
        renda: '8562,86',
        idade: '34',
        cidade: 'Jardim das Praias, Sao Paulo',
        sexo: 'Masculino',
        imoveis: '(nada consta)',
        carros: '(nada consta)',
        tentativas: '0',
        score: 589,
        nome: 'Emilly Pinto Pereira'

    }, {
        imagem: 'images/10.png',
        cpf: '331.102.092-84',
        renda: '8562,86',
        idade: '34',
        cidade: 'Jardim das Praias, Sao Paulo',
        sexo: 'Masculino',
        imoveis: '(nada consta)',
        carros: '(nada consta)',
        tentativas: '0',
        score: 578,
        nome: 'Erick Correia Sousa'

    }, {
        imagem: 'images/11.png',
        cpf: '331.102.092-84',
        renda: '8562,86',
        idade: '34',
        cidade: 'Jardim das Praias, Sao Paulo',
        sexo: 'Masculino',
        imoveis: '(nada consta)',
        carros: '(nada consta)',
        tentativas: '0',
        score: 567,
        nome: 'Marcos Vinicius Pinto'

    }, {
        imagem: 'images/12.png',
        cpf: '331.102.092-84',
        renda: '8562,86',
        idade: '34',
        cidade: 'Jardim das Praias, Sao Paulo',
        sexo: 'Masculino',
        imoveis: '(nada consta)',
        carros: '(nada consta)',
        tentativas: '0',
        score: 556,
        nome: 'Marcos Vinicius Pinto'

    }]
};