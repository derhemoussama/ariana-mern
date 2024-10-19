const express = require('express');
const router = express.Router();
const productController = require('../controllers/porductController'); // Ensure the path and file name are correct

router.get('/products', productController.getProducts);
router.get('/products/:id', productController.getProductById); // Ensure this function is correctly defined in the controller

module.exports = router;
