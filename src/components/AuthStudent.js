import React, {Component} from 'react';
import {View,Image} from "react-native";
import logo from "./assets/images/logo.png";
import {Btn, Input} from "./common";
import {connect} from "react-redux";
import {IdChange,SignUp,setUsers} from "../actions";


class AuthStudent extends Component {

    onCodeChange=(text)=>{
        this.props.IdChange(text);
    };
    SignUp=()=>{

        this.props.SignUp({code:this.props.id});
    };
    render() {
        const {
            mainContainerStyle,
            logoContainerStyle,
            logoStyle,
            containerBtnStyle,
            inputContainerStyle,
            buttonStyle
        }=styles;
        return (
            <View style={mainContainerStyle}>
                <View style={logoContainerStyle}>
                    <Image source={logo} style={logoStyle} />
                </View>

                <View style={inputContainerStyle}>
                    <Input
                        placeholder="Submit Your Id"
                        headerTextValue="Sign Up"
                        onChangeText={this.onCodeChange}
                        value={this.props.id}
                    />
                </View>

                <View style={containerBtnStyle}>

                        <Btn children={"Sign Up"} loading={this.props.loading} onPress={this.SignUp} style={buttonStyle}/>


                </View>
            </View>

        );
    }
}
const styles={
    mainContainerStyle:{
        display:"flex",
        flex:1,
        backgroundColor:'#fff',
        flexBasis:'100%',
    },
    logoContainerStyle:{
        display:"flex",
        flex:2,
        marginTop:"10%",
        marginBottom:"20%"
    },
    logoStyle:{
        width:"100%",
    },
    inputContainerStyle:{
        flex:2,
       width:'80%',
        alignSelf: 'center'
    },
    inputStyle:{
        padding: 10
    },
    containerBtnStyle:{
        flex:5,
        alignSelf:"center",
        width: "60%",
        marginTop: 30

    },
    /*buttonStyle:{
        padding:22
    },*/
    buttonTextStyle:{
        fontSize:23,
        fontWeight: '400'
    },


};
const mapStateToProps=(state)=>{
    return {
        id:state.Auth.id,
        loading:state.Auth.loading,
        user:state.user
    }
};

export default connect(mapStateToProps,{IdChange,SignUp,setUsers})(AuthStudent);