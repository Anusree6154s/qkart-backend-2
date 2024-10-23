const express = require("express");
const router = express.Router();
// const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('../../api-doc/swagger.json')
const path = require('path');
const { spec } = require("../../api-doc/swagger");

router.get('/swagger.json', (req, res) => {
    // res.sendFile(path.join(__dirname, '../../api-doc/swagger.json'));
    res.send(spec)
});

router.get('/docs', (req, res) => {
    res.sendFile(path.join(__dirname, '../../api-doc/docs.html'));
});

router.get('/logo', (req, res) => {
    res.sendFile(path.join(__dirname, '../../api-doc/logo.png'));
});

// router.get('/api-docs', swaggerUi.serve, swaggerUi.setup(null, {
//   swaggerUrl: '/swagger.json' // Use the swagger.json file
// }));


module.exports = router;