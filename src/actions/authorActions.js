import * as types from './actionTypes';
import authorApi from '../api/mockAuthorApi'; 
import {startAjaxCall} from './ajaxStatusActions';

export function loadAuthorsSucess(authors){
    return { type: types.LOAD_AUTHORS_SUCCESS, authors};
}

export function loadAuthors(){
    return dispatch=> {
        dispatch(startAjaxCall());
        return authorApi.getAllAuthors().then(authors => {
            dispatch(loadAuthorsSucess(authors));
        }).catch(error =>{
            throw(error);
        });
    };
}