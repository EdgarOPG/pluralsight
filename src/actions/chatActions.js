import * as type from './actionTypes';

export function fetchMessage(message){
    return {type:type.FETCH_MESSAGE, message};
}