import * as Type from '../types/types';

export const getCategories = (data) => {
    return (dispatch)=>{
        dispatch({
            type : Type.CATEGORY_LIST,
            data : data
        });
    }
};

export const setCategory = (data) => {
    return (dispatch)=>{
        dispatch({
            type : Type.SET_CATEGORY,
            data : data
        });
    }
};

export const updateCategory = (data) => {
    return (dispatch)=>{
        dispatch({
            type : Type.UPDATE_CATEGORY,
            data : data
        });
    }
};

export const createCategory = (data) => {
    return (dispatch)=>{
        dispatch({
            type : Type.CREATE_CATEGORY,
            data : data
        });
    }
};

export const deleteCategory = (data) => {
    return (dispatch)=>{
        dispatch({
            type : Type.DELETE_CATEGORY,
            data : data
        });
    }
};