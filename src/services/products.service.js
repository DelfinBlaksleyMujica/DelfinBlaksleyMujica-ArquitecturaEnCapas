//Managers
const { productsManager } = require("../model/index");

//Funciones
const getProducts = async() => {
    return await productsManager.listarAll();
};

const getProductById = async( id ) => {
    return await productsManager.listar( id )
};

const saveNewProduct = async( obj ) => {
    return await productsManager.guardar( obj );
};

const updateProduct = async( id , newInfo ) => {
    return await productsManager.actualizar( id , newInfo );
};

const deleteProduct = async( id ) => {
    return await productsManager.borrar( id );
}

module.exports = { getProducts , getProductById , saveNewProduct , updateProduct , deleteProduct };