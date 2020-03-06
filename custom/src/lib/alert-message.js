import { LitElement, html, css } from "lit-element/lit-element.js";
class AlertMessage extends LitElement {
  static get styles() {
    return [
      css`
        a {
          color: #fff;
          text-decoration: none;
        }

        @media screen and (max-width: 768px) {
          a {
            font-size: 14px;
          }
        }

        a:hover {
          color: #00d2ff;
        }

        #container {
          background-color: red;
          padding: 8px;
        }

        iron-icon {
          width: 25px;
          height: 25px;
          color: #fff;
          margin-right: 5px;
        }
      `
    ];
  }
  render() {
    return html`
      <div id="container">
        <iron-icon icon="icons:report-problem"></iron-icon>
        <a href="${this.url}">
          <slot></slot>
        </a>
      </div>
    `;
  }

  static get tag() {
    return "alert-message";
  }
  static get properties() {
    return {
      /**
       * URL for alert
       */
      url: {
        type: String,
      },
    };
  }
  constructor() {
    super();
    this.url = "";
  }
}
window.customElements.define(AlertMessage.tag, AlertMessage);
export { AlertMessage };
