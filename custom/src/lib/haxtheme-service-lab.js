import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
import { store } from "@lrnwebcomponents/haxcms-elements/lib/core/haxcms-site-store.js";
import "@lrnwebcomponents/person-testimonial/person-testimonial.js";
import { autorun, toJS } from "mobx/lib/mobx.module.js";
import "./page-banner.js";
import "./service-icon.js";
import "./service-band.js";
import "./course-icons.js";

class HaxThemeServiceLab extends PolymerElement {
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

        h2 {
          font-size: 24px;
          font-weight: 400;
        }

        @media screen and (max-width: 768px) {
          h1 {
            font-size: 28px;
          }
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
          display: grid;
          grid-template-columns: repeat(5, auto);
          margin: -20px 0 0 0;
        }

        @media screen and (max-width: 1130px) {
          #icon-banner {
            grid-template-columns: repeat(2, auto);
          }
        }

        @media screen and (max-width: 768px) {
          #icon-banner {
            grid-template-columns: repeat(1, auto);
          }
        }

        #whatsnext {
          margin: 0 0 25px 0;
        }

        #whatsnext_header {
          font-size: 24px;
          font-weight: 400;
          border-left: solid;
          border-left-width: 4px;
          border-left-color: #e2801e;
          padding-left: 15px;
          margin: 0 0 25px 0;
        }

        #quotes {
          display: grid;
          grid-template-columns: repeat(2, auto);
        }

        @media screen and (max-width: 768px) {
          #quotes {
            grid-template-columns: repeat(1, auto);
          }
        }

        person-testimonial {
          margin-right: 10px;
        }
      </style>
      <page-banner
        image="files/theme-images/page-banners/lab-banner.jpg"
        text="Innovation Lab"
        alt="Random gears on a banner.  Photo by: Geralt - Pixabay.com"
      ></page-banner>
      <div id="content-wrap">
        <div id="header">
          <h1>Innovation Lab</h1>
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
            icon="serviceicons:vr"
            title="Virtual Reality"
            info="Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
            dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          ></service-icon>
          <service-icon
            icon="serviceicons:ngdle"
            title="NGDLE"
            info="Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
            dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          ></service-icon>
          <service-icon
            icon="serviceicons:container"
            title="Containers on Demand"
            info="Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
            dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          ></service-icon>
          <service-icon
            icon="serviceicons:oer"
            title="OER Schema"
            info="Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
            dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          ></service-icon>
        </div>
        <div id="service-banner">
          <service-band
            type="video"
            source="https://youtu.be/o55m5yfdF-o"
            alt="A student raises their hand in a lecture hall."
            title="Track Real-time Anayltics to Measure Student Performance"
          >
            <span slot>
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Quisque velit nisi, pretium ut lacinia in, elementum id enim.
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.</span
            >
          </service-band>
          <service-band
            source="files/feature-images/course-select.jpg"
            alt="A student raises their hand in a lecture hall."
            title="Track Real-time Anayltics to Measure Student Performance"
            align="right"
          >
            <span slot>
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Quisque velit nisi, pretium ut lacinia in, elementum id enim.
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.</span
            >
          </service-band>
          <service-band
            type="video"
            source="https://youtu.be/obxNix6w2aE"
            alt="A student raises their hand in a lecture hall."
            title="Track Real-time Anayltics to Measure Student Performance"
          >
            <span slot>
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Quisque velit nisi, pretium ut lacinia in, elementum id enim.
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.</span
            >
          </service-band>
        </div>
        <div id="whatsnext">
          <div id="whatsnext_header">
            <h2>What's Next</h2>
          </div>
        </div>
      </div>
    `;
  }
  static get tag() {
    return "haxtheme-service-lab";
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
window.customElements.define(HaxThemeServiceLab.tag, HaxThemeServiceLab);
export { HaxThemeServiceLab };
