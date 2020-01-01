import React, {Component} from 'react';
import {View,Image,Text} from 'react-native';
import splash from "./assets/images/logo.png";
import {getId, getType} from "../helpers";
import {Actions} from "react-native-router-flux";
import {LogInStudent} from "../actions";
import {connect} from 'react-redux';
import {Btn} from "./common";

class Splash extends Component {
    login=()=>{
        getId().then((id)=> {
            if (id) {
                this.props.LogInStudent(id);

            }
        });
    };


    render() {
        const {splashContainerStyle, splashStyle}=styles;
        return (
            <View style={splashContainerStyle}>
               <Image source={splash} style={splashStyle} />
                <View style={{width:'100%',alignItems:'center',justifyContent:'center',flex: 1}} >
                    <View style={{width: "100%",alignItems: 'center'}}>
                        <Text style={{color:"#0952FE",fontWeight:'600',fontSize:20,margin:20,textAlign: 'center'}}>{this.props.message}</Text>
                    </View>
                    <View style={{width:'100%',alignItems: 'center'}}>
                        <Btn children={'Try Again'} onPress={this.login} style={{width:200}} loading={this.props.auth.loading} />
                    </View>

                </View>

            </View>
        );
    }
}
const styles={
    splashContainerStyle:{
        display:'flex',
        flex:1,
        alignItems:'center',
        backgroundColor:'#fff',
    },

        splashStyle:{
            width:"100%",

            marginBottom:5,
            marginTop:20
        }
};
const mapStateToProps=(state)=>{
    return {
        message:state.Auth.message,
        auth:state.Auth

    }
};
export default connect(mapStateToProps,{LogInStudent}) (Splash);