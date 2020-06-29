import * as Type from '../types/types';

export const getOrders = (data) => {
    return (dispatch)=>{
        dispatch({
            type : Type.ORDER_LIST,
            data : data
        });
    }
};

export const setOrder = (data) => {
    return (dispatch)=>{
        dispatch({
            type : Type.SET_ORDER,
            data : data
        });
    }
};

export const updateOrderData = (name, value) => {
    return (dispatch)=>{
        dispatch({
            type : Type.UPDATE_ORDERDATA,
            value : value,
            name : name,
        });
    }
};

export const updateOrders = (data) => {
    return (dispatch)=>{
        dispatch({
            type : Type.UPDATE_ORDERS,
            data : data
        });
    }
};

export const createOrder = (data) => {
    return (dispatch)=>{
        dispatch({
            type : Type.CREATE_ORDER,
            data : data
        });
    }
};

export const deleteOrder = (data) => {

    return (dispatch)=>{
        dispatch({
            type : Type.DELETE_ORDER,
            data : data
        });
    }
};