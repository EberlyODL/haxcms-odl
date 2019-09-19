import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
import { store } from "@lrnwebcomponents/haxcms-elements/lib/core/haxcms-site-store.js";
import { autorun, toJS } from "mobx/lib/mobx.module.js";
import "./page-banner.js";

class HaxThemeSyllabus extends PolymerElement {
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
          color: var(--haxtheme-syllabus-a-color);
          text-decoration: var(--haxtheme-syllabus-a-text-decoration);
          @apply --haxtheme-syllabus-a;
        }

        a:active,
        a:focus,
        a:hover {
          color: var(--haxtheme-syllabus-a-hover-color);
          text-decoration: var(--haxtheme-syllabus-a-hover-text-decoration);
          @apply --haxtheme-syllabus-a-hover;
        }

        h2 {
          margin: var(--haxtheme-syllabus-h2-margin, 0);
          font-weight: var(--haxtheme-syllabus-h2-font-weight);
          font-size: var(--haxtheme-syllabus-h2-font-size);
          @apply --haxtheme-syllabus-h2;
        }

        h3 {
          margin: var(--haxtheme-syllabus-h3-margin, 0);
          font-weight: var(--haxtheme-syllabus-h3-font-weight);
          font-size: var(--haxtheme-syllabus-h3-font-size);
          @apply --haxtheme-syllabus-h3;
        }

        #syllabus_header {
          border-left: var(--haxtheme-syllabus-header-border-left);
          border-left-width: var(--haxtheme-syllabus-header-border-left-width);
          border-left-color: var(--haxtheme-syllabus-accent-color);
          padding-left: var(--haxtheme-syllabus-header-padding-left, 15px);
          @apply --haxtheme-syllabus-header;
        }

        #syllabus_title h1 {
          text-transform: var(--haxtheme-syllabus-syllabus-title-h1, uppercase);
          margin: var(--haxtheme-syllabus-syllabus-title-h1-margin, 25px 0 0);
          font-weight: var(--haxtheme-syllabus-syllabus-title-h1-font-weight);
          @apply --haxtheme-syllabus-syllabus-title-h1;
        }

        .policy h2 {
          margin: var(--haxtheme-syllabus-policy-h2-margin, 5px 0 5px);
          font-weight: var(--haxtheme-syllabus-policy-h2-font-weight, 400);
          font-size: var(--haxtheme-syllabus-policy-h2-font-size, 24px);
          color: var(--haxtheme-syllabus-policy-h2-color);
          @apply --haxtheme-syllabus-policy-h2;
        }

        .policy {
          margin: var(--haxtheme-syllabus-policy-margin, 20px 0 20px);
          font-size: var(--haxtheme-syllabus-policy-font-size);
          font-weight: var(--haxtheme-syllabus-policy-font-weight);
          line-height: var(--haxtheme-syllabus-policy-line-height);
          @apply --haxtheme-syllabus-policy;
        }

        #share_actions {
          display: var(--haxtheme-syllabus-share-actions-display, flex);
          justify-content: var(
            --haxtheme-syllabus-share-actions-justify-content,
            flex-end
          );
          margin: var(--haxtheme-syllabus-share-actions-margin-top, -20px);
          @apply --haxtheme-syllabus-share-actions;
        }

        #syllabus_wrap {
          width: var(--haxtheme-syllabus-syllabus-wrap-width, 75%);
          margin: var(--haxtheme-syllabus-syllabus-wrap-margin, 0 auto 0 auto);
          @apply --haxtheme-syllabus-syllabus-wrap;
        }

        @media screen and (max-width: 768px) {
          #syllabus_wrap {
            width: var(--haxtheme-syllabus-syllabus-wrap-width-mobile, 90%);
            @apply --haxtheme-syllabus-syllabus-wrap-mobile;
          }
        }

        page-banner {
          --page-banner-text-transform: uppercase;
        }

        site-breadcrumb {
          margin: var(--haxtheme-syllabus-site-breadcrumb-margin);
        }
      </style>
      <page-banner
        image="[[activeItem.metadata.fields.image]]"
        text="[[activeItem.title]]"
        alt="[[activeItem.metadata.fields.imageAlt]]"
      ></page-banner>
      <div id="syllabus_wrap">
        <site-breadcrumb></site-breadcrumb>
        <div id="syllabus_header">
          <div id="syllabus_title">
            <h1>[[activeItem.title]]</h1>
          </div>
          <div id="syllabus_subtitle">
            <h2>[[activeItem.name]]</h2>
          </div>
          <div id="syllabus_sample">
            <h3>Sample Syllabus</h3>
          </div>
        </div>
        <div id="share_actions">
          <site-print-button></site-print-button>
        </div>
        <div id="syllabus">
          <div id="contentcontainer">
            <div id="slot">
              <slot></slot>
            </div>
          </div>
        </div>
        <div id="syllabus_policy">
          <div class="policy">
            <h2>Academic Integrity</h2>
            <div>
              Academic integrity is the pursuit of scholarly activity in an
              open, honest and responsible manner. Academic integrity is a basic
              guiding principle for all academic activity at The Pennsylvania
              State University, and all members of the University community are
              expected to act in accordance with this principle. Consistent with
              this expectation, the University’s Code of Conduct states that all
              students should act with personal integrity, respect other
              students’ dignity, rights and property, and help create and
              maintain an environment in which all can succeed through the
              fruits of their efforts.
            </div>
            <br />
            <div>
              Academic integrity includes a commitment by all members of the
              University community not to engage in or tolerate acts of
              falsification, misrepresentation or deception. Such acts of
              dishonesty violate the fundamental ethical principles of the
              University community and compromise the worth of work completed by
              others.
            </div>
          </div>
          <div class="policy">
            <h2>Accommodating Disabilities</h2>
            <div>
              Penn State welcomes students with disabilities into the
              University’s educational programs. Every Penn State campus has an
              office for students with disabilities. The
              <a
                href="http://equity.psu.edu/sdr/disability-coordinator"
                target="_blank"
                >Student Disability Resources (SDR) website
              </a>
              provides contact information for every Penn State campus . For
              further information, please visit
              <a href="http://equity.psu.edu/sdr/" target="_blank"
                >Student Disability Resources website</a
              >. <br /><br />
              In order to receive consideration for reasonable accommodations,
              you must contact the appropriate disability services office at the
              campus where you are officially enrolled, participate in an intake
              interview, and provide documentation:
              <a href="http://equity.psu.edu/sdr/guidelines" target="_blank"
                >See documentation guidelines</a
              >
              . If the documentation supports your request for reasonable
              accommodations, your campus disability services office will
              provide you with an accommodation letter. Please share this letter
              with your instructors and discuss the accommodations with them as
              early as possible. You must follow this process for every semester
              that you request accommodations.
            </div>

            <div class="policy">
              <h2>Counseling and Psychological Services</h2>
              <div>
                Many students at Penn State face personal challenges or have
                psychological needs that may interfere with their academic
                progress, social development, or emotional wellbeing. The
                university offers a variety of confidential services to help you
                through difficult times, including individual and group
                counseling, crisis intervention, consultations, online chats,
                and mental health screenings. These services are provided by
                staff who welcome all students and embrace a philosophy
                respectful of clients’ cultural and religious backgrounds, and
                sensitive to differences in race, ability, gender identity and
                sexual orientation.
              </div>
              <ul>
                <li>
                  <a
                    href="http://studentaffairs.psu.edu/counseling/"
                    target="_blank"
                    >Counseling and Psychological Services at University Park
                    (CAPS)</a
                  >: 814-863-0395
                </li>
                <li>
                  <a
                    href="http://senate.psu.edu/faculty/counseling-services-at-commonwealth-campuses/"
                    target="_blank"
                    >Counseling and Psychological Services at Commonwealth
                    Campuses</a
                  >
                </li>
                <li>
                  Penn State Crisis Line (Available 24 hrs, 7 days a week):
                  877-229-6400
                </li>
                <li>
                  Crisis Text Line (Available 24 hrs, 7 days a week): Text LIONS
                  to 741741
                </li>
              </ul>
            </div>
            <div class="policy">
              <h2>Educational Equity / Report Bias</h2>
              <div>
                Penn State takes great pride to foster a diverse and inclusive
                environment for students, faculty, and staff. Acts of
                intolerance, discrimination, or harassment due to age, ancestry,
                color, disability, gender, gender identity, national origin,
                race, religious belief, sexual orientation, or veteran status
                are not tolerated and can be reported through Educational Equity
                via the
                <a href="http://equity.psu.edu/reportbias/" target="_blank"
                  >Report Bias website</a
                >.
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
  static get tag() {
    return "haxtheme-syllabus";
  }
  constructor() {
    super();
    import("@lrnwebcomponents/haxcms-elements/lib/ui-components/navigation/site-breadcrumb.js");
    import("@lrnwebcomponents/haxcms-elements/lib/ui-components/site/site-print-button.js");
    import("@polymer/iron-image/iron-image.js");
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
}
window.customElements.define(HaxThemeSyllabus.tag, HaxThemeSyllabus);
export { HaxThemeSyllabus };
