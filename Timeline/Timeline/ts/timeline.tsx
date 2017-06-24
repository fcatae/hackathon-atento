declare var $;
class Hello extends React.Component<{}, {}> {
    render() {
        return <div>Hello World!</div>;
    }
}

class UserProfile extends React.Component<IUserProfileProps, {}> {
    render() {
        var classScroll = 'profile profile-scroll';

        return (
            <div className={classScroll}>
                <span className="profile-score">{this.props.score}</span>
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

class UserMiniProfile extends React.Component<IUserProfileProps, {}> {
    render() {
        var classScore = 'profile score-card';

        return (
            <a href="timeline.html"><div className={classScore}>
                <span className="profile-score">{this.props.score}</span>
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
                    <dt><i className="fa fa-refresh"></i></dt>
                    <dd>{this.props.tentativas}</dd>
                </dl>
            </div></a>);
    }
}

class Timeline extends React.Component<ITimelineProps, {}> {
    render() {

        var eventos = this.props.eventos;

        var listaEventos = eventos.map(e => <TimelineEvent titulo={e.titulo} data={e.data}>{e.texto}</TimelineEvent>);

        return <div>
            <h1 className="timeline-title">{this.props.titulo}</h1>
            <ul className="timeline">
                {listaEventos}
            </ul>
        </div>;
    }
}

class UserHistory extends React.Component<IUserHistoryProps, {}> {
    render() {

        var eventos = this.props.history;

        var listaTimelines = eventos.map(e => <Timeline titulo={e.titulo} eventos={e.eventos} ></Timeline>);

        return <div className="user-timelines">
            {listaTimelines}
        </div>;

    }
}



class TimelineEvent extends React.Component<ITimelineEventProps, {}> {
    render() {
        var evento = this.props.titulo;

        return <li className="event" data-date="12:30 - 1:00pm">
            <div className="histories-infos">
                <h1 className='histories-title' onClick={this.showInfo.bind(this)}>{this.props.titulo}<small className="history-date">{this.props.data}</small></h1>
                <div className="histories-parameters" >
                    {this.props.children}
                </div>
            </div>
        </li>;
    }

    showInfo(ev) {
        var target = ev.target;
        $(target).next().slideToggle();
        $(target).next().next().next().slideToggle();
    }
}

class AppTimeline extends React.Component<IAppProps, {}> {
    render() {
        var usuario = this.props.data.usuario;
        var history = this.props.data.history;

        return <div id='content'>
            <div className="profile-timeline">
                <UserProfile {...usuario} />
            </div>
            <UserHistory history={history} />
        </div>;
    }
}

class AppIndex extends React.Component<IAppProps, {}> {
    render() {
        var usuario = this.props.data.usuario;
        
        return <div id='content'>
            <UserMiniProfile {...usuario} />
            <UserMiniProfile {...usuario} />
            <UserMiniProfile {...usuario} />
            <UserMiniProfile {...usuario} />
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
    score;
}

interface ITimelineEventProps {
    titulo;
    data;
    texto?;
}

interface IUserHistoryProps {
    history: ITimelineProps[];
}

interface ITimelineProps {
    titulo;
    eventos: ITimelineEventProps[];
}

interface IData {
    usuario: IUserProfileProps;
    history: IUserHistoryProps;
}

interface IAppProps {
    data: IData;
}