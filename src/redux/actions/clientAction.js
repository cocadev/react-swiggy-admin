import * as Type from '../types/types';

export const getClients = (data) => {
    return (dispatch)=>{
        dispatch({
            type : Type.CLIENT_LIST,
            data : data
        });
    }
};

export const setClient = (data) => {
    return (dispatch)=>{
        dispatch({
            type : Type.SET_CLIENT,
            data : data
        });
    }
};

export const updateClient = (data) => {
    return (dispatch)=>{
        dispatch({
            type : Type.UPDATE_CLIENT,
            data : data
        });
    }
};

export const createClient = (data) => {
    return (dispatch)=>{
        dispatch({
            type : Type.CREATE_CLIENT,
            data : data
        });
    }
};

export const deleteClient = (data) => {
    return (dispatch)=>{
        dispatch({
            type : Type.DELETE_CLIENT,
            data : data
        });
    }
};