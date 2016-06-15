import {combineReducers} from 'redux';
import courses from './courseReducer';
import messages from './chatReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
    courses,
    messages,
    authors,
    ajaxCallsInProgress
});

export default rootReducer;