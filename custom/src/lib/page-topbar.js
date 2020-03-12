import { LitElement, html, css } from "lit-element/lit-element.js";
import "./company-mark.js";
import "./page-search.js";
import "./alert-message.js";
class PageTopBar extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          display: block;
          padding: 2px;
        }

        a {
          text-decoration: none;
        }

        #topbar-wrap {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .action_button {
          display: flex;
          justify-content: center;
        }

        paper-button#schedule {
          text-transform: none;
          background-color: #e2801e;
          color: #fff;
        }

        iron-icon {
          margin-left: 10px;
        }

        @media screen and (max-width: 768px) {
          .action_button {
            font-size: 12px;
            width: 30%;
          }
        }
      `
    ];
  }
  render() {
    return html`
      ${this.renderAlert(this.alert)} 
      <div id="topbar-wrap">
      <company-mark></company-mark>
      <div class="action_button">
        <a href="https://nam01.safelinks.protection.outlook.com/?url=https%3A%2F%2Foutlook.office365.com%2Fowa%2Fcalendar%2Fb58fc79c95a249aa8de9afbc555ed6ab%40psu.edu%2F16fac4c6e6aa4f5f90aabda235ee917710394492065995205772%2Fcalendar.html&data=02%7C01%7Ccmd30%40psu.edu%7C7909d5ecf71d4d74be9508d7aa714dc0%7C7cf48d453ddb4389a9c1c115526eb52e%7C0%7C0%7C637165277560978827&sdata=YisxiX9FgsqsT%2BeuAfzDs1ZfsTzPwM52HL270vPFvIE%3D&reserved=0" target=_blank>
          <paper-button noink id="schedule">
            <div class="title">Schedule Our Studio</div>
            <iron-icon icon="date-range"></iron-icon>
          </paper-button>
        </a>
      </div>
      <page-search></page-search>
    </div> 
    `;
  }

  renderAlert(alert) {
    if (alert === true) {
      return html`
       <div id="alert">
        <alert-message url="resources/contingency">
          Information about Coronavirus and Contingency Planning
        </alert-message>
       </div>
      `;
    }
    else {
      return "";
    }
    
  }


  static get tag() {
    return "page-topbar";
  }
  static get properties() {
    return {
      /**
       * Alert
       */
      alert: {
        type: Boolean,
      },
    };
  }
  constructor() {
    super();
    this.alert = "";
  }
}
window.customElements.define(PageTopBar.tag, PageTopBar);
export { PageTopBar };