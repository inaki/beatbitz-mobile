import { FETCH_PATTERNS } from '../actions/types';
import { INAKI } from '../images'

const initialState = [];

export default patternsReducer = (state = initialState, action) => {
    switch(action.type) { 
        case FETCH_PATTERNS: 
            return action.payload;
        default: 
            return state;
    }
}