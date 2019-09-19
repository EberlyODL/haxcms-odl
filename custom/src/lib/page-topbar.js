import { LitElement, html, css } from "lit-element/lit-element.js";
import "./company-mark.js";
import "./page-search.js";
class PageTopBar extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          display: block;
          padding: 2px;
        }

        #topbar-wrap {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      `
    ];
  }
  render() {
    return html`
      <div id="topbar-wrap">
        <company-mark></company-mark>
        <page-search></page-search>
      </div>
    `;
  }
  static get tag() {
    return "page-topbar";
  }
}
window.customElements.define(PageTopBar.tag, PageTopBar);
export { PageTopBar };
