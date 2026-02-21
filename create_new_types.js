const fs = require('fs');

// tech-stack
const dirs = [
  'src/api/tech-stack/content-types/tech-stack',
  'src/api/tech-stack/routes',
  'src/api/tech-stack/controllers',
  'src/api/tech-stack/services',
  'src/api/process-step/content-types/process-step',
  'src/api/process-step/routes',
  'src/api/process-step/controllers',
  'src/api/process-step/services',
];
dirs.forEach(d => fs.mkdirSync(d, { recursive: true }));

fs.writeFileSync('src/api/tech-stack/content-types/tech-stack/schema.json', JSON.stringify({
  kind: "collectionType",
  collectionName: "tech_stacks",
  info: { singularName: "tech-stack", pluralName: "tech-stacks", displayName: "Tech Stack" },
  options: { draftAndPublish: true },
  attributes: {
    name: { type: "string", required: true },
    category: { type: "enumeration", enum: ["MobileDev", "Frontend", "Backend", "Frameworks", "CMS"], required: true },
    order: { type: "integer", default: 0 },
  }
}, null, 2));

fs.writeFileSync('src/api/process-step/content-types/process-step/schema.json', JSON.stringify({
  kind: "collectionType",
  collectionName: "process_steps",
  info: { singularName: "process-step", pluralName: "process-steps", displayName: "Process Step" },
  options: { draftAndPublish: true },
  attributes: {
    number: { type: "string", required: true },
    title: { type: "string", required: true },
    description: { type: "text", required: true },
    order: { type: "integer", default: 0 },
  }
}, null, 2));

['tech-stack', 'process-step'].forEach(name => {
  const n = name.replace('-', '_');
  fs.writeFileSync(`src/api/${name}/routes/${name}.js`, `'use strict';\nconst { createCoreRouter } = require('@strapi/strapi').factories;\nmodule.exports = createCoreRouter('api::${name}.${name}');\n`);
  fs.writeFileSync(`src/api/${name}/controllers/${name}.js`, `'use strict';\nconst { createCoreController } = require('@strapi/strapi').factories;\nmodule.exports = createCoreController('api::${name}.${name}');\n`);
  fs.writeFileSync(`src/api/${name}/services/${name}.js`, `'use strict';\nconst { createCoreService } = require('@strapi/strapi').factories;\nmodule.exports = createCoreService('api::${name}.${name}');\n`);
});

console.log('OK');
