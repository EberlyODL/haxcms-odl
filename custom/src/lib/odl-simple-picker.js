/**
 * Copyright 2018 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
import { css } from "lit-element/lit-element.js";
import { SimplePicker } from "@lrnwebcomponents/simple-picker/simple-picker.js";

class OdlSimplePicker extends SimplePicker {
  static get styles() {
    return [
      super.styles,
      css`
        .row {
          display: flex;
          flex-direction: column;
        }

        @media screen and (max-width: 600px) {
          #collapse {
            position: absolute;
            top: -225px;
          }
        }
    `];
  }
  static get tag() {
    return "odl-simple-picker";
  }
  constructor() {
    super();
  }
}
window.customElements.define(OdlSimplePicker.tag, OdlSimplePicker);
export { OdlSimplePicker };
