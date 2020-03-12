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
              image="${this.background}"
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
      },
      background: {
        type: String
      }
    };
  }
  constructor() {
    super();
    this.__disposer = [];
    this.activeItem = null;
    this.background = "files/theme-images/page-banners/news_banner.jpg";
    autorun(reaction => {
      this.activeItem = toJS(store.activeItem);

      let background = "files/theme-images/page-banners/news_banner.jpg";
      if (toJS(store.activeItem.metadata)) {
        if (toJS(store.activeItem.metadata.fields)) {
          if (toJS(store.activeItem.metadata.fields.image)) {
            background = toJS(store.activeItem.metadata.fields.image);
          }
        }
      }
      this.background = background;
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
