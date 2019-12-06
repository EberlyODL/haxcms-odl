import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
import { store } from "@lrnwebcomponents/haxcms-elements/lib/core/haxcms-site-store.js";
import { autorun, toJS } from "mobx/lib/mobx.module.js";
import "./page-banner.js";
import "./service-icon";
import "./course-icons.js";

class HaxThemeServices extends PolymerElement {
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

        #header {
          border-left: solid;
          border-left-width: 4px;
          border-left-color: #e2801e;
          padding-left: 15px;
          margin: 0 0 25px 0;
        }

        .description {
          font-size: 18px;
          font-weight: 300;
          line-height: 1.4;
        }

        /* #icon-banner {
          background-color: #363533;
          height: 400px;
          border-bottom: 5px solid #fff;
        } */
      </style>
      <page-banner
        image="[[activeItem.metadata.fields.bannerImg]]"
        text="[[activeItem.title]]"
        alt="[[activeItem.metadata.fields.bannerAlt]]"
      ></page-banner>
      <div id="content-wrap">
        <div id="header">
          <h1>[[activeItem.metadata.fields.longName]]</h1>
          <div class="description">[[activeItem.description]]</div>
        </div>
        <div id="icon-banner">
          <site-query
            result="{{__serviceinfo}}"
            conditions='{"metadata.type": "services"}'
          ></site-query>
          <dom-repeat items="[[__serviceinfo]]" mutable-data>
          <template>
          <service-icon
            icon="[[activeItem.metadata.fields.icon]]"
            title="[[activeItem.metadata.fields.iconTitle]]"
            info="[[activeItem.metadata.fields.iconDescription]]"
          ></service-icon>
          </template>
        </dom-repeat>
        </div>
      </div>
    `;
  }
  static get tag() {
    return "haxtheme-services";
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
window.customElements.define(HaxThemeServices.tag, HaxThemeServices);
export { HaxThemeServices };
