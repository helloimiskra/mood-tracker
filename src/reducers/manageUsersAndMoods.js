import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    users: usersReducer,
    //days: daysReducer
});

export default rootReducer;

function usersReducer(state = [], action){
   // let idx;
    switch(action.type){
        case "ADD_USERS":
            return{
                ...state,
                users: action.users
            }
            default:
                return state
    }

}