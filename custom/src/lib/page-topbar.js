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
          justify-content: stretch;
          align-items: center;
        }

        .spacer {
          flex: 1 1 auto;
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
        
        page-search {
          /* add a little spacing between this and the schedule button */
          margin-left: 8px;
        }
      `
    ];
  }
  render() {
    return html`
      ${this.renderAlert(this.alert)} 
      <div id="topbar-wrap">
      <company-mark></company-mark>
      <div class="spacer"></div>
      <div class="action_button">
        <a href="https://outlook.office365.com/owa/calendar/ECOSODL@PennStateOffice365.onmicrosoft.com/bookings/" target=_blank>
          <paper-button noink id="schedule">
            <div class="title">Book a Consultation</div>
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
          Information about Coronavirus, Contingency Planning and Remote Teaching
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