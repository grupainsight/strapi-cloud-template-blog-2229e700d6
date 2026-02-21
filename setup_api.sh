#!/bin/bash
for type in hero-slide service testimonial client portfolio-item homepage; do
  mkdir -p src/api/$type/routes
  mkdir -p src/api/$type/controllers
  mkdir -p src/api/$type/services
  
  echo "'use strict';
const { createCoreRouter } = require('@strapi/strapi').factories;
module.exports = createCoreRouter('api::$type.$type');" > src/api/$type/routes/$type.js

  echo "'use strict';
const { createCoreController } = require('@strapi/strapi').factories;
module.exports = createCoreController('api::$type.$type');" > src/api/$type/controllers/$type.js

  echo "'use strict';
const { createCoreService } = require('@strapi/strapi').factories;
module.exports = createCoreService('api::$type.$type');" > src/api/$type/services/$type.js

  echo "Utworzono: $type"
done
echo "GOTOWE!"
