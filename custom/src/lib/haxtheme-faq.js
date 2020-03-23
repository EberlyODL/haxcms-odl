import { LitElement, html, css } from "lit-element/lit-element.js";
import { store } from "@lrnwebcomponents/haxcms-elements/lib/core/haxcms-site-store.js";
import { autorun, toJS } from "mobx/lib/mobx.module.js";

class HaxthemeFaq extends LitElement {
  static get properties() {
    return {
      activeItem: { type: Object }
    }
  }

  static get tag() {
    return "haxtheme-faq";
  }

  constructor() {
    super();
    this.activeItem = null;
    this.__disposer = [];
    autorun(reaction => {
      this.activeItem = toJS(store.activeItem);
      this.__disposer.push(reaction);
    });
  }

  disconnectedCallback() {
    for (var i in this.__disposer) {
      this.__disposer[i].dispose();
    }
    super.disconnectedCallback();
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
          width: 100%;
          margin: 0 auto;
        }
      `
    ];
  }

  render() {
    return html`
      <div id="container">
        ${this.activeItem ? html`<h1>${this.activeItem.title}</h1>` : html``}
        <div id="contentcontainer">
          <div id="slot">
            <slot></slot>
          </div>
        </div>
      </div>
    `;
  }
}
window.customElements.define(HaxthemeFaq.tag, HaxthemeFaq);
export { HaxthemeFaq };
