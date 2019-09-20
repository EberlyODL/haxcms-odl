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
      </style>

      <div id="container">
      <site-query
          result="{{__courseitems}}"
          conditions='{
          "metadata.type": "course"
        }'
        ></site-query>
        <dropdown-select
          id=""
          value=""
          label="Select a subject."
          placeholder=""
        >
        <dom-repeat items="[[__courseItemsDuped(__courseitems)]]" mutable-data>
          <template>
            <paper-item value="course">[[item]]</paper-item>
          </template>
        </dom-repeat>
        </dropdown-select>
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
    const subjects = items.map(item => item.metadata.fields.subject)
    const filtered = subjects.filter((item, index) => {
      return subjects.indexOf(item) === index
    })
    return filtered
  }
}
window.customElements.define(ContentListing.tag, ContentListing);
export { ContentListing };
