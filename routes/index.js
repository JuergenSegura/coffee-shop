const express = require('express');
const router = express.Router();

//REQUIRE AL CONTROLADOR DE ITEMS
const itemsController = require('../controllers/itemsController');
const orderController = require('../controllers/ordersController');



module.exports = function () {

    /**
     * RUTAS PARA LOS ITEMS
     */

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



    /**
     * RUTAS PARA LAS ORDERS
     */
    //OBTENER TODOS LOS ITEMS
    router.get('/order', 
        orderController.getOrder
    ); 

    //OBTENER UN ITEM POR ID
    router.get('/order/:idOrder',  
        orderController.getOrderById
    ); 

    //GUARDAR UN NUEVO ITEM
    router.post('/order', 
        orderController.addOrder
    );

    //ACTUALIZAR ITEMS POR ID
    router.put('/order/:idOrder', 
        orderController.updateOrder
    );



    return router;
}