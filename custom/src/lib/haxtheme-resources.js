import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
import { store } from "@lrnwebcomponents/haxcms-elements/lib/core/haxcms-site-store.js";
import { autorun, toJS } from "mobx/lib/mobx.module.js";
import "./page-banner.js";
import "./resources-sidemenu.js"

class HaxThemeResources extends PolymerElement {
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
        margin: 25px 0 0;
        font-weight: 400;
        font-size: 36px;
      }


      .publish_credentials {
        border-left: solid;
        border-left-width: 4px;
        border-left-color: #e2801e;
        padding-left: 15px;
      }

      #description {
        font-size: 18px;
        font-weight: 300;
        line-height: 1.4;
      }

      #contentcontainer {
        font-size: 18px;
        font-weight: 300;
        line-height: 1.4;
      }

      .resource_container {
        display: flex;
        width: 80%;
        margin: 0 auto 0;
      }

      @media screen and (max-width: 768px) {
        .resource_container {
          flex-direction: column;
          width: 98%;
        }
      }

      @media screen and (max-width: 768px) {
        #resource_wrap {
          padding: 15px;
        }
      }

      #resource_inner_wrap {
        width: 90%;
        margin-right: 20px;
      }

      @media screen and (max-width: 768px) {
        #resource_inner_wrap {
          width: 95%;
          margin: 0 auto 0;
        }
      }

      .sidebar_wrap {
        width: 25%;
        margin: 45px 0 0 0;
        border-left: solid;
        border-left-width: 2px;
        border-left-color: #dcdcdc;
        padding: 0 0 0 20px;
        height: 750px;
      }

      @media screen and (max-width: 768px) {
       .sidebar_wrap {
          width: var(--haxtheme-blog-side-bar-wrap-width-mobile);
          height: var(--haxtheme-blog-sidebar-wrap-height-mobile);
          border: var(--haxtheme-blog-sidebar-wrap-border-mobile);
          padding: var(--haxtheme-blog-sidebar-wrap-padding-mobile);
          margin: var(--haxtheme-blog-sidebar-wrap-margin-mobile);
        }
      }

      #resource_archive {
        margin-bottom: 25px;
        width: 121%;
      }

      @media screen and (max-width: 768px) {
        #resource_archive {
          width: 100%;
          margin: 0 auto 0 auto;
        }
      }

      site-breadcrumb {
        margin: var(--haxtheme-blog-site-breadcrumb-margin);
      }

      @media screen and (max-width: 768px) {
        site-breadcrumb {
          margin: var(--haxtheme-blog-site-breadcrumb-margin-mobile, 0 0 30px);
        }
      }
    </style>
    
    <page-banner image="[[activeItem.metadata.fields.image]]" text="[[activeItem.title]]" alt="Gateway to the Sciences"></page-banner>
    <div id="resource_wrap">
      <div class="resource_container">
        <div id="resource_inner_wrap">
            <site-breadcrumb></site-breadcrumb>
          <div class="publish_credentials">
            <div class="title">
              <h1>[[activeItem.title]]</h1>
            </div>
            <div id="description">[[activeItem.description]]</div>
          </div>
          <div id="contentcontainer">
              <div id="slot">
                <slot></slot>
              </div>
            </div>
        </div>
        <div class="sidebar_wrap">
          <div id="resource_archive">
            <div id="side_menu">
              <resources-sidemenu></resources-sidemenu>
            </div>
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
