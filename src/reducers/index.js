import {combineReducers} from 'redux';
import courses from './courseReducer';
import messages from './chatReducer';

const rootReducer = combineReducers({
    courses,
    messages
});

export default rootReducer;