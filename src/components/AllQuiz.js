import React, {Component} from 'react';
import {View, ScrollView, Text, ActivityIndicator} from "react-native"
import {connect} from 'react-redux';
import QuizItem from "./public/QuizItem";
import QuestionItemStudent from "./Questions";



class Questions extends Component {
   content=()=>{
       if (this.props.spinner===true)
       {
           return(
               <View style={{flex:1,justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                   <ActivityIndicator animating={this.props.spinner} color='#0952FE' size='large' />
               </View>
           );
       }
       else {
           return(
               this.props.allQuiz.length>0?
                   <ScrollView contentContainerStyle={{flex:1}}>
                       <View style={styles.containerStyle}>
                           {
                               this.props.allQuiz.map(
                                   (quiz,k)=>
                                       <QuizItem
                                           key={quiz.id}
                                           number={++k}
                                           quiz_id={quiz.id}
                                       />)

                           }
                       </View>
                   </ScrollView>
                   :
                   <View style={styles.ErrorMessageContainer}>
                       <Text style={styles.MessageStyle}>
                           No Quiz Questions
                       </Text>
                   </View>
           )
       }
   };

    render() {


        return (
            <View style={{backgroundColor:'#fff',flex:1}}>
                {this.content()}
            </View>
        );
    }
}

const styles={
        containerStyle:{
            flex:1,
            backgroundColor:'#fff',

        },
        ErrorMessageContainer:{
            display:'flex',
            flex:1,
            backgroundColor:'#fff',
            justifyContent:'center',
            alignItems:'center',
        },
        MessageStyle:{
            fontSize:20,
            color:'#0952FE',
        }

};
const mapStateToProps=(state)=>{
    return{
        allQuiz:state.student.allQuiz,
        spinner:state.student.spinner,
        user:state.user,
    }
};
export default connect(mapStateToProps) (Questions);