//Productos
const { ProductsManagerMongo } = require("./manager/products.manager");
const { ProductosModel } = require("./dbModels/products.model");

const productsManager = new ProductsManagerMongo( ProductosModel );

//Carritos
const { CartsManagerMongo } = require("./manager/carts.manager");
const { CarritosModel } = require("./dbModels/carts.model");

const cartsManager = new CartsManagerMongo( CarritosModel );

//Users
const { UserModel } = require("./dbModels/user.model");

module.exports={ productsManager , cartsManager , UserModel };