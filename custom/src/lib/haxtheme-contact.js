import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
import { store } from "@lrnwebcomponents/haxcms-elements/lib/core/haxcms-site-store.js";
import { autorun, toJS } from "mobx/lib/mobx.module.js";
import "./page-banner.js";
import "./contact-form.js";
class HaxThemeContact extends PolymerElement {
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

        #contact-info {
          display: flex;
          justify-content: space-between;
          margin: 0 0 25px 0;
        }

        @media screen and (max-width: 1324px) {
          #contact-info {
            flex-direction: column;
          }
        }

        contact-form {
          width: 50%;
        }

        @media screen and (max-width: 1324px) {
          contact-form {
            width: 100%;
          }
        }
      </style>
      <page-banner
        image="files/theme-images/page-banners/news_banner.jpg"
        text="Contact"
        alt="Gateway to the Sciences"
      ></page-banner>
      <div id="content-wrap">
        <div id="about_header">
          <div id="title">
            <h1>Contact</h1>
          </div>
        </div>
        <div id="contact-info">
          <contact-form></contact-form>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.2838768296356!2d-77.86327558409836!3d40.799755272459215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89cea62073a7b393%3A0x704b7ea310a54bc1!2sRitenour%2C%20State%20College%2C%20PA%2016801!5e0!3m2!1sen!2sus!4v1571944254759!5m2!1sen!2sus"
            width="500"
            height="auto"
            frameborder="0"
            style="border:0;"
            allowfullscreen=""
          ></iframe>
        </div>
      </div>
    `;
  }
  static get tag() {
    return "haxtheme-contact";
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
window.customElements.define(HaxThemeContact.tag, HaxThemeContact);
export { HaxThemeContact };
