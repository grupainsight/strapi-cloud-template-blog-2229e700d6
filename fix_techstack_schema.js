const fs = require('fs');
fs.writeFileSync('src/api/tech-stack/content-types/tech-stack/schema.json', JSON.stringify({
  kind: "collectionType",
  collectionName: "tech_stacks",
  info: { singularName: "tech-stack", pluralName: "tech-stacks", displayName: "Tech Stack" },
  options: { draftAndPublish: true },
  attributes: {
    name: { type: "string", required: true },
    category: { type: "enumeration", enum: ["MobileDev", "Frontend", "Backend", "Frameworks", "CMS"], required: true },
    order: { type: "integer", default: 0 },
    logo: { type: "media", multiple: false, required: false, allowedTypes: ["images"] }
  }
}, null, 2));
console.log('OK');
