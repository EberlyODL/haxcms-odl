import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
import { store } from "@lrnwebcomponents/haxcms-elements/lib/core/haxcms-site-store.js";
import { autorun, toJS } from "mobx/lib/mobx.module.js";
import "./page-banner.js";
class HaxThemeAbout extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
        /**
       * Hide the slotted content during edit mode. This must be here to work.
       */
        :host([edit-mode]) #slot {
          display: none;
        }
        #content-wrap {
          width: 80%;
          margin: 0 auto 0 auto;
        }

        #contentcontainer {
          font-size: 18px;
          font-weight: 300;
          line-height: 1.4;
        }
      </style>
      <page-banner
        image="files/theme-images/page-banners/news_banner.jpg"
        text="About"
        alt="Gateway to the Sciences"
      ></page-banner>
      <div id="content-wrap">
        <div id="about_header">
          <div id="title">
            <h1>What We Do</h1>
          </div>
        </div>
        <div id="contentcontainer">
          <div id="slot">
            <slot></slot>
          </div>
        </div>
      </div>
    `;
  }
  static get tag() {
    return "haxtheme-about";
  }
  connectedCallback() {
    super.connectedCallback();
    this.__disposer = [];
    autorun(reaction => {
      this.manifest = toJS(store.routerManifest);
      this.__disposer.push(reaction);
    });
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
}
window.customElements.define(HaxThemeAbout.tag, HaxThemeAbout);
export { HaxThemeAbout };
