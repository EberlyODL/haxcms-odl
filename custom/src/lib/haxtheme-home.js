import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
import "@lrnwebcomponents/haxcms-elements/lib/ui-components/query/site-query.js";
import "./homepage-banner.js";
import "./info-box.js";
import "./news-feed.js";
import "./videos-feed.js";
import "./testimonials-feed.js";
import "./page-feature.js";
import "./content-listing.js";
import "./odl-promo-tile.js";
class HaxThemeHome extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          --theme-color-1: #363533;
          --theme-color-2: #e2801e;
          --theme-color-3: #f5f5f5;
          --theme-color-4: #fff;
        }
        /**
       * Hide the slotted content during edit mode. This must be here to work.
       */
        :host([edit-mode]) #slot {
          display: none;
        }
        info-box#about {
          margin: 80px 0 15px 0;
        }

        @media screen and (max-width: 768px) {
          info-box#about {
            margin: 40px 0 0 0;
          }
        }

        odl-promo-tile {
          --button-hover-color: none;
        }

        #promo_tile_wrap {
          display: grid;
          grid-template-columns: repeat(5, auto);
          border-top: solid;
          border-top-width: 20px;
          border-top-color: var(--theme-color-1);
        }

        @media screen and (max-width: 768px) {
          #promo_tile_wrap {
            border-top: none;
          }
        }

        @media screen and (max-width: 1330px) {
          #promo_tile_wrap {
            grid-template-columns: repeat(2, auto);
          }
        }

        @media screen and (max-width: 768px) {
          #promo_tile_wrap {
            grid-template-columns: repeat(1, auto);
          }
        }

        @media screen and (max-width: 1124px) {
          #promo_tile_wrap {
            padding: 0;
          }
        }

        @media screen and (max-width: 1124px) {
          page-feature {
            width: 100%;
            border-bottom: solid 2px #dcdcdc;
            margin-left: auto;
            margin-right: auto;
          }
        }

        @media screen and (max-width: 768px) {
          page-feature {
            width: 94%;
          }
        }
      </style>
      <homepage-banner
        image="files/theme-images/page-banners/odl_homepage_banner.jpg"
        alt="students receiving instruction in classroom"
        text="A creative studio for your classroom"
      ></homepage-banner>
      <info-box id="about" title="What We Do" url="about">
        <span slot="action_text">
          The Office of Digital Learning (ODL) helps faculty and students make
          the most of digital learning technology. We collaboratively design and
          build tools for any pedagogy; dream it and we will build it.
        </span>
      </info-box>
      <div id="promo_tile_wrap">
        <div class="promo_tile">
          <odl-promo-tile
            title="Course Management"
            label="Create"
            image="files/theme-images/promo-tiles/icontest5.jpg"
            alt="NGDLE stands for: Next Generation Learning Environment."
            url="coursemanagement"
          >
            Create and deliver course content using systems designed to empower instructors.
          </odl-promo-tile>
        </div>
        <div class="promo_tile">
          <odl-promo-tile
            title="Innovation Lab"
            label="Explore"
            image="files/theme-images/promo-tiles/icontest4.jpg"
            alt=""
            url="lab"
          >
            We're always exploring, testing, and sharing new and
            technologies; step into our innovation lab and see
            what we've been up to.
          </odl-promo-tile>
        </div>
        <div class="promo_tile">
          <odl-promo-tile
            title="Pedagogy"
            label="Learn"
            image="files/theme-images/promo-tiles/icontest8.jpg"
            alt=""
            url="pedagogy"
          >
            Instructional methods used to convey learning objectives. Work with
            us to discover creative ways to implement pedagogy into your
            instruction.
          </odl-promo-tile>
        </div>
        <div class="promo_tile">
          <odl-promo-tile
            title="Multimedia"
            label="Create"
            image="files/theme-images/promo-tiles/icontest10.jpg"
            alt=""
            url="multimedia"
          >
            Work with experts to create instructional videos, high-fidelity
            graphics, virtual reality assets, and more.
          </odl-promo-tile>
        </div>
      </div>
      <div id="page_feature">
        <site-query
          result="{{__newsitems}}"
          conditions='{
          "metadata.type": "news"
        }'
          limit="1"
          sort='{ "order": "ASC" }'
        ></site-query>
        <dom-repeat items="[[__newsitems]]" mutable-data>
          <template>
            <page-feature
              title="Top News"
              subtitle="[[item.title]]"
              info="[[item.metadata.author]]"
              url="[[item.location]]"
              image="[[item.metadata.fields.image]]"
              alt="[[item.metadata.fields.imageAlt]]"
            >
              [[item.description]]</page-feature
            >
          </template>
        </dom-repeat>
      </div>
      <div id="news_feed">
        <news-feed></news-feed>
      </div>
      <div id="page_feature">
        <site-query
          result="{{__spotlightitems}}"
          conditions='{ "metadata.type": "spotlight" }'
          limit="1"
          sort='{ "order": "DES" }'
        ></site-query>
        <dom-repeat items="[[__spotlightitems]]" mutable-data>
          <template>
            <page-feature
              title="Faculty Spotlight"
              subtitle="[[item.metadata.fields.name]]"
              info="[[item.metadata.fields.jobTitle]]"
              url="[[item.location]]"
              image="[[item.metadata.fields.image]]"
              alt="[[item.metadata.fields.imageAlt]]"
            >
              [[item.description]]</page-feature
            >
          </template>
        </dom-repeat>
      </div>
      <div id="videos_feed">
        <videos-feed></videos-feed>
      </div>
      <div id="courses">
        <content-listing
          title="Courses"
          image="files/feature-images/course-select.jpg"
          alt="Student with a question raising hand in class surrounded by other students."
          condition='{"metadata.type": "course"}'
          location="metadata.fields.subject"
        ></content-listing>
      </div>
    `;
  }
  static get tag() {
    return "haxtheme-home";
  }

  constructor() {
    super();
    import("@polymer/paper-button/paper-button.js");
  }
}
window.customElements.define(HaxThemeHome.tag, HaxThemeHome);
export { HaxThemeHome };
