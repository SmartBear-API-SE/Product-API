import swaggerAutogen from "swagger-autogen";

const options = {
  openapi: "3.0.0"
}

  
  const swaggerDocument = {
    info: {
      version: "1.0.0-oas3",
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
  swaggerAutogen(swaggerFile, apiRouteFile, swaggerDocument,options).then(() =>{
    console.log('Swagger documentation generated successfully');
    process.exit();
  });