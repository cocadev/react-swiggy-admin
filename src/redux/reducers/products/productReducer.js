import * as Type from '../../types/types';
import _ from 'underscore'

const initState = function () {
    return {
        productData:{},
        products:[],
    };
};

export default function (state = initState(), action = {}) {
    switch (action.type) {
        case Type.PRODUCT_LIST:
            return Object.assign({}, state, {
                products: action.data,
            });
        case Type.SET_PRODUCT:
            return Object.assign({}, state, {
                productData: action.data,
            });
        case Type.CREATE_PRODUCT:
            state.products.push(action.data);
            return Object.assign({}, state, {
                products: state.products,
            });
        case Type.UPDATE_PRODUCT:
            return Object.assign({}, state, {
                products: state.products.map(u => (u.id === action.data.id ? Object.assign({}, u, action.data ) : u))
            });

        case Type.DELETE_PRODUCT:
            let mappingDel = _.filter(state.products, (u)=>{
                return u.id === action.data[0].id
            });
            return Object.assign({}, state, {
                products: mappingDel,
            });
        default:
            return state;
    }
}
