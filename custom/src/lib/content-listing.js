import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
import "@lrnwebcomponents/haxcms-elements/lib/ui-components/query/site-query.js";
import { store } from "@lrnwebcomponents/haxcms-elements/lib/core/haxcms-site-store.js";
import { autorun, toJS } from "mobx/lib/mobx.module.js";

class ContentListing extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }

        #container {
          background-color: #363533;
          padding: 40px 0 55px 0;
        }

        @media screen and (max-width: 1012px) {
          #container {
            flex-direction: column;
            height: auto;
            padding: 0;
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
          border-top-color: #e2801e;
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

        #image {
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          width: 50%;
          height: 400px;
        }

        @media screen and (max-width: 1012px) {
          #image {
            height: 300px;
            margin: 15px 0 0 0;
            width: 100%;
          }
        }

        #image {
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
          width: 100%;
          height: 300px;
        }

      </style>

      <div id="container">
        <div id="border">
        <div
          id="image"
          style="background-image:url([[image]])"
          alt="[[alt]]"
        ></div>


        <div id="menu-header">


          <div id="title">
            <h2>[[title]]</h2>
          </div>
          <div id="menu">
            <site-query
              result="{{__courseitems}}"
              conditions='{
              "metadata.type": "course"
            }'
            ></site-query>
            <dropdown-select
              id=""
              value=""
              label=""
              placeholder="Subject"
            >
              <dom-repeat
                items="[[__courseItemsDuped(__courseitems)]]"
                mutable-data
              >
                <template>
                  <paper-item value="course">[[item]]</paper-item>
                </template>
              </dom-repeat>
            </dropdown-select>
          </div>



        </div>



        <div id="results-container">
          Results here!
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
       * Course Items
       */
      items: {
        type: Array
      },
      /**
       * Image
       */
      image: {
        type: String
      },
      /**
       * Alt Text for Image
       */
      alt: {
        type: String
      },
      /**
       * Title
       */
      title: {
        type: String
      }
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
  __courseItemsDuped(items) {
    const subjects = items.map(item => item.metadata.fields.subject);
    const filtered = subjects.filter((item, index) => {
      return subjects.indexOf(item) === index;
    });
    return filtered;
  }
}
window.customElements.define(ContentListing.tag, ContentListing);
export { ContentListing };
