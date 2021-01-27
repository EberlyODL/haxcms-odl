import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
import { store } from "@lrnwebcomponents/haxcms-elements/lib/core/haxcms-site-store.js";
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
            The wheels of innovation are always turning and our office
            recognizes the importance of staying current on the emerging
            technologies and trends that will shape our future. We take great
            pride in exploring and leveraging open-source tools that elevate the
            teaching and learning experience, and here in the innovation lab,
            you will receive a sneak-peek at our latest work.
          </div>
        </div>
        <div id="icon-banner">
          <service-icon
            icon="serviceicons:ngdle"
            title="Course Enhancements"
            info="Discover our newest course features and learn how to implement them."
          ></service-icon>
          <service-icon
            icon="serviceicons:container"
            title="Web Components"
            info="Preview the latest projects we're building using reusable web-components."
          ></service-icon>
          <service-icon
            icon="serviceicons:vr"
            title="Virtual Reality"
            info="Explore new 3D models and landscapes using our custom VR applications."
          ></service-icon>
          <service-icon icon="serviceicons:oer" title="" info=""></service-icon>
        </div>
        <div id="service-banner">
          <service-band
            type="video"
            source="https://youtu.be/HngXvQEkUGk"
            title="Take a Look into Virtual Reality at ODL"
          >
            <span slot>
              Virtual Reality(VR) tools are quickly finding homes among faculty
              looking to enhance their online course content. The implementation
              of VR will add value to important lessons and topics while also
              increasing student engagement. Check out the video to see what
              we've been working on and how it might apply to your course
              needs.</span
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
      </div>
    `;
  }
  static get tag() {
    return "haxtheme-service-lab";
  }
  connectedCallback() {
    super.connectedCallback();
    this.__disposer = [];
    autorun((reaction) => {
      this.manifest = toJS(store.routerManifest);
      this.__disposer.push(reaction);
    });
    autorun((reaction) => {
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
