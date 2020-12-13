const express = require("express");
const {
    orderProduct,
    getOrderDetailes,
    deleteOrder
} = require("../controller/orders");
const router = express.Router();

router.post("/order", orderProduct)
router.get('/get/order', getOrderDetailes)
router.delete('/delete/order/:id', deleteOrder)

module.exports = router;
