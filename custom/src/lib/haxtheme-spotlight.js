import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
import { store } from "@lrnwebcomponents/haxcms-elements/lib/core/haxcms-site-store.js";
import { autorun, toJS } from "mobx/lib/mobx.module.js";
import "./page-banner.js";
class HaxThemeSpotlight extends PolymerElement {
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

        h1 {
          font-size: 36px;
          font-weight: 400;
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

        #about_header {
          border-left: solid;
          border-left-width: 4px;
          border-left-color: #e2801e;
          padding-left: 15px;
        }

        #spotlight-image {
          width: 50%;
          background-repeat: no-repeat;
          background-size: cover;
          background-position: right center;
          min-height: 400px;
        }




      </style>
      <page-banner
        image="files/theme-images/page-banners/spotlight-banner.jpg"
        text="Faculty Spotlight"
        alt=""
      ></page-banner>
      <div id="content-wrap">
        <div id="about_header">
          <div id="title">
            <h1>[[activeItem.title]]</h1>
            <h2>[[activeItem.metadata.fields.jobTitle]]</h2>
          </div>
        </div>
        <div id="spotlight-image" style="background-image:url([[activeItem.metadata.fields.image]])"></div>

        <!-- <div
          id="spotlight-image"
          
        ></div> -->

        <div id="contentcontainer">
          <div id="slot">
            <slot></slot>
          </div>
        </div>
      </div>
    `;
  }
  static get tag() {
    return "haxtheme-spotlight";
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
window.customElements.define(HaxThemeSpotlight.tag, HaxThemeSpotlight);
export { HaxThemeSpotlight };
