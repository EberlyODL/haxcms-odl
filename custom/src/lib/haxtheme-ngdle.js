import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
import { store } from "@lrnwebcomponents/haxcms-elements/lib/core/haxcms-site-store.js";
import { autorun, toJS } from "mobx/lib/mobx.module.js";
import "./page-banner.js";
import "./service-icon";
import "./course-icons.js";
import "./haxtheme-icons.js";

class HaxThemeNgdle extends PolymerElement {
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

        #icon-banner {
          display: flex;
        }

        @media screen and (max-width: 768px) {
          #icon-banner {
            flex-direction: column;
          }
        }
      </style>
      <page-banner
        image="files/theme-images/page-banners/ngdle-banner.jpg"
        text="NGDLE"
        alt="Hand on keyboard with digital imagery.  Photo by: Geralt - Pixabay.com"
      ></page-banner>
      <div id="content-wrap">
        <div id="header">
          <h1>Next Generation Digital Learning Environment</h1>
          <div class="description">
            Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
            dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur
            aliquet quam id dui posuere blandit. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </div>
        </div>
        <div id="icon-banner">
          <service-icon
            icon="courseicons:astro011"
            title="Icon Title 1"
            info="Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
            dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          ></service-icon>
          <service-icon
            icon="courseicons:astro011"
            title="Icon Title 2"
            info="Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
            dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          ></service-icon>
          <service-icon
            icon="courseicons:astro011"
            title="Icon Title 3"
            info="Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
            dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          ></service-icon>
        </div>
      </div>
    `;
  }
  static get tag() {
    return "haxtheme-ngdle";
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
window.customElements.define(HaxThemeNgdle.tag, HaxThemeNgdle);
export { HaxThemeNgdle };
