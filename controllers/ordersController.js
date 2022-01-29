const Order = require('../models/Orders');




//GET ORDER => OBTIENE TODAS LAS ORDERS DE LA BASE DE DATOS
exports.getOrder = function (req, res) {
    Order.find(function (err, order) {
      if (err) res.send(500, err.message);
  
      console.log("GET /order");
      res.status(200).jsonp(order);
    });
  };
  
  
  //GET ITEM BY ID => OBTIENE EL ITEM POR ID
  exports.getOrderById = function (req, res) {
    Order.findById(req.params.idOrder,function (err, order) {
      if (err) res.send(500, err.message);
  
      console.log("GET /orderById");
      res.status(200).jsonp(order);
    });
  };
  
  
  
  //ADD ITEM => AGREGA UN NUEVO ITEM
  exports.addOrder = function (req, res) {
    var order = new Order(req.body);
    console.log(order);
    order.save(function (err, order) {
      if (err)
        return res.send(err);
      return res.status(200).jsonp(order);
    });
  };
  
  
  //UPDATE ITEM => ACTUALIZA UN ITEM POR EL ID
  exports.updateOrder = async (req, res) => {
  
    req.body.updatedAt =  Date.now();
    const order = await Order.updateOne({_id: req.params.idOrder},
      req.body, {
        new: true
    });
  
    if(order.err) {
      return res.send(order.err);
    }

    
    return res.status(200).jsonp({
        "status": 200
      });
  
  }
  

//UPDATE STATE => ACTUALIZA EL ESTADO 