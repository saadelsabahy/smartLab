import {LOGIN_SUCCESS, LOGOUT, SET_USER} from "../actions/types";
let INITIAL_STATE=null;


export default (state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case LOGIN_SUCCESS:
            return action.payload;
        case LOGOUT:
            return null;

        case SET_USER:
            return action.payload;

        default:
            return state;
    }


};