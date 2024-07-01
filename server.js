const app = require('express')();
const cors = require('cors');
const routes = require('./product/product.routes');
const swaggerUi = require('swagger-ui-express')
const swaggerSpec = require('./docs/swagger.json')

const port = 5001;

const init = () => {
    app.use(cors);
    app.use(routes);
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
    return app.listen(port, () => console.log(`Provider API listening on port ${port}...`));
};

init();