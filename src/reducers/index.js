import {combineReducers} from 'redux';
import courses from './courseReducer';
import messages from './chatReducer';
import authors from './authorReducer';

const rootReducer = combineReducers({
    courses,
    messages,
    authors
});

export default rootReducer;