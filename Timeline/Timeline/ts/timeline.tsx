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

class Timeline extends React.Component<ITimelineProps, {}> {
    render() {

        var eventos = this.props.eventos;

        var listaEventos = eventos.map( e => <TimelineEvent titulo={e.titulo} data={e.data}>{e.texto}</TimelineEvent> );
        
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

class App extends React.Component<IAppProps, {}> {
    render() {
        var usuario = this.props.data.usuario;
        var eventos = this.props.data.eventos;

        return <div id='content'>
            <UserProfile {...usuario} /> 
            <Timeline eventos={eventos} />       
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

interface ITimelineProps {
    eventos: ITimelineEventProps[];
}

interface IData {
    usuario: IUserProfileProps;
    eventos;
}

interface IAppProps {
    data: IData;
}

// external data from data.js
declare var data;

ReactDOM.render(<App data={data}/>, document.getElementById('app'));
