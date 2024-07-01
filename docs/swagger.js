const generateSwagger = require("swagger-autogen")();
  
  const swaggerDocument = {
    info: {
      version: "1.0.0",
      title: "Product Apis",
      description: "API for Managing products",
      contact: {
        name: "API Support",
        email: "TestUser@gmail.com",
      },
    },
    host: "localhost:5000",
    basePath: "/",
    schemes: ["http"],
    consumes: ["application/json"],
    produces: ["application/json"],
    securityDefinitions: {},
  };
  const swaggerFile= "./docs/swagger.json";
  const apiRouteFile= ["./product/product.routes.js"];
  generateSwagger(swaggerFile, apiRouteFile, swaggerDocument).then(() =>{
    console.log('Swagger documentation generated successfully');
    process.exit();
  });