import { html, Polymer } from "@polymer/polymer/polymer-legacy.js";
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-tooltip/paper-tooltip.js';
import "@polymer/iron-icon/iron-icon.js";
import './haxtheme-icons.js';
Polymer({
  _template: html`
    <style>
      :host {
        display: block;
        --icon-fill:#adb5bd;
        --icon-fill-hover:#6c757d;
        --paper-tooltip-background: #6c757d;
        --paper-tooltip-delay-in: 100;
      }

     paper-tooltip {
      --paper-tooltip: {
        font-size: 16px;
        text-transform: none;
      }
     }

      iron-icon {
        width: 50px;
        height: 50px;
        fill: var(--icon-fill);
      }

      iron-icon:hover {
        fill: var(--icon-fill-hover);
      }
      
      paper-button#scroll {
        transition: opacity .25s ease-in-out;
        position: fixed;
        bottom: 70px;
        right: 10px;
        z-index: 99;
        padding: 10px;
      }

      @media screen and (max-width: 700px) {
        paper-button#scroll {
          bottom: 70px;
          right: 0;
        }
      }
    </style>
    <paper-button id="scroll" on-click="__topFunction" aria-label="scroll to top" noink="">
      <iron-icon icon="haxthemeicons:scroll" role="img"></iron-icon>
      <paper-tooltip for="scroll" position="left" offset="0">Scroll to top</paper-tooltip>
    </paper-button>
`,

  is: "page-scroll",

  // When the user scrolls down 500px from the top of the document, show the button
  attached: function() {
    window.addEventListener("scroll", this.scrollTop.bind(this));
  },
  detached: function() {
    window.removeEventListener("scroll", this.scrollTop.bind(this));
  },
  scrollTop: function() {
    if (
      document.body.scrollTop > 600 ||
      document.documentElement.scrollTop > 600
    ) {
      document.getElementById("scroll").style.opacity = "0.9";
    } else {
      document.getElementById("scroll").style.opacity = "0";
    }
  },

  // When the user clicks on the button, scroll to the top of the document
  __topFunction: function(e) {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
});
