import React, {Component} from 'react';
import {View} from 'react-native'
import {BlueLink,WhiteLink} from "./public";
import ProfileHeader from './public/ProfileHeader';
import {Actions} from "react-native-router-flux";
import {connect} from 'react-redux';
import {RenderQuestion,RenderQuiz,ShowAttendance} from "../actions";



class UserDoctor extends Component {
    HandleAttendance=()=>{
        this.props.ShowAttendance(this.props.user.class_num);
        Actions.Students();
    };
    RenderQuestion=()=>{

        this.props.RenderQuestion();
        Actions.DoctorQuestions();



    };
    getQuiz=()=>{
        this.props.RenderQuiz(this.props.user.id);
        Actions.AllQuiz();

    };
    render() {

        const {mainContainerStyle,profileInfoStyle}=styles;
        return (
             <View style={mainContainerStyle}>
                 <View style={profileInfoStyle}>
                     <ProfileHeader userName={this.props.user?this.props.user.name:''} userType={this.props.user?this.props.user.type:''} onPress={()=>{Actions.Auth()}}/>
                 </View>
                 <View>
                     <BlueLink TextChildren={'Create Quiz'} onPress={()=>Actions.CreateQuiz()}/>
                     <BlueLink TextChildren={'See Quiz Result'} onPress={this. getQuiz}/>
                     <BlueLink TextChildren={'See Questions'} onPress={this.RenderQuestion}/>
                 </View>
                 <View>
                     <WhiteLink TextChildren={'Show Attendance'} onPress={this.HandleAttendance}/>
                     <WhiteLink TextChildren={'Control lights'} onPress={()=>Actions.Light()}/>
                 </View>
             </View>
        );
    }
}
const styles={
    mainContainerStyle:{
        display:'flex',
        backgroundColor:'#fff',
        flexBasis:'100%'
    },
    profileInfoStyle:{
        borderBottomWidth:2,
        borderColor:'#0952FE',
        marginBottom:5
    }
}
const mapStateToProps=(state)=>{
    return {
        user:state.user,
    }
};

export default connect(mapStateToProps,{RenderQuestion,RenderQuiz,ShowAttendance}) (UserDoctor);