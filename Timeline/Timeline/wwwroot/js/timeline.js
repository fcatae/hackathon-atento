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
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return React.createElement("div", null, "Hello World!");
    };
    return App;
}(React.Component));
var UserProfile = (function (_super) {
    __extends(UserProfile, _super);
    function UserProfile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserProfile.prototype.render = function () {
        return (React.createElement("div", { className: "profile" },
            React.createElement("div", { className: "profile-pic" },
                React.createElement("img", { src: "https://image.shutterstock.com/z/stock-photo--face-blonde-happy-bride-before-the-wedding-portrait-of-a-young-girl-with-a-beautiful-smile-the-546759520.jpg", className: "profile-pic", alt: "" }),
                React.createElement("h2", null, "Nome cliente")),
            React.createElement("dl", { id: "profile-info", className: "inline-flex" },
                React.createElement("dt", null,
                    React.createElement("i", { className: "fa fa-id-card-o" })),
                React.createElement("dd", null, "3333.333.555-45"),
                React.createElement("dt", null,
                    React.createElement("i", { className: "fa fa-money" })),
                React.createElement("dd", null, "3583,00"),
                React.createElement("dt", null,
                    React.createElement("i", { className: "fa fa-birthday-cake" })),
                React.createElement("dd", null, "30"),
                React.createElement("dt", null,
                    React.createElement("i", { className: "fa fa-map-marker" })),
                React.createElement("dd", null, "S\u00E3o Bernardo do Campo, S\u00E3o Paulo"),
                React.createElement("dt", null,
                    React.createElement("i", { className: "fa fa-venus-mars" })),
                React.createElement("dd", null, "Masculino"),
                React.createElement("dt", null,
                    React.createElement("i", { className: "fa fa-home" })),
                React.createElement("dd", null, "nada consta"),
                React.createElement("dt", null,
                    React.createElement("i", { className: "fa fa-car" })),
                React.createElement("dd", null, "nada consta"),
                React.createElement("dt", null,
                    React.createElement("i", { className: "fa fa-refresh" })),
                React.createElement("dd", null, "10"))));
    };
    return UserProfile;
}(React.Component));
ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
ReactDOM.render(React.createElement(UserProfile, null), document.getElementById('profile'));
