//Managers
const { cartsManager } = require("../model/index");


//Funciones

const getCarts = async() => {
    return await cartsManager.listarAll();
};

const getCartById = async( id ) => {
    return await cartsManager.listar( id ); 
}

const saveNewCart = async() => {
    return await cartsManager.guardar();
};

const deleteCart = async( id ) => {
    return await cartsManager.borrar( id );
};

const addProduct = async( obj ) => {
    return await cartsManager.addProduct( obj );
};

const removeProduct = async( id , idProd ) => {
    return await cartsManager.deleteProdFromCart( id , idProd );
};



module.exports = { getCarts , saveNewCart , getCartById , deleteCart , addProduct , removeProduct };