import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
import "@lrnwebcomponents/haxcms-elements/lib/ui-components/query/site-query.js";
import { store } from "@lrnwebcomponents/haxcms-elements/lib/core/haxcms-site-store.js";
import { varExists, varGet } from "@lrnwebcomponents/hax-body/lib/haxutils.js";
import { autorun, toJS } from "mobx/lib/mobx.module.js";
import "@lrnwebcomponents/simple-picker/simple-picker.js"
import "./course-tile.js";
class ContentListing extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          }

        a {
          text-decoration: var(--haxtheme-page-feature-a-text-decoration);
        }

        h1 {
          font-size: var(--haxtheme-page-feature-h1-font-size);
          margin: 0;
          line-height: 1;
          font-weight: var(--haxtheme-page-feature-h1-font-weight);
        }

        @media screen and (max-width: 768px) {
          h1 {
            font-size: 28px;
          }
        }

        h2 {
          font-size: 32px;
          margin: 0;
          font-weight: var(--haxtheme-page-feature-h2-font-weight);
        }

        @media screen and (max-width: 768px) {
          h2 {
            font-size: 24px;
          }
        }

        #feature_wrap {
          background-color: var(--haxtheme-page-feature-wrap-background-color);
          padding: 40px 0 55px 0;
        }

        @media screen and (max-width: 1012px) {
          #feature_wrap {
            flex-direction: column;
            height: auto;
            padding: 0 15px;
            background-color: transparent;
          }
        }

        #border {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 40px 0 0 0;
          width: 94%;
          border-top: dashed;
          border-top-width: 4px;
          border-top-color: var(
            --haxtheme-page-feature-border-border-top-color
          );
          margin: 0 auto 0 auto;
        }

        @media screen and (max-width: 1012px) {
          #border {
            flex-direction: column;
            height: auto;
            border: none;
            padding: 5px 0 0 0;
            width: 100%;
          }
        }

        #feature_image {
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          width: 50%;
          height: 400px;
        }

        @media screen and (max-width: 1012px) {
          #feature_image {
            height: 300px;
            margin: 15px 0 0 0;
            width: 100%;
          }
        }

        #feature_description_wrap {
          background-color: var(
            --haxtheme-page-feature-feature-description-wrap-background-color
          );
          height: auto;
          width: 780px;
          z-index: 1;
          margin: 0 25px 0 -30px;
          box-shadow: 1px 2px 7px
            var(
              --haxtheme-page-feature-feature-description-wrap-box-shadow-color
            );
        }

        @media screen and (max-width: 1124px) {
          #feature_description_wrap {
            width: 100%;
            z-index: 0;
            box-shadow: none;
            margin: 0;
          }
        }

        #title_wrap {
          display: flex;
          flex-direction: column;
          border-left: var(--haxtheme-page-feature-title-wrap-border-left);
          border-left-width: var(
            --haxtheme-page-feature-title-wrap-border-left-width
          );
          border-left-color: var(
            --haxtheme-page-feature-title-wrap-border-left-color
          );
          padding: 0 0 0 15px;
          margin: 20px 0 0 20px;
        }

        @media screen and (max-width: 768px) {
          #title_wrap {
            margin: 20px 0 0 0;
          }
        }

        #title {
          margin: 0 0 10px 0;
        }

        #description {
          font-size: var(--haxtheme-page-feature-description-font-size);
          font-weight: var(--haxtheme-page-feature-description-font-weight);
          line-height: var(--haxtheme-page-feature-description-line-height);
          height: auto;
        }

        @media screen and (max-width: 768px) {
          #description {
            padding: 25px 0 0 0;
            margin: 0 0 25px 0;
          }
        }

        #results {
          display: flex;
          flex-wrap: wrap;
          border: solid 2px #dcdcdc;
          height: auto;
          margin: 20px;
        }

        @media screen and (max-width: 768px) {
          #results {
            margin: 0;
          }
        }

        simple-picker {
          width: 55%;
          --simple-picker-row: {
            display: block;
          }
        }

        @media screen and (max-width: 768px) {
          simple-picker {
            width: 100%;
          }
        }

        course-tile {
          margin: 1px;
          flex-grow: 1;
        }
      </style>
      <div id="feature_wrap">
        <div id="border">
          <div
            id="feature_image"
            style$="background-image:url([[image]])"
            alt="[[alt]]"
          ></div>
          <div id="feature_description_wrap">
            <div id="title_wrap">
              <div id="title">
                <h1>[[title]]</h1>
              </div>
              <site-query
                result="{{__courseitems}}"
                conditions="[[condition]]"
              ></site-query>
              <simple-picker
                allow-null
                id="courseselect"
                label="Select a Subject"
                value="{{__selectedCourse}}"
                position=""
                options="[[__courselist(__courseitems)]]"
              >
              </simple-picker>
            </div>

            <div id="description">

              
              <div id="results">
              <dom-repeat items="[[__selectedCourses(__selectedCourse, __courseitems)]]">
                <template>
                  <course-tile
                    name="[[item.title]]"
                    image="[[item.metadata.fields.image]]"
                    url="[[item.location]]"
                  ></course-tile>
                </template>
              </dom-repeat>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
  static get tag() {
    return "content-listing";
  }
  static get properties() {
    return {
      /**
       * Image source
       */
      image: {
        type: String
      },
      /**
       * Alt text for image
       */
      alt: {
        type: String
      },
      /**
       * Title for feature
       */
      title: {
        type: String
      },
      /**
       * Condition
       */
      condition: {
        type: Object
      },
      /**
       * Location
       */
      location: {
        type: String
      },
    };
  }

  constructor() {
    super();
    this.__disposer = [];
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

  __filteredCourselist(items) {
    let filterIndex = [];
    const filtered = items.filter(item => {
      if (filterIndex.includes(varGet(item, this.location, false))) {
        return false;
      } else {
        filterIndex.push(varGet(item, this.location, false));
        return true;
      }
    });
    return filtered;
  }
  __courselist(items) {
    const filtered = this.__filteredCourselist(items);
    const courses = filtered.map(item => {
      return {
        value: varGet(item, this.location, false),
        alt: varGet(item, this.location, false)
      };
    });
    return [courses];
  }
  __courseItemsDuped(items) {
    const filtered = this.__filteredCourselist(items);
    const subjects = filtered.map(item => varGet(item, this.location, false));
    return subjects;
  }

  __selectedCourses(selected, courses) {
    const filtered = courses.filter(course => {
      if (course.metadata.fields.subject === selected) {
        return true;
      }
      else {
        return false;
      }
    });
      
      return filtered;  
  }
  

}




window.customElements.define(ContentListing.tag, ContentListing);
export { ContentListing };
