const express = require('express');
const router = express.Router();
const productService = require('../services/ProductService');

router.get('/', async (req, res) => {
  await productService.getProduct(req, res);
})

router.post('/addproduct', async (req, res) => {
  await productService.createProduct(req, res);
})

router.get('/getAll', async (req, res) => { 
  await productService.getAll(req, res) 
})

router.get('/search/:val', async (req, res) => { 
  await productService.search(req, res) 
})

router.delete('/delete/:id', async (req, res) => {
  await productService.deleteProduct(req, res) 
})

router.get('/getById/:id', async (req, res) => { 
  await productService.getById(req, res) 
})

module.exports = router;
