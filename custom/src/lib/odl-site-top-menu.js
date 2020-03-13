/**
 * Copyright 2019 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
import { html } from "@polymer/polymer/polymer-element.js";
import { SiteTopMenu } from "@lrnwebcomponents/haxcms-elements/lib/ui-components/navigation/site-top-menu.js";
/**
 * `site-top-menu`
 * `Menu on top of the site typically a bar of options`
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */

class OdlSiteTopMenu extends SiteTopMenu {
  /**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */
  static get tag() {
    return "odl-site-top-menu";
  }

  constructor() {
    super();
  }

  static get template() {
    return html`
      <style>
        #indicator {
          z-index: 99;
        }
      </style>
      ${super.template}
    `
  }
}

window.customElements.define(OdlSiteTopMenu.tag, OdlSiteTopMenu);
export { OdlSiteTopMenu };