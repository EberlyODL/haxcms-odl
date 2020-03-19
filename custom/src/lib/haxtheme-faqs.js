import { LitElement, html, css } from "lit-element/lit-element.js";
import "./hax-faqs.js"
import "./hax-faqs-item.js"

class HaxthemeFaqs extends LitElement {
  static get tag() {
    return "haxtheme-faqs";
  }

  static get properties() {
    return {
      faqs: { type: Array }
    }
  }

  constructor() {
    super();
  }

  static get styles() {
    return [
      css`
        :host {
          display: flex;
          flex: 1 1 auto;
          flex-direction: column;
        }

       /**
        * Hide the slotted content during edit mode. This must be here to work.
        */
        :host([edit-mode]) #slot {
          display: none;
        }

        #container {
          display: block;
          padding: 1em;
          max-width: 900px;
          margin: 0 auto;
        }

        #search {
          max-width: 900px;
          margin: auto;
        }

        input {
          margin: auto;
          padding: 15px;
          border: 1px solid #ccc;
          border-radius: 3px;
          margin-bottom: 10px;
          width: 100%;
          box-sizing: border-box;
          font-family: montserrat;
          color: #2C3E50;
          font-size: 13px;
        }
      `
    ];
  }

  render() {
    return html`
      <div id="container">
        <h1>Frequently Asked Questions</h1>
        <div id="results">
          <div id="contentcontainer">
            <div id="slot">
              <slot></slot>
            </div>
          </div>
          <hax-faqs></hax-faqs>
        </div>
      </div>
    `;
  }
}
window.customElements.define(HaxthemeFaqs.tag, HaxthemeFaqs);
export { HaxthemeFaqs };
