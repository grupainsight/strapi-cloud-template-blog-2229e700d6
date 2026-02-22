const fs = require('fs');

fs.mkdirSync('src/api/software-house-page/content-types/software-house-page', { recursive: true });
fs.mkdirSync('src/api/software-house-page/routes', { recursive: true });
fs.mkdirSync('src/api/software-house-page/controllers', { recursive: true });
fs.mkdirSync('src/api/software-house-page/services', { recursive: true });

fs.writeFileSync('src/api/software-house-page/content-types/software-house-page/schema.json', JSON.stringify({
  kind: "singleType",
  collectionName: "software_house_page",
  info: { singularName: "software-house-page", pluralName: "software-house-pages", displayName: "Software House Page" },
  options: { draftAndPublish: true },
  attributes: {
    heroHashtag: { type: "string" },
    heroTitle: { type: "string" },
    sectionTitle: { type: "string" },
    text1: { type: "text" },
    text2: { type: "text" },
    stat1Value: { type: "string" },
    stat1Label: { type: "string" },
    stat2Value: { type: "string" },
    stat2Label: { type: "string" },
    stat3Value: { type: "string" },
    stat3Label: { type: "string" },
    stat4Value: { type: "string" },
    stat4Label: { type: "string" },
    techStackTitle: { type: "string" },
    techStackSubtitle: { type: "string" },
    processTitle: { type: "string" },
    ctaTitle: { type: "string" },
    ctaButtonText: { type: "string" },
    ctaButtonUrl: { type: "string" },
  }
}, null, 2));

fs.writeFileSync('src/api/software-house-page/routes/software-house-page.js', `'use strict';\nconst { createCoreRouter } = require('@strapi/strapi').factories;\nmodule.exports = createCoreRouter('api::software-house-page.software-house-page');\n`);
fs.writeFileSync('src/api/software-house-page/controllers/software-house-page.js', `'use strict';\nconst { createCoreController } = require('@strapi/strapi').factories;\nmodule.exports = createCoreController('api::software-house-page.software-house-page');\n`);
fs.writeFileSync('src/api/software-house-page/services/software-house-page.js', `'use strict';\nconst { createCoreService } = require('@strapi/strapi').factories;\nmodule.exports = createCoreService('api::software-house-page.software-house-page');\n`);

console.log('OK');
