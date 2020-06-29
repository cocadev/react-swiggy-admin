import * as Type from '../../types/types';
import _ from 'underscore'

const initState = function () {
    return {
        categoryData:{},
        categories:[],
    };
};

export default function (state = initState(), action = {}) {
    switch (action.type) {
        case Type.CATEGORY_LIST:
            return Object.assign({}, state, {
                categories: action.data,
            });
        case Type.SET_CATEGORY:
            return Object.assign({}, state, {
                categoryData: action.data,
            });
        case Type.CREATE_CATEGORY:
            state.categories.push(action.data);
            return Object.assign({}, state, {
                categories: state.categories,
            });
        case Type.UPDATE_CATEGORY:
            return Object.assign({}, state, {
                categories: state.categories.map(u => (u.id === action.data.id ? Object.assign({}, u, action.data ) : u))
            });

        case Type.DELETE_CATEGORY:
            let mappingDel = _.filter(state.categories, (u)=>{
                return u.id === action.data[0].id
            });
            return Object.assign({}, state, {
                categories: mappingDel,
            });
        default:
            return state;
    }
}
