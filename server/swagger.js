const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Ecom App API',
      version: '1.0.0',
      description: 'API Documentation for Ecom App Backend',
      contact: {
        name: 'API Support',
        email: 'support@example.com'
      }
    },
    servers: [{ url: 'http://localhost:3000', description: 'Local server' }]
  },
  apis: ['./server/routes/*.js']
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};
