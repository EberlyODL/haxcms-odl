import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
import { store } from "@lrnwebcomponents/haxcms-elements/lib/core/haxcms-site-store.js";
import { autorun, toJS } from "mobx/lib/mobx.module.js";
import "./page-banner.js";

class HaxThemeResources extends PolymerElement {
  static get template() {
    return html`
    <style>
      :host {
        display: block;
      }

    </style>
    
    <page-banner image="[[activeItem.metadata.fields.image]]" text="[[activeItem.title]]" alt="Gateway to the Sciences"></page-banner>
    <div id="blog_wrap">
      <div class="blog_container">
        <div id="blog_inner_wrap">
            <site-breadcrumb></site-breadcrumb>
          <div class="publish_credentials">
            <div class="title">
              <h1>[[activeItem.title]]</h1>
            </div>
          </div>
          <div id="contentcontainer">
              <div id="slot">
                <slot></slot>
              </div>
            </div>
        </div>
        <div class="sidebar_wrap">
          <div id="news_archive">
            <site-recent-content-block
              title="News Archive"
              conditions='{"metadata.type": {
                          "value": ["spotlight", "news"],
                          "operator": "=="
              }}'
              limit="5"
            >
            </site-recent-content-block>
          </div>
        </div>
        </div>
      </div>
    </div>`;
  }
  static get tag() {
    return "haxtheme-resources";
  }
  

  constructor() {
    super();
    import("@polymer/iron-image/iron-image.js");
    import("@lrnwebcomponents/haxcms-elements/lib/ui-components/navigation/site-menu-button.js");
    import("@lrnwebcomponents/haxcms-elements/lib/ui-components/navigation/site-breadcrumb.js");
    import("@lrnwebcomponents/haxcms-elements/lib/ui-components/blocks/site-recent-content-block.js");
    import("@lrnwebcomponents/haxcms-elements/lib/ui-components/site/site-print-button.js");
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
}
window.customElements.define(HaxThemeResources.tag, HaxThemeResources);
export { HaxThemeResources };
