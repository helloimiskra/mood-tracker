import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    users: usersReducer,
    moods: moodsReducer
});

export default rootReducer;

function usersReducer(state = [], action){
    let idx;
    switch(action.type){
        case 'LOADING_USERS':
            return {
                ...state, 
                users: [...state.users]
            }
        case "ADD_USERS":
            return{
                ...state,
                users: action.users
            }
        case "ADD_USER":
            return{
                ...state,
                users: [...state.users, action.payload.data.attributes]
            }
        case "DELETE_USER":
            idx = state.findIndex(user => user.id === action.id);
            return{
                ...state,
                users: [...state.slice(0, idx), ...state.slice(idx+1)]
            }
            default:
                return state
    }

}

function moodsReducer(state = [], action){
    let idx;
    switch(action.type){
        case "ADD_MOODS":
            action.moods.map(mood=> state.push(mood))
            return [...state]
        case "ADD_MOOD":
            return [...state, action.payload.data.attributes]
        case "DELETE_MOOD":
            idx = state.findIndex(mood => mood.id === action.id)
            return {
                ...state, days: [...state.slice(0, idx), ...state.slice(idx+1)]
            }
        default:
                return state;
    }
}