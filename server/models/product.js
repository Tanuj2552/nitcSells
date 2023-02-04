const db = require('../config/db');

class Product{
    constructor(productName, productPrice, userId, imageId, productdescription){
        this.productName = productName,
        this.productPrice = productPrice,
        this.userId = userId,
        this.imageId = imageId,
        this.productdescription = productdescription
    }
    create(){
        let d = new Date();
        let year = d.getFullYear();
        let month = d.getMonth()+1;
        let date = d.getDate();

        let createAtDate = `${year}-${month}-${date}`;
        let sql = `
            INSERT INTO products(
                productName,
                productPrice,
                userId,
                imageId,
                productDescription
            )
            VALUES(
                '${this.productName}',
                '${this.productPrice}',
                '${this.userId}',
                '${this.imageId}',
                '${this.productdescription}'
            );
        `;

        return db.execute(sql);
    }
}

module.exports = Product;