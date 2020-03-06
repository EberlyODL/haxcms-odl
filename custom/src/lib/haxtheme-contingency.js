import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
import { store } from "@lrnwebcomponents/haxcms-elements/lib/core/haxcms-site-store.js";
import "@lrnwebcomponents/person-testimonial/person-testimonial.js";
import { autorun, toJS } from "mobx/lib/mobx.module.js";
import "./page-banner.js";

class HaxThemeContingency extends PolymerElement {
  static get template() {
    return html`
      <style>
        #content-wrap {
          width: 80%;
          margin: 0 auto 0 auto;
        }
        
        h1 {
          font-size: 36px;
          font-weight: 400;
        }

        h2 {
          font-size: 24px;
          font-weight: 400;
        }

        @media screen and (max-width: 768px) {
          h1 {
            font-size: 28px;
          }
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
      </style>
      <page-banner
        image="files/theme-images/page-banners/contingency.jpg"
        text="Contingency"
        alt="Empty classroom auditorium. Photo by: Nathan Dumlao - unsplash.com"
      ></page-banner>
      <div id="content-wrap">
        <div id="header">
          <h1>Contingency Planning</h1>
          <div class="description">
            What would happen if there was a huge snowstorm that shut down most
            of the Northeast? What if there was a zombie apocolypse? What if you
            simply get ill and can't come to class? What would you do? Our
            office is here to help you get your content where everyone can
            access it without the need for being physically present.
          </div>
        </div>
      </div>
    `;
  }
  static get tag() {
    return "haxtheme-contingency";
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
window.customElements.define(HaxThemeContingency.tag, HaxThemeContingency);
export { HaxThemeContingency };
