import * as Type from '../../types/types';
import _ from 'underscore'

const initState = function () {
    return {
        employeData:{},
        employees:[],
    };
};

export default function (state = initState(), action = {}) {
    switch (action.type) {
        case Type.EMPLOYE_LIST:
            return Object.assign({}, state, {
                employees: action.data,
            });
        case Type.SET_EMPLOYE:
            return Object.assign({}, state, {
                employeData: action.data,
            });
        case Type.CREATE_EMPLOYE:
            state.employees.push(action.data);
            return Object.assign({}, state, {
                employees: state.employees,
            });
        case Type.UPDATE_EMPLOYEDATA:

            var mapping = state.employeData;
            mapping[action.name] = action.value;

            return Object.assign({}, state, {
                employeData: mapping
            });

        // case Type.UPDATE_EMPLOYES:
        //     return Object.assign({}, state, {
        //         employees: state.employees.map(u => (u.id === action.data.id ? Object.assign({}, u, action.data ) : u))
        //     });

        case Type.DELETE_EMPLOYE:
            let mappingDel = _.filter(state.employees, (u)=>{
                return u.id !== action.data
            });
            return Object.assign({}, state, {
                employees: mappingDel,
            });
        default:
            return state;
    }
}
