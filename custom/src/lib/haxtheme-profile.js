import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
import "./haxtheme-icons.js";
import { store } from "@lrnwebcomponents/haxcms-elements/lib/core/haxcms-site-store.js";
import { autorun, toJS } from "mobx/lib/mobx.module.js";

class HaxThemeProfile extends PolymerElement {
  static get template() {
    return html`
    <style>
      :host {
        display: block;
        --theme-color-1: #363533;
        --theme-color-2: #e2801e;
      }
      /**
       * Hide the slotted content during edit mode. This must be here to work.
       */
      :host([edit-mode]) #slot {
        display: none;
      }
      h1 {
        margin: 15px 0 0;
        font-weight: 400;
      }

      h2 {
        margin: 0;
        font-weight: 100;
        font-size: 24px;
      }

      site-breadcrumb {
        margin-top: 10px;
      }

      #contentcontainer {
        font-size: 1.1rem;
        font-weight: 300;
        line-height: 1.6;
      }

      .profile_container {
        display: flex;
        width: 75%;
        margin-left: auto;
        margin-right: auto;
      }

      @media screen and (max-width: 768px) {
        #profile_wrap {
          padding: 15px;
        }
      }

      #profile_inner_wrap {
        width: 90%;
        margin-right: 20px;
      }


      @media screen and (max-width: 768px) {
        .profile_container {
          flex-direction: column;
          width: 98%;
        }
      }

      .sidebar_wrap {
        width: 25%;
        margin-top: 45px;
        border-left: solid 2px #dcdcdc;
        padding-left: 20px;
        height: 600px;
      }

      @media screen and (max-width: 768px) {
       .sidebar_wrap {
          width: 100%;
          height: auto;
          border: none;
          padding-left: 0;
          margin-top: 10px;
        }
      }

      #news_archive {
        margin-bottom: 25px;
        width: 121%;
      }

      @media screen and (max-width: 768px) {
        #news_archive {
          width: 100%;
          margin-left: auto;
          margin-right: auto;
        }
      }

      #profile_head {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 45px 0 10px;
      }

      @media screen and (max-width: 768px) {
        #profile_head {
          padding-top: 0;
        }
      }

      #profile_image iron-image {
        height: 300px;
        width: 300px;
        border-radius: 50%;
        border: solid 8px #e2801e;
      }

      @media screen and (max-width: 768px) {
        #profile_image iron-image {
          height: 250px;
          width: 250px;
        }
      }

      #connect {
        display: flex;
        justify-content: center;
        margin: 20px 0 20px;
        border-bottom: solid 2px #dcdcdc;
        padding-bottom: 10px;
        width: 40%;
      }

      iron-icon {
        width: 30px;
        height: 30px;
        fill: #a9a9a9;
      }

      iron-icon:hover {
        fill: var(--theme-color-2);
      }

      paper-button {
        padding: 0;
        margin: 0;
        min-width: 3em;
      }

      paper-tooltip {
          --paper-tooltip-background: var(--theme-color-1);
          --paper-tooltip-opacity: 1;
          --paper-tooltip-text-color: var(
            --site-menu-button-tooltip-text,
            #ffffff
          );
          --paper-tooltip-delay-in: 0;
          --paper-tooltip: {
            border-radius: 0;
          }
        }
        
      #prev_next_btns {
        display: flex;
        justify-content: space-between;
        margin-top: 25px;
      }

      @media screen and (max-width: 768px) {
        site-breadcrumb {
          margin: 0 0 30px;
        }
      }

      site-recent-content-block {
        --site-recent-content-block-header-color: #e2801e;
        --site-recent-content-block-active-color: var(--theme-color-2);
      }
    </style>
    
    <div id="profile_wrap">
      <div class="profile_container">
        <div id="profile_inner_wrap">
          <site-breadcrumb></site-breadcrumb>
          <div id="profile_head">
            <div id="profile_image">
            <iron-image sizing="cover" src="[[activeItem.metadata.fields.image]]"></iron-image>
            </div>
            <div id="profile_name">
              <h1>[[activeItem.metadata.fields.name]]</h1>
            </div>
            <div id="profile_position">
              <h2>[[activeItem.metadata.fields.jobTitle]]</h2>
            </div>
            <div id="connect">
              <div class="icon">
                  <a href="[[activeItem.metadata.fields.twitter]]" target="_blank">
                    <paper-button id="twitter" aria-label="twitter" noink="">
                      <iron-icon icon="haxthemeicons:twitter2" role="img"></iron-icon>
                    </paper-button>
                  </a>
                  <paper-tooltip for="twitter" offset="8">Twitter</paper-tooltip>
                </div>  
              <div class="icon"> 
                <a href="mailto:[[activeItem.metadata.fields.email]]">
                  <paper-button id="email" aria-label="email" noink="">
                    <iron-icon icon="haxthemeicons:email" role="img"></iron-icon>
                  </paper-button>
                </a>
                <paper-tooltip for="email" offset="8">Email</paper-tooltip>
              </div>
              <div class="icon">
                <a href="tel:[[activeItem.metadata.fields.phone]]" target="_blank">
                  <paper-button id="phone" aria-label="phone" noink="">
                    <iron-icon icon="haxthemeicons:phone" role="img"></iron-icon>
                  </paper-button>
                </a>
                <paper-tooltip for="phone" offset="8">Phone</paper-tooltip>
              </div>
            </div>
          </div>
          <div id="contentcontainer">
              <div id="slot">
                <slot></slot>
              </div>
            </div>
 
           <div id="prev_next_btns">
            <site-menu-button type="prev" position="top" label="Previous">
              <div slot="suffix">Prev</div>
            </site-menu-button>
            <site-menu-button type="next" position="top" label="Next">
              <div slot="prefix">Next</div>
            </site-menu-button>
           </div>
        </div>
        <div class="sidebar_wrap">
          <div id="news_archive">
            <site-recent-content-block
              title="My Posts"
              conditions="[[__recentPostsConditions(activeItem)]]"
              result="{{__items}}" 
              limit="5"
              sort
              >
            </site-recent-content-block>
          </div>
        </div>
        </div>
      </div>
    </div>`;
  }
  static get tag() {
    return "haxtheme-profile";
  }
  constructor() {
    super();
    import("@lrnwebcomponents/haxcms-elements/lib/ui-components/navigation/site-menu-button.js");
    import("@lrnwebcomponents/haxcms-elements/lib/ui-components/navigation/site-breadcrumb.js");
    import("@lrnwebcomponents/haxcms-elements/lib/ui-components/blocks/site-recent-content-block.js");
    import("@polymer/iron-image/iron-image.js");
    import("@polymer/paper-button/paper-button.js");
    import("@polymer/paper-tooltip/paper-tooltip.js");
    import("@polymer/iron-icon/iron-icon.js");
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

  __recentPostsConditions(activeItem) {
    let condition = {};
    if (activeItem !== null) {
      condition = {
        "metadata.type": "news",
        "metadata.fields.authorId": activeItem.id
      };
    }
    return condition;
  }
}
window.customElements.define(HaxThemeProfile.tag, HaxThemeProfile);
export { HaxThemeProfile };
