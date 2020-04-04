var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, customElement, property, internalProperty } from "/web_modules/lit-element.js";
import { html } from "/web_modules/lit-html.js";
let App = class App extends LitElement {
    constructor() {
        super();
        /*
        * try changing the name-attribute on the app-root element;)
        */
        this.name = "stranger";
        this.secondsActive = 0;
    }
    someMethod(a, b) {
    }
    connectedCallback() {
        super.connectedCallback();
        console.log("app-root attached to dom");
        setInterval(() => ++this.secondsActive, 1000);
    }
    render() {
        return html `
      <h1>Hello ${this.name} :)</h1>
      <p>This component is active since about ${this.secondsActive} seconds.</p>
    `;
    }
};
__decorate([
    property({ reflect: true })
], App.prototype, "name", void 0);
__decorate([
    internalProperty()
], App.prototype, "secondsActive", void 0);
App = __decorate([
    customElement("app-root")
], App);
export { App };
//# sourceMappingURL=index.js.map