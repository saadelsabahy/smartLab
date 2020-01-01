import {
    ADD_NEW,
    ANSWER_A_TEXT_CHANGE,
    ANSWER_B_TEXT_CHANGE,
    ANSWER_C_TEXT_CHANGE,
    QUESTION_TEXT_CHANGE,
    EMPTY_INPUT,
    EMPTY_QUIZ, QUIZ_RESULT, ATTENDANCE_NAMES, CURRENT_ROW
} from "../actions/types";

const INITIAL_STATE=
        {
            docQuestion:'',
            answerA:'',
            answerB:'',
            answerC:'',
            quiz:[],
            QuizResults:[],
            AttendanceNames:[],
            Rows:
                {
                    auto:true,
                    all:false,
                    row1:false,
                    row2:false,
                    row3:false,
                }




        };
export default (state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case QUESTION_TEXT_CHANGE:
            return{...state,docQuestion:action.payload};
        case ANSWER_A_TEXT_CHANGE:
            return{...state,answerA:action.payload};
        case ANSWER_B_TEXT_CHANGE:
            return{...state,answerB:action.payload};
        case ANSWER_C_TEXT_CHANGE:
            return{...state,answerC:action.payload};
        case ADD_NEW:
            return{...state,quiz:action.payload};
        case EMPTY_INPUT:
            return{...state ,docQuestion:"",answerA:"",answerB:"",answerC:""};
        case EMPTY_QUIZ:
            return{...state,quiz:[]};
        case QUIZ_RESULT:
            return{...state,QuizResults:action.payload};
        case ATTENDANCE_NAMES:
            return{...state,AttendanceNames:action.payload};
         case CURRENT_ROW:

            return{...state,Rows: action.payload };
        default:
            return state;
    }
};