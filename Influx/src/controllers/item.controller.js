const express = require("express");
const router = express.Router();

const Item = require("../models/item.model");
const Cart = require("../models/cart.model");

router.post("", async (req, res) => {
  try {
    const itemMaster = await Item.create(req.body);
    return res.status(201).send(itemMaster);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.get("", async (req, res) => {
  try {
    const itemMaster = await Item.find().lean().exec();
    return res.send(itemMaster);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const itemMaster = await Item.findById(req.params.id).lean().exec();
    res.status(201).send(itemMaster);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.post("", async (req, res) => {
  try {
    const Product = await item.findOne({ code: req.body.code });

    if (!Product) {
      return res.status(400).send({ message: "item not found" });
    }
    let unitPrice = Code.unitPrice;
    let totalAmt = req.body.qty * unitPrice;

    const useCart = await Cart.create(req.body, { $isNew: true });
    const data = { ...useCart, unitPrice, totalAmt };
    return res.status(200).send(data);
  } catch (err) {
    return res.status(500).send(error.message);
  }
});

router.get("/summarize", async (req, res) => {
  try {
    const useCart = await Cart.find().lean().exec();

    return res.status(200).send(useCart);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = router;
