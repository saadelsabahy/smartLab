import React, {Component} from 'react';
import {View,ScrollView,Text,ActivityIndicator } from "react-native"
import QuestionItemStudent from "./public/QuestionItemStudent";
import {PlusCounter} from "../actions";
import {connect} from 'react-redux';



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
                this.props.studentQuestions.length>0?
                    <ScrollView contentContainerStyle={{flex:1}}>
                        <View style={styles.containerStyle}>
                            {
                                this.props.studentQuestions.map(
                                    (question)=>
                                        <QuestionItemStudent
                                            key={question.id}
                                            question={question}
                                        />)

                            }
                        </View>
                    </ScrollView>
                    :
                    <View style={styles.ErrorMessageContainer}>
                        <Text style={styles.MessageStyle}>
                            No Available Questions
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
        studentQuestions:state.student.questions,
        plusClick:state.student.clicked,
        user:state.user,
        spinner:state.student.spinner,
    }
};
export default connect(mapStateToProps,{PlusCounter}) (Questions);