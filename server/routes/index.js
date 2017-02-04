var products = require('../controllers/product');

module.exports = function (router) {
  router.get('/products', products.index);
  router.get('/products/:id', products.show);
  router.post('/products', products.create);
  router.put('/products/:id', products.update);
  router.delete('/products/:id', products.delete);
  return router;
};