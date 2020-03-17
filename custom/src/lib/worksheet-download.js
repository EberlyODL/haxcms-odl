import { LitElement, html, css } from "lit-element/lit-element.js";
import "@polymer/paper-button/paper-button.js";
import "@polymer/iron-icon/iron-icon.js";

class WorksheetDownload extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      link: { type: String }
    };
  }

  static get haxProperties() {
    return {
      canScale: false,
      canPosition: true,
      canEditSource: false,
      gizmo: {
        title: "Worksheet-Download",
        description: "A button for displaying files available for download.",
        icon: "icons:file-download",
        color: "blue",
        meta: {
          author: "LRNWebComponents"
        }
      },
      settings: {
        quick: [
          {
            property: "title",
            title: "Title",
            description: "The title of the download.",
            inputMethod: "textfield",
            icon: "editor:title"
          },
          {
            property: "link",
            title: "Link",
            description: "The link for the download.",
            inputMethod: "textfield",
            icon: "editor:insert-link"
          }
        ],
        configure: [
          {
            property: "title",
            title: "Title",
            description: "The title of the download.",
            inputMethod: "textfield",
            icon: "editor:title"
          },
          {
            property: "link",
            title: "Link",
            description: "The link for the download.",
            inputMethod: "textfield",
            icon: "editor:insert-link"
          }
        ],
        advanced: []
      }
    };
  }

  constructor() {
    super();
    this.title = "";
    this.link = "";
  }
  static get styles() {
    return [css`
      :host {
        display: block;
      }

      a {
        text-decoration: none;
        color: #0c7cd5;
      }

      paper-button {
        --paper-button-ink-color: #dcdcdc;
        text-transform: none;
        border: solid 2px #dcdcdc;
        display: flex;
        width: 100%;
        margin: 0 auto 0;
      }

      paper-button:hover {
        background-color: #0c7cd5;
        color: #fff;
      }

      iron-icon {
        margin-right: 5px;
      }
    `];
  }
  render() {
    return html`
      <div id="button_wrap">
        <a href="${this.link}" target="_blank">
          <paper-button>
            <iron-icon icon="file-download"></iron-icon>
            ${this.title}
          </paper-button>
        </a>
      </div>
    `;
  }
}
customElements.define("worksheet-download", WorksheetDownload);
export { WorksheetDownload };
