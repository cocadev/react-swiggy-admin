import * as Type from '../../types/types';
import _ from 'underscore'

const initState = function () {
    return {
        clientData:{},
        clients:[],
    };
};

export default function (state = initState(), action = {}) {
    switch (action.type) {
        case Type.CLIENT_LIST:
            return Object.assign({}, state, {
                clients: action.data,
            });
        case Type.SET_CLIENT:
            return Object.assign({}, state, {
                clientData: action.data,
            });
        case Type.CREATE_CLIENT:
            state.clients.push(action.data);
            return Object.assign({}, state, {
                clients: state.clients,
            });
        case Type.UPDATE_CLIENT:
            console.log('update data', action.data);
            console.log('all clients', state.clients);
            return Object.assign({}, state, {
                clients: state.clients.map(u => (u.id === action.data.id ? Object.assign({}, u, action.data ) : u))
            });

        case Type.DELETE_CLIENT:
            let mappingDel = _.filter(state.clients, (u)=>{
                return u.id === action.data[0].id
            });
            return Object.assign({}, state, {
                clients: mappingDel,
            });
        default:
            return state;
    }
}
