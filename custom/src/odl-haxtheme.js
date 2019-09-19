/**
 * Copyright 2019 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
import { html } from "@polymer/polymer/polymer-element.js";
import { SimpleColors } from "@lrnwebcomponents/simple-colors/simple-colors.js";
import { HAXCMSTheme } from "@lrnwebcomponents/haxcms-elements/lib/core/HAXCMSThemeWiring.js";
import { store } from "@lrnwebcomponents/haxcms-elements/lib/core/haxcms-site-store.js";
import { autorun, toJS } from "mobx/lib/mobx.module.js";
import { dom } from "@polymer/polymer/lib/legacy/polymer.dom.js";
import { wipeSlot } from "@lrnwebcomponents/hax-body/lib/haxutils.js";
import "@polymer/iron-pages/iron-pages.js";
import "./lib/haxtheme-home.js";
import "./lib/haxtheme-about.js";
import "./lib/haxtheme-news.js";
import "./lib/haxtheme-team.js";
import "./lib/haxtheme-courses.js";
import "./lib/haxtheme-course.js";
import "./lib/haxtheme-blog.js";
import "./lib/haxtheme-profile.js";
import "./lib/haxtheme-syllabus.js";
import "./lib/link-preview.js";
import "./lib/page-topbar.js";
import "./lib/page-footer.js";

/**
 * `odl-haxtheme`
 * `ODL custom site theme`
 *
 * @microcopy - language worth noting:
 *  -
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class OdlHaxtheme extends HAXCMSTheme(SimpleColors) {
  
  // render function
  static get template() {
    return html`
<style>:host {
  display: block;
  font-family: "Roboto", sans-serif;
  --theme-color-1: #363533;
  --theme-color-2: #e2801e;
  --theme-color-4: #fff;
  --site-print-button-button: {
    color: #a9a9a9;
  }
}

:root {
  --haxtheme-page-banner-image-text-h1-color: #FFFFFF;
  --haxtheme-homepage-banner-image-text-h1-color: #FFFFFF;
  --site-recent-content-block-active-color: #e2801e;
  --site-rss-bg-color: var(--theme-color-2);

  --site-breadcrumb-color: #a9a9a9;
  --site-breadcrumb-text-decoration: none;
  --site-menu-button-button: {
    background-color: var(--theme-color-2);
    margin: 5px 0 15px;
    border-radius: none;
    color: var(--theme-color-4);
  };
  
  
  --site-menu-button-link: {
    text-decoration: none;
  };


 
  --site-menu-button-tooltip-bg: var(--theme-color-1);
  --site-rss-border-radius: 0;
  --site-rss-bg-active: var(--theme-color-2);
  --site-recent-content-block-item-link: {
    color: var(--theme-color-1);
  };
  
}

:host([hidden]) {
  display: none;
}

scroll-button {
    position: fixed;
    right: 0;
    bottom: 65px;
    margin-right: 25px;
    border: 1px solid #f5f5f5;
  --scroll-button-button: {
    background-color: var(--theme-color-2);
  };
  --scroll-button-button-active: {
    background-color: var(--theme-color-2);
  }
}

site-top-menu {
    width: 100%;
  --site-top-menu-button: {
    padding: 15px 10px;
    margin: 0;
    width: 100%;
    border-radius: 0;
  };
  --site-top-menu-button-hover: {
    background-color: var(--theme-color-1);
    color: white;
  };
  --site-top-menu-link-active: {
    background-color: var(--theme-color-1);
    color: white;
  };
  --site-top-menu-spacing: {
    flex: 1 1 auto;
  };
  --site-top-menu-indicator: {
    border-bottom: 4px solid white;
  };
  --site-top-meu-wrapper: {
    background-color: var(--theme-color-2);
    display: flex;
    justify-content: stretch;
  };
  --site-top-menu-link: {
    width: 100%;
    background-color: var(--theme-color-2);
    color: var(--theme-color-4);
    text-decoration: none;
    display: flex;
    justify-content: center;
    text-transform: uppercase;
  };
}



</style>

<page-topbar></page-topbar>
<site-top-menu 
  conditions='{
    "parent": null,
    "location": {
      "value": "syllabi",
      "operator": "!="
    }
  }'>
</site-top-menu>
<iron-pages selected="[[selectedPage]]">
    <haxtheme-home id="home" edit-mode$="[[editMode]]"></haxtheme-home>
    <haxtheme-news id="news" edit-mode$="[[editMode]]"></haxtheme-news>
    <haxtheme-team id="team" edit-mode$="[[editMode]]"></haxtheme-team>
    <haxtheme-courses id="courses" edit-mode$="[[editMode]]"></haxtheme-courses>
    <haxtheme-about id="about" edit-mode$="[[editMode]]"></haxtheme-about>
    <haxtheme-blog id="blog" edit-mode$="[[editMode]]"></haxtheme-blog>
    <haxtheme-profile id="profile" edit-mode$="[[editMode]]"></haxtheme-profile>
    <haxtheme-course id="course" edit-mode$="[[editMode]]"></haxtheme-course>
    <haxtheme-syllabus id="syllabus" edit-mode$="[[editMode]]"></haxtheme-syllabus>
</iron-pages>
<scroll-button></scroll-button>
<page-footer></page-footer>`;
  }

  // properties available to the custom element for data binding
    static get properties() {
    let props = {
  /**
   * editting state for the page
   */
  "editMode": {
    "type": Boolean,
    "reflectToAttribute": true,
    "observer": "_editModeChanged"
  },
  "activeItemContent": {
    "type": String,
    "observer": "_activeItemContentChanged"
  },
  /**
   * Active item which is in JSON Outline Schema
   */
  "activeItem": {
    "type": Object
  },
  /**
   * a manifest json file decoded, in JSON Outline Schema format
   */
  "manifest": {
    "type": Object
  },
  /**
   * DOM node that wraps the slot
   */
  "contentContainer": {
    "type": Object,
    "value": null,
    "observer": "_contentContainerChanged"
  },
  /**
   * active manifest index, key to location in the manifest itemsarray
   */
  "activeManifestIndex": {
    "type": Number,
    "value": -1
  },
  /**
   * The "page" to show (overview or blog post itself).
   */
  "selectedPage": {
    "type": Number,
    "reflectToAttribute": true,
    "value": 0
  }
}
;
    if (super.properties) {
      props = Object.assign(props, super.properties);
    }
    return props;
  }
  constructor() {
    super();
    import("@lrnwebcomponents/haxcms-elements/lib/ui-components/navigation/site-top-menu.js");
    import("@polymer/paper-card/paper-card.js");
    import("@polymer/paper-button/paper-button.js");
    import("@polymer/iron-icons/iron-icons.js");
    import("@lrnwebcomponents/promo-tile/promo-tile.js");
    import("@lrnwebcomponents/scroll-button/scroll-button.js");
  }
  /**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */
  static get tag() {
    return "odl-haxtheme";
  }
  /**
   * life cycle, element is afixed to the DOM
   */
  connectedCallback() {
    super.connectedCallback();
    autorun(reaction => {
      this._locationChanged(store.location);
      this.__disposer.push(reaction);
    });
    autorun(reaction => {
      this.activeItemContent = toJS(store.activeItemContent);
      this.__disposer.push(reaction);
    });
  }
  disconnectedCallback() {
    for (var i in this.__disposer) {
      this.__disposer[i].dispose();
    }
    super.disconnectedCallback();
  }
  /**
   * Notice content has changed, ensure it shows up in the right place
   * in the theme
   */
  _activeItemContentChanged(newValue) {
    if (newValue) {
      var target;
      // pass in the current location from store
      const location = store.location;
      switch (location.route.name) {
        case "home":
        case "news":
        case "team":
        case "courses":
        case "about":
          target = location.route.name;
          break;
        default:
          if (location.route.path.startsWith("blog-posts/")) {
            target = "blog";
          } else if (location.route.path.startsWith("team-directory/")) {
            target = "profile";
          } else if (location.route.path.startsWith("courses/")) {
            target = "course";
          } else if (location.route.path.startsWith("syllabi/")) {
            target = "syllabus";
          } else if (location.route.path.startsWith("about/")) {
            target = "about";
          }
          break;
      }
      if (target) {
        wipeSlot(this.shadowRoot.querySelector("#" + target), "*");
        let frag = document.createRange().createContextualFragment(newValue);
        dom(this.shadowRoot.querySelector("#" + target)).appendChild(frag);
      }
    }
  }
  /**
   * Notice active item changed state
   */
  _locationChanged(location) {
    if (typeof location !== typeof undefined) {
      var target;
      switch (location.route.name) {
        case "home":
          this.selectedPage = 0;
          target = location.route.name;
          break;
        case "news":
          this.selectedPage = 1;
          target = location.route.name;
          break;
        case "team":
          this.selectedPage = 2;
          target = location.route.name;
          break;
        case "courses":
          this.selectedPage = 3;
          target = location.route.name;
          break;
        case "about":
          this.selectedPage = 4;
          target = location.route.name;
          break;
        default:
          if (location.route.path.startsWith("blog-posts/")) {
            this.selectedPage = 5;
            target = "blog";
          } else if (location.route.path.startsWith("team-directory/")) {
            this.selectedPage = 6;
            target = "profile";
          } else if (location.route.path.startsWith("courses/")) {
            this.selectedPage = 7;
            target = "course";
          } else if (location.route.path.startsWith("syllabi/")) {
            this.selectedPage = 8;
            target = "syllabus";
          } else if (location.route.path.startsWith("about/")) {
            this.selectedPage = 9;
            target = "about";
          }
          break;
      }
      if (target) {
        this.contentContainer = this.shadowRoot
          .querySelector("#" + target)
          .shadowRoot.querySelector("#contentcontainer");
      }

      window.scrollTo(0, 0);
      // this.set('activeItem', e.detail);
    } else {
      this.selectedPage = 0;
    }
  }
}
window.customElements.define(OdlHaxtheme.tag, OdlHaxtheme);
export { OdlHaxtheme };
