import { LitElement, customElement, property, internalProperty } from "/web_modules/lit-element.js";
import { html } from "/web_modules/lit-html.js";

@customElement("app-root")
export class App extends LitElement {

  /*
  * try changing the name-attribute on the app-root element;)
  */
  @property({ reflect: true })
  public name = "stranger";

  @internalProperty()
  private secondsActive = 0;

  constructor() {
    super();
  }

  someMethod(a: string, b: string) {

  }

  connectedCallback() {
    super.connectedCallback();
    console.log("app-root attached to dom");
    setInterval(() => ++this.secondsActive, 1000);
  }

  render() {
    return html`
      <h1>Hello ${this.name} :)</h1>
      <p>This component is active since about ${this.secondsActive} seconds.</p>
    `;
  }

}
