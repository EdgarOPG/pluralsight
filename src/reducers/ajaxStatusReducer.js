import * as types from '../actions/actionTypes';
import initialState from './initialState';

function actionTypeEndsSuccess(type) {
    return /_SUCCESS$/.test(type);
}

export default function authorReducer(state=initialState.ajaxCallsInProgress, action){
    if(action.type == types.START_AJAX_CALL){
        return state+1;
    }else if(action.type==types.AJAX_CALL_ERROR || 
    actionTypeEndsSuccess(action.type)){
        return state-1;
    }

    return state;
}