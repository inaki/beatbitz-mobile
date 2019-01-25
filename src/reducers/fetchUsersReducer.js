import { FETCH_USERS } from '../actions/types';

export default fetchUsersReducer = (state = [], action) => {
    switch(action.type) { 
        case FETCH_USERS: 
            return action.payload;
        default: 
            return state;
    }
}