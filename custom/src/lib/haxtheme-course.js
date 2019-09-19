import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
import { store } from "@lrnwebcomponents/haxcms-elements/lib/core/haxcms-site-store.js";
import { autorun, toJS } from "mobx/lib/mobx.module.js";
import "@polymer/polymer/lib/elements/dom-if.js";
import "./page-banner.js";
import "./course-icons.js";

class HaxThemeCourse extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          --site-recent-content-block-item-link: {
            text-transform: uppercase;
          }
        }
        /**
       * Hide the slotted content during edit mode. This must be here to work.
       */
        :host([edit-mode]) #slot {
          display: none;
        }
        h1 {
          font-size: var(--haxtheme-course-h1-font-size);
          font-weight: var(--haxtheme-course-h1-font-weight);
          margin: var(--haxtheme-course-h1-margin, 25px 0 0 0);
          text-transform: var(--haxtheme-course-h1-text-transform);
          @apply --haxtheme-course-h1;
        }

        h2 {
          font-size: var(--haxtheme-course-h2-font-size);
          font-weight: var(--haxtheme-course-h2-font-weight);
          margin: var(--haxtheme-course-h2-margin, -10px 0 0 0);
          @apply --haxtheme-course-h2;
        }

        h3 {
          font-size: 20px;
          font-weight: 100;
          margin: -5px 0 0 0;
        }

        page-banner {
          --page-banner-text-transform: uppercase;
        }

        site-breadcrumb {
          margin: var(--haxtheme-course-site-breadcrumb-margin);
          @apply --haxtheme-course-site-breadcrumb;
        }

        @media screen and (max-width: 768px) {
          site-breadcrumb {
            margin: var(
              --haxtheme-course-site-breadcrumb-margin-mobile,
              -15px 0 15px
            );
            @apply --haxtheme-course-site-breadcrumb-mobile;
          }
        }

        @media screen and (max-width: 768px) {
          #course_wrap {
            padding: var(--haxtheme-course-course-wrap-padding, 20px);
            @apply --haxtheme-course-course-wrap-mobile;
          }
        }

        .course_container {
          display: var(--haxtheme-course-course-container-display, flex);
          width: var(--haxtheme-course-course-container-width, 75%);
          margin: var(--haxtheme-course-course-container-margin, 0 auto 0 auto);
          @apply --haxtheme-course-course-container;
        }

        @media screen and (max-width: 768px) {
          .course_container {
            flex-direction: var(
              --haxtheme-course-course-container-flex-direction-mobile,
              column
            );
            width: var(--haxtheme-course-course-container-width-mobile, 98%);
            @apply --haxtheme-course-course-container-mobile;
          }
        }

        .course_inner_wrap {
          width: var(--haxtheme-course-course-inner-wrap-width, 90%);
          margin: var(--haxtheme-course-course-inner-wrap-margin, 0 20px 0 0);
          @apply --haxtheme-course-course-inner-wrap;
        }

        @media screen and (max-width: 768px) {
          .course_inner_wrap {
            width: var(--haxtheme-course-course-inner-wrap-width-mobile, 100%);
            margin: var(
              --haxtheme-course-course-inner-wrap-margin-mobile,
              10px 0 0 0
            );
            @apply --haxtheme-course-course-inner-wrap-mobile;
          }
        }

        #course_header {
          border-left: var(--haxtheme-course-course-header-border-left);
          border-left-width: var(
            --haxtheme-course-course-header-border-left-width
          );
          border-left-color: var(--haxtheme-course-course-header-border-color);
          padding: var(--haxtheme-course-course-header-padding, 0 0 0 15px);
          @apply --haxtheme-course-course-header;
        }

        #course_archive {
          width: var(--haxtheme-course-course-archive-width, 121%);
          margin: var(--haxtheme-course-course-arhive-margin, 0 0 25px 0);
          @apply --haxtheme-course-course-archive;
        }

        @media screen and (max-width: 768px) {
          #course_archive {
            width: var(--haxtheme-course-course-archive-width-mobile, 100%);
            margin: var(--haxtheme-course-course-arhive-margin, 0 auto 0 auto);
            @apply --haxtheme-course-course-archive-mobile;
          }
        }

        #credit {
          margin: 5px 0 0 0;
        }

        #description {
          font-size: var(--haxtheme-course-description-font-size);
          font-weight: var(--haxtheme-course-description-font-weight);
          line-height: var(--haxtheme-course-description-line-height);
          margin: var(--haxtheme-course-description-margin, 15px 0 25px 0);
          @apply --haxtheme-course-course-description;
        }

        .sidebar_wrap {
          width: var(--haxtheme-course-sidebar-wrap-width);
          margin: var(--haxtheme-course-sidebar-wrap-margin);
          border-left: var(--haxtheme-course-sidebar-wrap-border-left);
          border-left-width: var(
            --haxtheme-course-sidebar-wrap-border-left-width
          );
          border-left-color: var(
            --haxtheme-course-sidebar-wrap-border-left-color
          );
          height: var(--haxtheme-course-sidebar-wrap-height);
          padding: var(--haxtheme-course-sidebar-wrap-padding);
          @apply --haxtheme-course-sidebar-wrap;
        }

        @media screen and (max-width: 768px) {
          .sidebar_wrap {
            width: var(--haxtheme-course-sidebar-wrap-width-mobile);
            height: var(--haxtheme-course-sidebar-wrap-height-mobile);
            border: var(--haxtheme-course-sidebar-wrap-border-mobile);
            padding: var(--haxtheme-course-sidebar-wrap-padding-mobile);
            margin: var(--haxtheme-course-sidebar-wrap-margin-mobile);
            @apply --haxtheme-course-sidebar-wrap-mobile;
          }
        }

        #video_wrap {
          margin: var(--haxtheme-course-video-wrap-margin, 15px 15px 15px 0);
          @apply --haxtheme-course-video-wrap;
        }

        #video_placehold {
          display: var(--haxtheme-course-video-placehold-display, flex);
          justify-content: var(
            --haxtheme-course-video-placehold-justify-content,
            center
          );
          @apply --haxtheme-course-video-placehold;
        }

        iron-icon {
          width: var(--haxtheme-course-iron-icon-width, 400px);
          height: var(--haxtheme-course-iron-icon-height, 400px);
          fill: var(--haxtheme-course-iron-icon-fill);
          margin: var(--haxtheme-course-iron-icon-margin, 0 0 -20px 0);
          @apply --haxtheme-course-iron-icon;
        }

        @media screen and (max-width: 768px) {
          iron-icon {
            width: var(--haxtheme-course-iron-icon-width-mobile, 250px);
            height: var(--haxtheme-course-iron-icon-height-mobile, 250px);
            @apply --haxtheme-course-iron-icon-mobile;
          }
        }

        site-recent-content-block {
          --site-recent-content-block-header-color: #e2801e;
        }

        #prereqs {
          display: flex;
        }
      </style>
      <page-banner
        image="[[activeItem.metadata.fields.image]]"
        text="[[activeItem.title]]"
        alt="[[activeItem.metadata.fields.imageAlt]]"
      ></page-banner>
      <div id="course_wrap">
        <div class="course_container">
          <div class="course_inner_wrap">
            <site-breadcrumb></site-breadcrumb>
            <template is="dom-if" if="[[activeItem.metadata.fields.video]]">
              <div id="video_wrap">
                <video-player
                  width="100%"
                  source="[[activeItem.metadata.fields.video]]"
                ></video-player>
              </div>
            </template>
            <template is="dom-if" if="[[!activeItem.metadata.fields.video]]">
              <div id="video_placehold">
                <iron-icon icon="[[activeItem.metadata.icon]]"></iron-icon>
              </div>
            </template>
            <div id="course_header">
              <div id="title">
                <h1>[[activeItem.title]]</h1>
              </div>
              <div id="name">
                <h2>[[activeItem.name]]</h2>
              </div>
              <div id="credit">
                <h3>Credits: [[activeItem.metadata.fields.credits]]</h3>
              </div>

              <div id="prereqs">
                <div class="prereq_title">
                  <h3>Prerequisites:</h3>
                </div>

                <template
                  is="dom-repeat"
                  items="[[activeItem.metadata.fields.prereqs]]"
                  as="prereq"
                >
                  <a href="#">
                    [[prereq]]
                  </a>
                </template>
              </div>
            </div>

            <div id="description">[[activeItem.description]]</div>
            <div id="contentcontainer">
              <div id="slot">
                <slot></slot>
              </div>
            </div>
          </div>
          <div class="sidebar_wrap">
            <div id="course_archive">
              <site-recent-content-block
                title="Related Courses"
                conditions="[[__subjectSiteQueryCondition(activeItem)]]"
                result="{{__items}}"
                limit="5"
                sort
              >
              </site-recent-content-block>
            </div>
          </div>
        </div>
      </div>
    `;
  }
  static get tag() {
    return "haxtheme-course";
  }
  static get properties() {
    return {
      activeItem: {
        type: Object
      },
      manifest: {
        type: Object
      }
    };
  }

  constructor() {
    super();
    import("@lrnwebcomponents/haxcms-elements/lib/ui-components/navigation/site-breadcrumb.js");
    import("@lrnwebcomponents/haxcms-elements/lib/ui-components/blocks/site-recent-content-block.js");
    import("@lrnwebcomponents/video-player/video-player.js");
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
  __subjectSiteQueryCondition(activeItem) {
    if (
      activeItem !== null &&
      activeItem.metadata &&
      activeItem.metadata.fields &&
      activeItem.metadata.fields.subject
    ) {
      return { "metadata.fields.subject": activeItem.metadata.fields.subject };
    }
  }
}
window.customElements.define(HaxThemeCourse.tag, HaxThemeCourse);
export { HaxThemeCourse };
