import { LitElement, html, css } from "lit-element/lit-element.js";
import { store } from "@lrnwebcomponents/haxcms-elements/lib/core/haxcms-site-store.js";
import { autorun, toJS } from "mobx/lib/mobx.module.js";
import "./page-banner.js";

class HaxthemeResources extends LitElement {
  /**
   * LitElement constructable styles enhancement
   */
  static get styles() {
    return [css``];
  }
  render() {
    return html`
      ${this.activeItem
        ? html`
            <page-banner
              image="files/theme-images/page-banners/news_banner.jpg"
              text="${this.activeItem.title}"
              alt=""
            ></page-banner>
            <div id="container"><slot></slot></div>
          `
        : html``}
    `;
  }

  static get tag() {
    return "haxtheme-resources";
  }
  static get properties() {
    return {
      activeItem: {
        type: Object
      }
    };
  }
  constructor() {
    super();
    this.__disposer = [];
    this.activeItem = null;
    autorun(reaction => {
      this.activeItem = toJS(store.activeItem);
      console.log(this.activeItem)
      this.__disposer.push(reaction);
    });
  }
  disconnectedCallback() {
    for (var i in this.__disposer) {
      this.__disposer[i].dispose();
    }
    super.disconnectedCallback();
  }
}
window.customElements.define(HaxthemeResources.tag, HaxthemeResources);
export { HaxthemeResources };
