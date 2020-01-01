import {
    LOADING,
    SEND_QUESTION,
    TEXT_CHANGE,
    RENDER_QUESTION,
    PLUS_COUNTER,
    DELETE_MESSAGE,
    SET_QUIZ,
    CURRENT_QUIZ,
    SET_RESULT,
    CHANGE_RESULT,
    SET_MSG,
    SPINNER
} from "./types";
import axios from '../axios';
import {Actions} from "react-native-router-flux";

export const TextChange=(text)=>{
    return({
        type :TEXT_CHANGE,
        payload:text,
    })
};
export const SendQuestion=({question,id})=>{

    return(dispatch)=>{
        dispatch({type:LOADING,payload:true});


        axios.post('/question',{'question':question,'user_id':id}).then((res)=>{
            if(!res.data.error)
            {
                dispatch({type: SEND_QUESTION,payload:{question,id}});
                dispatch({type:LOADING,payload:false});
            }


        }).catch((rej)=>{
        })
    }
};
export const RenderQuestion=()=>{
    return(dispatch)=>{
        dispatch({type:SPINNER,payload:true});
        axios.get('/question').then((res)=>{
            dispatch({type:SPINNER,payload:false});
            dispatch({type :RENDER_QUESTION,payload:res.data.questions});


        })
    }
};
export const PlusCounter=({QuestionId,UserId})=>{

    return(dispatch)=>{
        dispatch({type:DELETE_MESSAGE});
        axios.put(`/question/${QuestionId}`,{ 'user_id':UserId}).then((res)=>{
            if (res.data.type==='success')
            {
                dispatch({type :RENDER_QUESTION,payload:res.data.questions});
            }
            dispatch({type :PLUS_COUNTER,payload:res.data});


        })
    }
};
export const DeleteMessage=()=>{
    return{
        type:DELETE_MESSAGE,

    }

};
export const RenderQuiz=(id)=>{

    return(dispatch)=>{
        dispatch({type:DELETE_MESSAGE});
        dispatch({type:SPINNER,payload:true});
        axios.get('/quiz',{
            params:{
                'user_id':id
            }
        }).then((res)=>{
            dispatch({type:SPINNER,payload:false});
            dispatch({
                type:SET_QUIZ,
                payload:res.data.quizs
            })
        })
    }
};
export const oneQuiz=(id)=>{

    return(dispatch)=>{
        dispatch({type:DELETE_MESSAGE});

        dispatch({
            type:SET_RESULT,
            payload:[]
        });

        dispatch({
            type:CURRENT_QUIZ,
            payload:[]
        });


        axios.get('/quiz/'+id).then((res)=>{
            let q=res.data.quiz;
            if(q)
            {
                let r=[];
                q.forEach((item)=>{
                    r.push({id:item.id,answer:'a'})
                });
                dispatch({
                    type:SET_RESULT,
                    payload:r
                });

                dispatch({
                    type:CURRENT_QUIZ,
                    payload:q
                });
            }

        })
    }
};
export const changeResult=(res)=>{

    return({
        type :CHANGE_RESULT,
        payload:res,
    })

}
export const sendAnswer=({results,id,user_id})=>{

    return(dispatch)=>{
        dispatch({type:DELETE_MESSAGE});
        let formData=new FormData();
        formData.append('user_id',user_id);
        formData.append('answers',JSON.stringify(results));
        dispatch({type:LOADING,payload:true});
        axios.post('/quiz/'+id,formData).then((res)=>{
            dispatch({
                    type:SET_RESULT,
                    payload:[],
                });
            dispatch({type:LOADING,payload:false});

                dispatch({
                    type:CURRENT_QUIZ,
                    payload:null
                });
                dispatch({
                    type:SET_MSG,
                    payload:res.data
                });
                Actions.AllQuiz();
        }).catch((rej)=>{
            console.log(rej.response)
        })
    }

}
