import { LitElement, html, css } from "lit-element/lit-element.js";
import { autorun, toJS } from "mobx/lib/mobx.module.js";
import { store } from "@lrnwebcomponents/haxcms-elements/lib/core/haxcms-site-store.js";

class PageSearch extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          display: block;
        }
        #search_wrap {
          margin-right: 15px;
        }
      `
    ];
  }
  render() {
    return html`
      <div id="search_wrap">
        <site-modal
          .disabled="${this.editMode}"
          icon="icons:search"
          title="Search site"
          button-label="Search"
        >
          <site-search></site-search>
        </site-modal>
      </div>
    `;
  }
  static get tag() {
    return "page-search";
  }
  constructor() {
    super();
    import("@lrnwebcomponents/haxcms-elements/lib/ui-components/site/site-search.js");
    import("@lrnwebcomponents/haxcms-elements/lib/ui-components/layout/site-modal.js");
    import("@polymer/iron-icon/iron-icon.js");
    this.__disposer = [];
    autorun(reaction => {
      this.editMode = toJS(store.editMode);
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
window.customElements.define(PageSearch.tag, PageSearch);
export { PageSearch };
