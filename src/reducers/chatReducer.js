import * as types from '../actions/actionTypes';

export default function chatReducer(state=[], action){
    switch(action.type){
        case types.FETCH_MESSAGE:
            return [...state, Object.assign({}, action.message)];
        default:
            return state;
    }
}