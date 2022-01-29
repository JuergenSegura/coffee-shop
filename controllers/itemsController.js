const Item = require('../models/Items');



//GET ITEMS => OBTIENE TODOS LOS ITEMS DE LA BASE DE DATOS
exports.getItems = function (req, res) {
  Item.find(function (err, item) {
    if (err) res.send(500, err.message);

    console.log("GET /item");
    res.status(200).jsonp(item);
  });
};


//GET ITEM BY ID => OBTIENE EL ITEM POR ID
exports.getItemById = function (req, res) {
  Item.findById(req.params.idItem, function (err, item) {
    if (err) res.send(500, err.message);

    console.log("GET /itemById");
    res.status(200).jsonp(item);
  });
};



//ADD ITEM => AGREGA UN NUEVO ITEM
exports.addItem = function (req, res) {
  var items = new Item(req.body);
  console.log(items);
  items.save(function (err, item) {
    if (err)
      return res.send(err);
    return res.status(200).jsonp(items);
  });
};


//UPDATE ITEM => ACTUALIZA UN ITEM POR EL ID
exports.updateItem = async (req, res) => {

  req.body.updatedAt = Date.now();
  const item = await Item.updateOne({
      _id: req.params.idItem
    },
    req.body, {
      new: true
    });

  if (item.err) {
    return res.send(item.err);
  }
  const itemUpdated = {
    'image': req.body.image,
    'price': req.body.price,
    'id': req.params.idItem,
    'name': req.body.name
  }
  return res.status(200).jsonp(itemUpdated);

}



//DELETE ITEM BY ID
exports.deleteItemById = async (req, res) => {
  const item = await Item.findOneAndDelete({
    _id: req.params.idItem
  }, (err) => {

    if (err) {
      return res.send(err);
    } else {
      return res.status(200).jsonp(item.idItem);
    }

  });

}