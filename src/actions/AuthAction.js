import {ID_CHANGE, LOGIN_SUCCESS, LOADING, LOGOUT, SET_USER, TRY_MESSAGE, CLEAR} from "./types";

import axios from "../axios";
import {Actions} from "react-native-router-flux";
import {setIdAndType, setUser} from "../helpers";

export const IdChange=(text)=>{
   return({
       type :ID_CHANGE,
       payload:text,
   })
};
export const SignUp=({code})=>{
    return(dispatch)=>{
        dispatch({type:LOADING,payload:true});
        axios.post('/auth/signup',{'code':code}).then((res)=>{
            if(res.data.userData)
            {

                setIdAndType(res.data.userData.code,res.data.userData.type).then((type)=>{
                    if (type==="doctor")
                    {
                        Actions.AuthDoctor();
                    }
                    else{
                       Actions.Splash();
                    }
                }).catch((e)=>{
                    console.log(e);
                });

            }
            else
            {
                console.log(res.data.msg);
            }

            dispatch({type:ID_CHANGE,payload:""});

            dispatch({type:LOADING,payload:false});

        }).catch((rej)=>{

            dispatch({type:LOADING,payload:false});
        })
    };



};
export const LogInDoctor=({code,class_num})=>{
    return(dispatch)=>{
        dispatch({type:LOADING,payload:true});
        axios.post('/auth/login/doctor',{'code':code,class_num:class_num}).then((res)=>{

            if(res.data.user)
            {

                let user=Object.assign({},res.data.user,{token:res.data.access_token,'token_type':res.data.token_type,'class_num':class_num});
                axios.defaults.headers.common['Authorization']=user.token_type+''+user.token;
                dispatch({
                    type:LOGIN_SUCCESS,
                    payload:user
                });
                Actions.Doctor()
            }


            dispatch({type:ID_CHANGE,payload:""});

            dispatch({type:LOADING,payload:false});

        }).catch((rej)=>{
             dispatch({type:LOADING,payload:false});
        })
    };



};

export const LogInStudent=(code)=>{
    return(dispatch)=>{
        dispatch({type:LOADING,payload:true});
        axios.post('/auth/login',{'code':code}).then((res)=>{
            if(res.data.msg)
            {
                dispatch({type:TRY_MESSAGE,payload:res.data.msg});
                Actions.StopScreen();
            }
            else
            {
               if(res.data.user)
               {
                   let user=Object.assign({},res.data.user,{token:res.data.access_token,'token_type':res.data.token_type,'class_num':res.data.class_num});
                   axios.defaults.headers.common['Authorization']=user.token_type+''+user.token;
                   dispatch({
                       type:LOGIN_SUCCESS,
                       payload:user
                   });
                   Actions.Student();
               }
            }

            dispatch({type:ID_CHANGE,payload:""});

            dispatch({type:LOADING,payload:false});

        }).catch((rej)=>{
            console.log(rej);
            dispatch({type:LOADING,payload:false});
        })
    };



};

export const logingout=(class_num)=>{
    return(dispatch)=>{
        axios.post('/auth/logout',{class_num:class_num}).then(()=>{
            dispatch({type:CLEAR});
            dispatch({type:LOGOUT});

        });
    }
};
export const setUsers=(user)=>{
    return({
        type :SET_USER,
        payload:user,

    })
};