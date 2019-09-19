import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
import "@lrnwebcomponents/haxcms-elements/lib/ui-components/query/site-query.js";
import "@polymer/polymer/lib/elements/dom-repeat.js";
import "./page-banner.js";
import "./team-card.js";
class HaxThemeTeam extends PolymerElement {
  static get tag() {
    return "haxtheme-team";
  }
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
        a {
          text-decoration: var(--haxtheme-team-a-text-decoration);
          @apply --haxtheme-team-a;
        }

        #team_card {
          display: var(--haxtheme-team-team-card-display, grid);
          grid-template-columns: var(
            --haxtheme-team-team-card-grid-template-columns,
            repeat(2, auto [col-start])
          );
          justify-content: var(
            --haxtheme-team-team-card-justify-content,
            center
          );
          margin: var(--haxtheme-team-team-card-margin, 25px 0 0 0);
          padding: var(--haxtheme-team-team-card-padding, 0 0 25px 0);
          @apply --haxtheme-team-card;
        }

        @media screen and (max-width: 768px) {
          #team_card {
            grid-template-columns: var(
              --haxtheme-team-team-card-grid-template-columns-mobile,
              repeat(1, auto [col-start])
            );
            @apply --haxtheme-team-card-mobile;
          }
        }
      </style>
      <site-query
        result="{{__items}}"
        conditions='{"metadata.type": "team"}'
        sort
      >
      </site-query>
      <page-banner
        image="files/theme-images/page-banners/team_banner.jpg"
        text="Team"
        alt="Office of Digital Learning Team"
      >
      </page-banner>
      <div id="team_card">
        <dom-repeat items="[[__items]]" mutable-data>
          <template>
            <a href="[[item.location]]">
              <team-card
                name="[[item.metadata.fields.name]]"
                image="[[item.metadata.fields.image]]"
                item="[[item]]"
                position="[[item.metadata.fields.jobTitle]]"
              >
              </team-card>
            </a>
          </template>
        </dom-repeat>
      </div>
      <div id="contentcontainer">
        <div id="slot">
          <slot></slot>
        </div>
      </div>
    `;
  }
}
window.customElements.define(HaxThemeTeam.tag, HaxThemeTeam);
export { HaxThemeTeam };
