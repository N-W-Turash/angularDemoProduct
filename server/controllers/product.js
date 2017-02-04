Product = require('../models/').Product;

module.exports= {
  //Get a list of all products using model.findAll()
  index(req, res) {
    Product.findAll({
    })
      .then(function (products) {
        res.status(200).json(products);
      })
      .catch(function (error) {
        res.status(500).json(error);
      });
  },

  //Get a product by the unique ID using model.findById()
  show(req, res) {
    Product.findById(req.params.id, {})
    .then(function (product) {
      res.status(200).json(product);
    })
    .catch(function (error){
      console.log(error);
      res.status(500).json(error);
    });
  },

  //Create a new Product using model.create()
  create(req, res) {
    Product.create(req.body)
      .then(function (newProduct) {
        res.status(200).json(newProduct);
      })
      .catch(function (error){
        res.status(500).json(error);
      });
  },

  //Edit an existing Product details using model.update()
  update(req, res) {
    Product.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    .then(function (updatedRecords) {
      res.status(200).json(updatedRecords);
    })
    .catch(function (error){
      res.status(500).json(error);
    });
  },

  //Delete an existing Product by the unique ID using model.destroy()
  delete(req, res) {
    Product.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function (deletedRecords) {
      res.status(200).json(deletedRecords);
    })
    .catch(function (error){
      res.status(500).json(error);
    });
  }
};