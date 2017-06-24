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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
        var classScroll = 'profile profile-scroll';
        return (React.createElement("div", { className: classScroll },
            React.createElement("span", { className: "profile-score" }, this.props.score),
            React.createElement("div", { className: "profile-pic" },
                React.createElement("img", { src: this.props.imagem, className: "profile-pic", alt: "" }),
                React.createElement("h2", null, this.props.nome)),
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
var UserMiniProfile = (function (_super) {
    __extends(UserMiniProfile, _super);
    function UserMiniProfile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserMiniProfile.prototype.render = function () {
        var classScore = 'profile score-card';
        return (React.createElement("a", { href: "timeline.html" },
            React.createElement("div", { className: classScore },
                React.createElement("span", { className: "profile-score" }, this.props.score),
                React.createElement("div", { className: "profile-pic" },
                    React.createElement("img", { src: this.props.imagem, className: "profile-pic", alt: "" }),
                    React.createElement("h2", null, this.props.nome)),
                React.createElement("dl", { id: "profile-info", className: "inline-flex" },
                    React.createElement("dt", null,
                        React.createElement("i", { className: "fa fa-id-card-o" })),
                    React.createElement("dd", null, this.props.cpf),
                    React.createElement("dt", null,
                        React.createElement("i", { className: "fa fa-money" })),
                    React.createElement("dd", null, this.props.renda),
                    React.createElement("dt", null,
                        React.createElement("i", { className: "fa fa-refresh" })),
                    React.createElement("dd", null, this.props.tentativas)))));
    };
    return UserMiniProfile;
}(React.Component));
var Timeline = (function (_super) {
    __extends(Timeline, _super);
    function Timeline() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Timeline.prototype.render = function () {
        var eventos = this.props.eventos;
        var listaEventos = eventos.map(function (e) { return React.createElement(TimelineEvent, { titulo: e.titulo, data: e.data }, e.texto); });
        return React.createElement("div", null,
            React.createElement("h1", { className: "timeline-title" }, this.props.titulo),
            React.createElement("ul", { className: "timeline" }, listaEventos));
    };
    return Timeline;
}(React.Component));
var UserHistory = (function (_super) {
    __extends(UserHistory, _super);
    function UserHistory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserHistory.prototype.render = function () {
        var history = this.props.history;
        var listaTimelines = history.map(function (e) { return React.createElement(Timeline, { titulo: e.titulo, eventos: e.eventos }); });
        return React.createElement("div", { className: "user-timelines" }, listaTimelines);
    };
    return UserHistory;
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
                React.createElement("h1", { className: 'histories-title', onClick: this.showInfo.bind(this) },
                    this.props.titulo,
                    React.createElement("small", { className: "history-date" }, this.props.data)),
                React.createElement("div", { className: "histories-parameters" }, this.props.children)));
    };
    TimelineEvent.prototype.showInfo = function (ev) {
        var target = ev.target;
        $(target).next().slideToggle();
        $(target).next().next().next().slideToggle();
    };
    return TimelineEvent;
}(React.Component));
var AppTimeline = (function (_super) {
    __extends(AppTimeline, _super);
    function AppTimeline() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppTimeline.prototype.render = function () {
        var usuario = this.props.data.usuario;
        var history = this.props.data.history;
        return React.createElement("div", { id: 'content' },
            React.createElement("div", { className: "profile-timeline" },
                React.createElement(UserProfile, __assign({}, usuario))),
            React.createElement(UserHistory, { history: history }));
    };
    return AppTimeline;
}(React.Component));
var AppIndex = (function (_super) {
    __extends(AppIndex, _super);
    function AppIndex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppIndex.prototype.render = function () {
        var usuarios = this.props.data.profiles.map(function (u) { return React.createElement(UserMiniProfile, __assign({}, u)); });
        return React.createElement("div", { id: 'content' }, usuarios);
    };
    return AppIndex;
}(React.Component));
