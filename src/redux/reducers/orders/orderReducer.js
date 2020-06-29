import * as Type from '../../types/types';
import _ from 'underscore'

const initState = function () {
    return {
        orderData:{},
        orders:[],
    };
};

export default function (state = initState(), action = {}) {
    switch (action.type) {
        case Type.ORDER_LIST:
            return Object.assign({}, state, {
                orders: action.data,
            });
        case Type.SET_ORDER:
            return Object.assign({}, state, {
                orderData: action.data,
            });
        case Type.CREATE_ORDER:
            state.orders.push(action.data);
            return Object.assign({}, state, {
                orders: state.orders,
            });
        case Type.UPDATE_ORDER:
            return Object.assign({}, state, {
                orders: state.orders.map(u => (u.id === action.data.id ? Object.assign({}, u, action.data ) : u))
            });

        case Type.DELETE_ORDER:
            let mappingDel = _.filter(state.orders, (u)=>{
                return u.id === action.data[0].id
            });
            return Object.assign({}, state, {
                orders: mappingDel,
            });
        default:
            return state;
    }
}
