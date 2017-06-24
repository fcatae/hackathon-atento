var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Hello = (function (_super) {
    __extends(Hello, _super);
    function Hello() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hello.prototype.render = function () {
        return React.createElement("div", null, "Hello World!");
    };
    return Hello;
}(React.Component));
var UserProfile = (function (_super) {
    __extends(UserProfile, _super);
    function UserProfile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserProfile.prototype.render = function () {
        return (React.createElement("div", { className: "profile" },
            React.createElement("div", { className: "profile-pic" },
                React.createElement("img", { src: this.props.imagem, className: "profile-pic", alt: "" }),
                React.createElement("h2", null, "Nome cliente")),
            React.createElement("dl", { id: "profile-info", className: "inline-flex" },
                React.createElement("dt", null,
                    React.createElement("i", { className: "fa fa-id-card-o" })),
                React.createElement("dd", null, this.props.cpf),
                React.createElement("dt", null,
                    React.createElement("i", { className: "fa fa-money" })),
                React.createElement("dd", null, this.props.renda),
                React.createElement("dt", null,
                    React.createElement("i", { className: "fa fa-birthday-cake" })),
                React.createElement("dd", null, this.props.idade),
                React.createElement("dt", null,
                    React.createElement("i", { className: "fa fa-map-marker" })),
                React.createElement("dd", null, this.props.cidade),
                React.createElement("dt", null,
                    React.createElement("i", { className: "fa fa-venus-mars" })),
                React.createElement("dd", null, this.props.sexo),
                React.createElement("dt", null,
                    React.createElement("i", { className: "fa fa-home" })),
                React.createElement("dd", null, this.props.imoveis),
                React.createElement("dt", null,
                    React.createElement("i", { className: "fa fa-car" })),
                React.createElement("dd", null, this.props.carros),
                React.createElement("dt", null,
                    React.createElement("i", { className: "fa fa-refresh" })),
                React.createElement("dd", null, this.props.tentativas))));
    };
    return UserProfile;
}(React.Component));
var Timeline = (function (_super) {
    __extends(Timeline, _super);
    function Timeline() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Timeline.prototype.render = function () {
        var eventos = [{ titulo: 'CONTATO VIA TELEFONE', data: '0/05/2016', texto: '1' },
            { titulo: 'CONTATO VIA TELEFONE', data: '0/05/2016', texto: '2' },
            { titulo: 'CONTATO VIA TELEFONE', data: '0/05/2016', texto: '3' }
        ];
        var listaEventos = eventos.map(function (e) { return React.createElement(TimelineEvent, { titulo: 'CONTATO VIA TELEFONE', data: '31/05/2016' }, "1"); });
        return React.createElement("ul", { className: "timeline" }, listaEventos);
    };
    return Timeline;
}(React.Component));
var TimelineEvent = (function (_super) {
    __extends(TimelineEvent, _super);
    function TimelineEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimelineEvent.prototype.render = function () {
        var evento = this.props.titulo;
        return React.createElement("li", { className: "event", "data-date": "12:30 - 1:00pm" },
            React.createElement("div", { className: "histories-infos" },
                React.createElement("h1", { className: 'histories-title' },
                    this.props.titulo,
                    React.createElement("small", { className: "history-date" }, this.props.data)),
                React.createElement("div", { className: "histories-parameters" }, this.props.children)));
    };
    return TimelineEvent;
}(React.Component));
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return React.createElement("div", { id: 'content' },
            React.createElement(UserProfile, { imagem: 'https://image.shutterstock.com/z/stock-photo--face-blonde-happy-bride-before-the-wedding-portrait-of-a-young-girl-with-a-beautiful-smile-the-546759520.jpg', cpf: '3333.333.555-45', renda: '3583,00', idade: '30', cidade: 'São Bernardo do Campo, SP', sexo: 'Masculino', imoveis: 'nada consta', carros: 'nada consta', tentativas: '11' }),
            React.createElement(Timeline, null));
    };
    return App;
}(React.Component));
ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
