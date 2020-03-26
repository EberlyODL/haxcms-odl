import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
import { store } from "@lrnwebcomponents/haxcms-elements/lib/core/haxcms-site-store.js";
import { autorun, toJS } from "mobx/lib/mobx.module.js";
import "./page-banner.js";

class HaxThemeDemos extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }

        #content-wrap {
          display: flex;
          justify-content: center;
        
        }
        /**
       * Hide the slotted content during edit mode. This must be here to work.
       */
        :host([edit-mode]) #slot {
          display: none;
        }
      </style>
      <page-banner
        image="files/theme-images/page-banners/course_banner.jpg"
        text="Demos Template"
        alt=""
      ></page-banner>
      <div id="wrap">
        <div id="content-wrap">
          <div id="contentcontainer">
            <div id="slot">
              <slot></slot>
            </div>
          </div>
        </div>
      </div>
    `;
  }
  static get tag() {
    return "haxtheme-demos";
  }
  constructor() {
    super();
    this.__disposer = autorun(() => {
      this.manifest = toJS(store.routerManifest);
    });
  }
  disconnectedCallback() {
    this.__disposer();
    super.disconnectedCallback();
  }
}
window.customElements.define(HaxThemeDemos.tag, HaxThemeDemos);
export { HaxThemeDemos };
