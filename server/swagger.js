const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Basic swagger options
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
      },
      servers: [{ url: 'http://localhost:3000' }] // Change to your deployed URL
    }
  },
  apis: ['./server/routes/*.js'] // Path to your route files
};

// Initialize swagger-jsdoc
const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};
