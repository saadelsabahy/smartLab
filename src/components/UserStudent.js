import React, {Component} from 'react';
import { View} from 'react-native'
import {BlueLink} from "./public";
import ProfileHeader from './public/ProfileHeader';
import {Btn, Input} from "./common";
import {Actions} from "react-native-router-flux";
import {connect} from 'react-redux';
import {TextChange,SendQuestion,RenderQuestion,RenderQuiz} from "../actions";




class UserStudent extends Component {



    onCodeChange=(text)=>{
        this.props.TextChange(text)
    };
    SendQuestion=()=>{

            console.log(this.props.user.id,'id');
            this.props.SendQuestion({question: this.props.question,id:this.props.user.id});




    };
    RenderQuestion=()=>{

        this.props.RenderQuestion();
        Actions.StudentQuestions();



    };

    getQuiz=()=>{
        this.props.RenderQuiz(this.props.user.id);
        Actions.AllQuiz();

    };

    render() {

        const {
            mainContainerStyle,
            profileInfoStyle,
            buttonContainerStyle,
            buttonStyle,
            buttonTextStyle,
            linksContainerStyle,
            questionContainerStyle,
            inputContainerStyle,

        }=styles;


        return (
            <View   style={{...mainContainerStyle}}>
                <View style={profileInfoStyle}>
                    <ProfileHeader  userName={this.props.user?this.props.user.name:''} userType={this.props.user?this.props.user.type:''} onPress={()=>{Actions.Auth()}}/>
                </View>

                <View style={linksContainerStyle}>
                    <BlueLink TextChildren={'See Question'} onPress={this.RenderQuestion}/>
                    <BlueLink TextChildren={'New Quiz Available'} onPress={this.getQuiz}/>

                </View>

                <View style={questionContainerStyle}>

                     <View style={inputContainerStyle}>
                         <Input
                             placeholder={'Ask A Question'}
                             onChangeText={this.onCodeChange}
                             value={this.props.question}
                         />
                     </View>

                    <View style={buttonContainerStyle}>
                        <Btn children={'Send'} style={buttonStyle} loading={this.props.loading} innerStyle={buttonTextStyle} onPress={this.SendQuestion}/>

                    </View>
                </View>

            </View>
        );
    }
}
const styles={
    mainContainerStyle:{
        display:'flex',
        flex:1,
        flexBasis:'100%',
        backgroundColor:'#fff',
    },
    profileInfoStyle:{
        flex:1,
        borderBottomWidth:2,
        borderColor:'#0952FE',

    },
    LinksContainerStyle:{
        flex:3
    },
    questionContainerStyle:{
        flex:2
    },
    inputContainerStyle:{
        flex:3,
        width: '80%',
        alignSelf: 'center',
    },

    buttonContainerStyle:{
        flex:4,
        marginTop:'8%'
    },
    buttonStyle:{
        alignSelf:'center',
        width:'42%',
        padding:15,

    },
    buttonTextStyle:{
        fontSize:25
    }
};
const mapStateToProps=(state)=>{
    return {
        question:state.student.text,
        user:state.user,
        loading:state.student.loading,
        RenderedQuestion:state.student.question,


    }
};


export default connect (mapStateToProps,{TextChange,SendQuestion,RenderQuestion,RenderQuiz}) (UserStudent);