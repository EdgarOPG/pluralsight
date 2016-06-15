import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state=initialState.courses, action){
    switch(action.type){
        case types.CREATE_COURSE:
            return [...state, Object.assign({}, action.course)];
        case types.LOAD_COURSES_SUCCESS:
            return action.courses;
        case types.UPDATE_COURSES_SUCCESS:
            const oldCourses = state.filter((course)=>(
                course.id !== action.course.id
            ));
            return [...oldCourses, Object.assign({},action.course)];

        case types.CREATE_COURSES_SUCCESS:
            return [...state, Object.assign({}, action.course)];
        default:
            return state;
    }
}