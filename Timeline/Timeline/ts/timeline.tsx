class Hello extends React.Component<{}, {}> {
    render() {
        return <div>Hello World!</div>;
    }
}

class UserProfile extends React.Component<IUserProfileProps, {}> {
    render() {
        return (<div className="profile">
                <div className="profile-pic">
                    <img src={this.props.imagem} className="profile-pic" alt="">
                    </img>
                    <h2>Nome cliente</h2>
                </div>
                <dl id="profile-info" className="inline-flex">
                    <dt><i className="fa fa-id-card-o"></i></dt>
                    <dd>{this.props.cpf}</dd>
                    <dt><i className="fa fa-money"></i></dt>
                    <dd>{this.props.renda}</dd>
                    <dt><i className="fa fa-birthday-cake"></i></dt>
                    <dd>{this.props.idade}</dd>
                    <dt><i className="fa fa-map-marker"></i></dt>
                    <dd>{this.props.cidade}</dd>
                    <dt><i className="fa fa-venus-mars"></i></dt>
                    <dd>{this.props.sexo}</dd>
                    <dt><i className="fa fa-home"></i></dt>
                    <dd>{this.props.imoveis}</dd>
                    <dt><i className="fa fa-car"></i></dt>
                    <dd>{this.props.carros}</dd>
                    <dt><i className="fa fa-refresh"></i></dt>
                    <dd>{this.props.tentativas}</dd>
                </dl>
            </div>);
    }
}

class Timeline extends React.Component<{}, {}> {
    render() {

        var eventos = [ {titulo: 'CONTATO VIA TELEFONE', data: '0/05/2016', texto: '1'},
                        {titulo: 'CONTATO VIA TELEFONE', data: '0/05/2016', texto: '2'},
                        {titulo: 'CONTATO VIA TELEFONE', data: '0/05/2016', texto: '3'}
         ];

        var listaEventos = eventos.map( e => <TimelineEvent titulo='CONTATO VIA TELEFONE' data='31/05/2016'>1</TimelineEvent> );
        
        return <ul className="timeline">            
            {listaEventos}
        </ul>;
    }
}

class TimelineEvent extends React.Component<ITimelineEventProps, {}> {
    render() {
        var evento = this.props.titulo;

        return <li className="event" data-date="12:30 - 1:00pm">
                <div className="histories-infos">
                    <h1 className='histories-title'>{this.props.titulo}<small className="history-date">{this.props.data}</small></h1>
                    <div className="histories-parameters">
                        {this.props.children}
                    </div>
                </div>
            </li>;
    }
}

class App extends React.Component<{}, {}> {
    render() {
        return <div id='content'>
            <UserProfile 
                    imagem='https://image.shutterstock.com/z/stock-photo--face-blonde-happy-bride-before-the-wedding-portrait-of-a-young-girl-with-a-beautiful-smile-the-546759520.jpg'
                    cpf='3333.333.555-45'
                    renda='3583,00'
                    idade='30'
                    cidade='São Bernardo do Campo, SP'
                    sexo='Masculino'
                    imoveis='nada consta'
                    carros='nada consta'
                    tentativas='11' /> 
            <Timeline />       
        </div>;
    }
}

interface IUserProfileProps {
    imagem;
    cpf;
    renda;
    idade;
    cidade;
    sexo;
    imoveis;
    carros;
    tentativas;
}

interface ITimelineEventProps {
    titulo;
    data;
    texto?;
}

ReactDOM.render(<App />, document.getElementById('app'));
