import { LitElement, html, css } from "lit-element/lit-element.js";
import "@polymer/paper-input/paper-input.js"
class HaxthemeSearch extends LitElement {
  /**
   * LitElement constructable styles enhancement
   */
  static get styles() {
    return [
      css`
        :host {
          display: flex;
          flex: 1 1 auto;
          flex-direction: column;
        }

        #container {
          display: block;
          padding: 1em;
        }

        #search {
          max-width: 900px;
          margin: auto;
        }

        input {
          margin: auto;
          padding: 15px;
          border: 1px solid #ccc;
          border-radius: 3px;
          margin-bottom: 10px;
          width: 100%;
          box-sizing: border-box;
          font-family: montserrat;
          color: #2C3E50;
          font-size: 13px;
        }
      `
    ];
  }
  render() {
    return html`
      <div id="container">
        <div id="search">
          <h1>Search</h1>
          <input @input=${this.__inputChanged}>
        </div>
        <div id="results">
        </div>
      </div>
    `;
  }
  static get tag() {
    return "haxtheme-search";
  }
  static get properties() {
    return { 
      results: {
        type: Array
      }
    };
  }
  constructor() {
    super();
    this.results = []
  }
  __inputChanged(e) {
    const value = e.target.value
    const results = fetch('lunrSearchIndex.json').then(res => res.json())
    console.log('results:', results)
  }
}
window.customElements.define(HaxthemeSearch.tag, HaxthemeSearch);
export { HaxthemeSearch };
