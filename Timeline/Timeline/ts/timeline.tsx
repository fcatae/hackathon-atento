class App extends React.Component<{}, {}> {
    render() {
        return <div>Hello World!</div>;
    }
}

class UserProfile extends React.Component<{}, {}> {
    render() {
        return (<div className="profile">
                <div className="profile-pic">
                    <img src="https://image.shutterstock.com/z/stock-photo--face-blonde-happy-bride-before-the-wedding-portrait-of-a-young-girl-with-a-beautiful-smile-the-546759520.jpg" className="profile-pic" alt="">
                    </img>
                    <h2>Nome cliente</h2>
                </div>
                <dl id="profile-info" className="inline-flex">
                    <dt><i className="fa fa-id-card-o"></i></dt>
                    <dd>3333.333.555-45</dd>
                    <dt><i className="fa fa-money"></i></dt>
                    <dd>3583,00</dd>
                    <dt><i className="fa fa-birthday-cake"></i></dt>
                    <dd>30</dd>
                    <dt><i className="fa fa-map-marker"></i></dt>
                    <dd>São Bernardo do Campo, São Paulo</dd>
                    <dt><i className="fa fa-venus-mars"></i></dt>
                    <dd>Masculino</dd>
                    <dt><i className="fa fa-home"></i></dt>
                    <dd>nada consta</dd>
                    <dt><i className="fa fa-car"></i></dt>
                    <dd>nada consta</dd>
                    <dt><i className="fa fa-refresh"></i></dt>
                    <dd>10</dd>
                </dl>
            </div>);
    }
}

class Timeline extends React.Component<{}, {}> {
    render() {
        return <ul className="timeline">
            <TimelineEvent titulo='CONTATO VIA TELEFONE' data='30/05/2016'>1</TimelineEvent>
            <TimelineEvent titulo='CONTATO VIA TELEFONE' data='30/05/2016'>2</TimelineEvent>
            <TimelineEvent titulo='CONTATO VIA TELEFONE' data='30/05/2016'>3</TimelineEvent>
            <TimelineEvent titulo='CONTATO VIA TELEFONE' data='30/05/2016'>4</TimelineEvent>
            <TimelineEvent titulo='CONTATO VIA TELEFONE' data='30/05/2016'>5</TimelineEvent>
            <TimelineEvent titulo='CONTATO VIA TELEFONE' data='30/05/2016'>6</TimelineEvent>
            <TimelineEvent titulo='CONTATO VIA TELEFONE' data='30/05/2016'>7</TimelineEvent>
            <TimelineEvent titulo='CONTATO VIA TELEFONE' data='30/05/2016'>8</TimelineEvent>
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

interface ITimelineEventProps {
    titulo;
    data;
}

ReactDOM.render(<App />, document.getElementById('app'));


ReactDOM.render(<UserProfile />, document.getElementById('profile'));


ReactDOM.render(<Timeline />, document.getElementById('timeline'));