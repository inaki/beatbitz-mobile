import { FETCH_USERS, FETCH_PATTERNS, SELECTED_PATTERN} from './types';
import patternsDatabase from '../api/patternsDatabase';

export const fetchPatterns = () => {
    return async dispatch => {
        const response = await patternsDatabase.get('/beatsDatabase');
        dispatch({type: FETCH_PATTERNS, payload: response.data});
    };
};

export const fetchUsers = (id) => {
    return async dispatch => {
        const response = await patternsDatabase.get(`/users`);
        dispatch({type: FETCH_USERS, payload: response.data});
    };
};

export const selectPattern = (pattern) => {
    // return an action
    return {
        type: SELECTED_PATTERN,
        payload: pattern
    };
};