import {
    SEND_QUESTION,
    TEXT_CHANGE,
    LOADING,
    RENDER_QUESTION,
    PLUS_COUNTER,
    DELETE_MESSAGE,
    SET_QUIZ,
    CURRENT_QUIZ,
    SET_RESULT, CHANGE_RESULT, SET_MSG, SPINNER
} from "../actions/types";

const INITIAL_STATE={
    text:"",
    name:'',
    questions:[],
    message:'',
    messageType:'',
    allQuiz:[],
    quiz:null,
    results:[],
    spinner:false,
};

export default (state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case TEXT_CHANGE:
            return {...state,text:action.payload};
        case LOADING:
            return{...state,loading:action.payload};
        case SEND_QUESTION:
            return{ ...state,text:""};
        case RENDER_QUESTION:
            return{...state,questions:action.payload};
        case PLUS_COUNTER:
            return{...state,message: action.payload.msg,messageType: action.payload.type};
        case DELETE_MESSAGE:
            return{...state, message:'', messageType:'',};
        case SET_QUIZ:
            return{...state, allQuiz:action.payload};
        case CURRENT_QUIZ:
            return{...state, quiz:action.payload};
        case SET_RESULT:
            return{...state, results:action.payload};
        case CHANGE_RESULT:
            return{...state, results:action.payload};
        case SET_MSG:
            return{...state,message:action.payload.msg,messageType:action.payload.type};
        case SPINNER:
            return{...state,spinner:action.payload};

        default:
            return state;
    }


};