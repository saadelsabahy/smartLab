import React, { Component } from 'react';
import {View,Text,ScrollView} from 'react-native';
import AnswerQuizC from "./public/AnswerQuizC"
import {sendAnswer} from "../actions"

import {Btn} from './common'
import {connect} from "react-redux";
import {showMessage} from "react-native-flash-message";

 class AnswerQuiz extends Component{
     componentDidUpdate() {
         if(this.props.messageType){
             showMessage({
                 message:this.props.message,
                 type:this.props.messageType,
                 title:'Answer Quiz',
                 hideStatusBar:true,
                 floating:true
             });

         }
     }


     HandleSubmit=()=>{
       this.props.sendAnswer({'results':this.props.results,'id':this.props.quiz[0].quiz_id,'user_id':this.props.user.id});
     };

     render(){
         const{text,submit,container_fluid,container}=styles;

         return(

             this.props.quiz?
             <ScrollView contentContainerStyle={{flex:1}}>
                 <View style={container_fluid}>
                     <Text style={text}>Answer these question the click submit</Text>
                     <View>
                         {
                             this.props.quiz.map(item=>{
                                     return( <AnswerQuizC key={item.id} item={item } />)
                                 }

                             )
                         }

                     </View>
                     <View style={container}>
                         <View style={submit}>
                             <Btn
                                 onPress={this.HandleSubmit}
                                 style={{'backgroundColor':'#6D6D6D',padding:10,paddingLeft:20,paddingRight:20,margin:0,width:170}}
                                 innerStyle={{fontSize:16,fontWeight:'normal'}}
                                 loading={this.props.loading}
                                 children={'Submit'}
                             />

                         </View>
                     </View>
                 </View>
             </ScrollView>:null
         )

     }

 }

const styles={
    container_fluid:{
        flex:1,
        height:"100%",
        padding:10,
        backgroundColor: '#fff',

    },
    text:{
        color:'#1D60FE',
        fontSize:16,
        marginTop:10,
        marginBottom:10
    },
    container:{
        width:"100%",
        justifyContent:'center',
        alignItems:'center',
    },
    submit:{
        marginBottom:10,
        width:200,
        alignItems:'center',
        justifyContent:'center'
    },

};
const mapStateToProps=(state)=>{
    return {
        quiz:state.student.quiz,
        results:state.student.results,
        user:state.user,
        message:state.student.message,
        messageType:state.student.messageType,
        loading:state.student.loading

    }
};


export default connect (mapStateToProps,{sendAnswer}) (AnswerQuiz);
