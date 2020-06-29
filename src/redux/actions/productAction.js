import * as Type from '../types/types';

export const getProducts = (data) => {
    return (dispatch)=>{
        dispatch({
            type : Type.PRODUCT_LIST,
            data : data
        });
    }
};

export const setProduct = (data) => {
    return (dispatch)=>{
        dispatch({
            type : Type.SET_PRODUCT,
            data : data
        });
    }
};

export const updateProduct = (data) => {
    return (dispatch)=>{
        dispatch({
            type : Type.UPDATE_PRODUCT,
            data : data
        });
    }
};

export const createProduct = (data) => {
    return (dispatch)=>{
        dispatch({
            type : Type.CREATE_PRODUCT,
            data : data
        });
    }
};

export const deleteProduct = (data) => {
    return (dispatch)=>{
        dispatch({
            type : Type.DELETE_PRODUCT,
            data : data
        });
    }
};