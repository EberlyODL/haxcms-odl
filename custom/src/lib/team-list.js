import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
import { store } from "@lrnwebcomponents/haxcms-elements/lib/core/haxcms-site-store.js";
import { autorun, toJS } from "mobx/lib/mobx.module.js";
import "@polymer/polymer/lib/elements/dom-repeat.js";
import "./team-card.js";
class TeamList extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>

      <dom-repeat items="[[_items]]">
        <template>
          <team-card
            name="[[item.title]]"
            image="[[item.metadata.image]]"
            item="[[item]]"
            position="[[item.metadata.jobTitle]]"
          ></team-card>
        </template>
      </dom-repeat>
    `;
  }
  static get tag() {
    return "team-list";
  }
  static get properties() {
    return {
      /**
       * Items from sites.json
       */
      _items: {
        type: Array,
        value: []
      }
    };
  }

  connectedCallback() {
    super.connectedCallback();
    const pages = this.manifest.items;
    const pagesFiltered = pages.filter(item => {
      if (typeof item.metadata !== "undefined") {
        if (typeof item.metadata.type !== "undefined") {
          if (item.metadata.type === "team") {
            return true;
          }
        }
      }
      return false;
    });
    this.set("_items", pagesFiltered);
  }
  constructor() {
    super();
    this.__disposer = autorun(() => {
      this.manifest = toJS(store.routerManifest);
    });
  }
  disconnectedCallback() {
    this.__disposer();
    super.disconnectedCallback();
  }
}
window.customElements.define(TeamList.tag, TeamList);
export { TeamList };
