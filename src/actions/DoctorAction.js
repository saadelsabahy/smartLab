import {
    ANSWER_A_TEXT_CHANGE,
    ANSWER_B_TEXT_CHANGE,
    ANSWER_C_TEXT_CHANGE,
    QUESTION_TEXT_CHANGE,
    ADD_NEW,EMPTY_INPUT,
    EMPTY_QUIZ,
    QUIZ_RESULT,
    ATTENDANCE_NAMES,
    CURRENT_ROW
} from "./types";
import axios from "../axios";

export const QuestionTextChange=(text)=>{
    return({
        type :QUESTION_TEXT_CHANGE,
        payload:text,
    })
};
export const FirstAnswerTextChange=(text)=>{
    return({
        type :ANSWER_A_TEXT_CHANGE,
        payload:text,
    })
};
export const SecondAnswerTextChange=(text)=>{
    return({
        type :ANSWER_B_TEXT_CHANGE,
        payload:text,
    })
};
export const ThirdAnswerTextChange=(text)=>{
    return({
        type :ANSWER_C_TEXT_CHANGE,
        payload:text,
    })
};
export const AddNew=(quiz)=>{
    return(dispatch)=>{
        dispatch({type:EMPTY_INPUT});
        dispatch({type:ADD_NEW,payload:quiz});

    }
};

export const CreateQuiz=({id,quiz})=>{
    return(dispatch)=>{
        let formData=new FormData();
        formData.append('user_id',id);
        formData.append('quiz',JSON.stringify(quiz));
        axios.post('/quiz',formData).then((res)=>{
            dispatch({type:EMPTY_QUIZ});


        }).catch((rej)=>{
            console.log(rej.response);
        })

    }
};
export const quizResult=(id)=>{
    return(dispatch)=>{
        dispatch({type:QUIZ_RESULT,payload:[]});

        axios.get('/quizResult/'+id).then((res)=>{
            dispatch({type:QUIZ_RESULT,payload:res.data.quizResults})

        }).catch((rej)=>{
            console.log(rej.response)
        })

    }
};
export const ShowAttendance=(class_num)=>{
    return(dispatch)=>{
        dispatch({type:QUIZ_RESULT,payload:[]});

        axios.get('/attendance/',{params:{
            'class_num':class_num
            }}).then((res)=>{

            dispatch({type:ATTENDANCE_NAMES,payload:res.data.attendance});

        }).catch((rej)=>{
            console.log(rej.response)
        })

    }
};
export const sendLightStatus=(r)=>{
    return(dispatch)=>{
        dispatch({type:CURRENT_ROW,payload:r});
    }
};
export const requestLightStatus=(rows,class_num)=>{
   return()=>{
       axios.post('/control',{...rows,class_num}).then((res)=>{
           console.log(res);
       }).catch((rej)=>{
           console.log(rej.response);
       })
   }
};