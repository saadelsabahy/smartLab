import {LOADING, ID_CHANGE, S_LOADING, LOGOUT, TRY_MESSAGE, CLEAR} from "../actions/types";

const INITIAL_STATE={
    id:"",
    name:"",
    type:"",
    message:""
};

export default (state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case ID_CHANGE:
            return {...state,id:action.payload};

        case LOADING:
            return{...state,loading: action.payload};

        case CLEAR:
            return{INITIAL_STATE};
        case TRY_MESSAGE:
            return {...state,message:action.payload};
        default:
            return state;
    }


};