const db = require('../config/db');
const Product = require("../models/product");

exports.getProductById = (req, res, next, id) => {
    req.productId = id;
    next();
}

exports.postProduct = (req,res) => {
    const {productname, productprice, userid, imageid} = req.body;
    let product = new Product(productname, productprice, userid, imageid);
    product.create()
    .then((r) => {
        res.json("Product is Added!!!");
    }).catch((e) => {
        if(e){
            res.status(400).json({"err" : "Failed", e});
        }
    });
}

exports.getProduct = (req,res) => {
    const {productId} = req;
    console.log(productId);
    let sql = `SELECT * FROM products WHERE productId = ${productId};`;

    db.execute(sql)
    .then((r)=>{
        res.json(r);
    }).catch((e) => {
        if(e){
            res.status(400).json({"err" : "Failed", e});
        }
    });
}

exports.getAllProducts = (req,res) => {
    let sql = `SELECT * FROM products WHERE productStatus = 0;`;
    db.execute(sql)
    .then((r)=>{
        res.json(r);
    }).catch((e) => {
        if(e){
            res.status(400).json({"err" : "Failed", e});
        }
    });
}