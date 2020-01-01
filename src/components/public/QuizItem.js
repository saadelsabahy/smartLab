import React, {Component} from 'react';
import {View, Text,TouchableOpacity} from "react-native";
import {oneQuiz,quizResult} from "../../actions"
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";


class QuizItem extends Component {

    oneQuiz=()=>{
        if(this.props.user.type==="doctor")
        {
            this.props.quizResult(this.props.quiz_id);
            Actions.QuizResults();
        }
        else
        {
            this.props.oneQuiz(this.props.quiz_id);
            Actions.NewQuiz();
        }

    };

    render() {
        const {
            parentStyle,
            mainContainerStyle,
            contentContainerStyle,
            rightContentStyle,
            nameTextStyle,
            questionTextStyle,


        }=styles;

        return (
         <TouchableOpacity style={parentStyle} onPress={this.oneQuiz} >

             <View style={mainContainerStyle}>
                 <View style={contentContainerStyle}>
                     <View style={rightContentStyle}>
                         <View >
                             <Text style={nameTextStyle}>
                               Quiz {this.props.number}
                             </Text>
                         </View>

                         <View style={{marginTop:10}}>
                             <Text style={ questionTextStyle}>
                                Click to reach to quiz
                              </Text>
                         </View>
                     </View>
                 </View>
             </View>
         </TouchableOpacity>




        );
    }
};
const styles={
    parentStyle:{
        display:"flex",
        backgroundColor: '#fff'
    },
    mainContainerStyle:{
        display:"flex",
        backgroundColor:"#fff",
        margin:10,
        borderRadius:30,
        shadowColor: '#000',
        shadowOpacity:0.7,
        shadowOffset:{width:0 ,height:2},
        elevation: 5,
        position:"relative",
    },
    contentContainerStyle:{
        display:"flex",
        flexDirection:"row",
        padding: 5,
        margin:5,
        height:"auto",
    },

    rightContentStyle:{
        marginRight:"5%",
        display: "flex",
        flexDirection:"column",
        paddingTop:"1%",
        paddingBottom:"5%",
        paddingRight:"8%",
        paddingLeft:"8%",
        flexBasis:250,
        textAlign: "justify"

     },
    nameTextStyle:{
        color:"#0952FE",
        fontSize:25,
    },
    questionTextStyle:{
        fontSize:18,
        color:"#0952FE",
    },

};
const mapStateToProps=(state)=>{
    return{
        allQuiz:state.student.allQuiz,
        user:state.user,
    }
};
export default connect(mapStateToProps,{oneQuiz,quizResult}) (QuizItem);
