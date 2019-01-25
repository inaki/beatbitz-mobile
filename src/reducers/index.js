import { combineReducers } from 'redux';
import patternsReducer from './patternsReducer';
import selectedPatternReducer from './selectedPatternReducer';
import fetchUsersReducer from './fetchUsersReducer';

export default combineReducers({
    patterns: patternsReducer,
    selectedPattern: selectedPatternReducer,
    users: fetchUsersReducer
});