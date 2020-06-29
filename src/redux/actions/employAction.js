import * as Type from '../types/types';

export const getEmployees = (data) => {
    return (dispatch)=>{
        dispatch({
            type : Type.EMPLOYE_LIST,
            data : data
        });
    }
};

export const setEmploye = (data) => {
    return (dispatch)=>{
        dispatch({
            type : Type.SET_EMPLOYE,
            data : data
        });
    }
};

export const updateEmployeData = (name, value) => {
    return (dispatch)=>{
        dispatch({
            type : Type.UPDATE_EMPLOYEDATA,
            value : value,
            name : name,
        });
    }
};

export const updateEmployees = (data) => {
    return (dispatch)=>{
        dispatch({
            type : Type.UPDATE_EMPLOYES,
            data : data
        });
    }
};

export const createEmploye = (data) => {
    return (dispatch)=>{
        dispatch({
            type : Type.CREATE_EMPLOYE,
            data : data
        });
    }
};

export const deleteEmploye = (data) => {

    return (dispatch)=>{
        dispatch({
            type : Type.DELETE_EMPLOYE,
            data : data
        });
    }
};