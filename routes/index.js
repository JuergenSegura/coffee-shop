const express = require('express');
const router = express.Router();

//REQUIRE AL CONTROLADOR DE ITEMS
const itemsController = require('../controllers/itemsController');



module.exports = function () {

    //OBTENER TODOS LOS ITEMS
    router.get('/item', 
        itemsController.getItems
    ); 

    //OBTENER UN ITEM POR ID
    router.get('/item/:idItem',  
        itemsController.getItemById
    ); 

    //GUARDAR UN NUEVO ITEM
    router.post('/item', 
        itemsController.addItem
    );

    //ACTUALIZAR ITEMS POR ID
    router.put('/item/:idItem', 
        itemsController.updateItem
    );

    //ELIMINAR ITEMS POR ID
    router.delete('/item/:idItem', 
        itemsController.deleteItemById
    );


    return router;
}