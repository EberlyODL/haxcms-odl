const fs = require("fs");
const path = require("path");
// the location of the haxcms site in this container
const HAXCMS_PATH = process.env.HAXCMS_PATH || "/haxcms"
// unique id of the parent of the faqs in site.json
const FAQS_PARENT_ID = process.env.FAQS_PARENT_ID || "faqs"

const faqs = (tags = null) => {
  let faqs = [];
  if (fs.existsSync(path.join(HAXCMS_PATH))) {
    // check if site.json exists
    if (fs.existsSync(path.join(HAXCMS_PATH, "site.json"))) {
      const siteJSON = JSON.parse(fs.readFileSync(path.join(HAXCMS_PATH, "site.json"), 'utf8'));
      // make sure we have items
      if (siteJSON.items) {
        const _faqs = siteJSON.items.filter(i => i.parent === FAQS_PARENT_ID);
        faqs = _faqs;
      }
    }
  }
  return faqs
}

module.exports.faqs = faqs;