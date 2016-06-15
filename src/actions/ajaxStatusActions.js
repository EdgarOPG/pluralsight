import * as types from './actionTypes';

export function startAjaxCall(){
    return { type: types.START_AJAX_CALL};
}

export function ajaxCallError(){
    return { type: types.AJAX_CALL_ERROR};
}