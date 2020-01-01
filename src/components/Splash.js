import React, {Component} from 'react';
import {View,Image} from 'react-native';
import splash from "./assets/images/splash.png";
import * as Progress from 'react-native-progress';
import {getId, getType} from "../helpers";
import {Actions} from "react-native-router-flux";
import {LogInStudent} from "../actions";
import {connect} from 'react-redux';

class Splash extends Component {
    state={
      progress:0.0
    };
    componentWillMount(): void {
        getId().then((id)=>{
            if(id){
                getType().then((type)=>{
                    if(type && type==='doctor')
                    {
                        Actions.AuthDoctor();
                    }
                    else
                    {
                        this.props.LogInStudent(id)
                    }
                })
            }
            else
            {
                Actions.Auth();
            }
        })
    }

    componentDidMount(): void {

       const pr= setInterval(()=>{

           if(this.state.progress<0.8)
           {
               this.setState({
                   progress:this.state.progress+0.1
               });

           }
        },1000);
        if(this.state.progress===0.8)
        {
            clearInterval(pr)
        }

    }



    render() {
        const {splashContainerStyle, splashStyle}=styles;
        return (
            <View style={splashContainerStyle}>
               <Image source={splash} style={splashStyle} />
                <Progress.Bar progress={this.state.progress} animationType={'timing'} height={8}  width={250} />
            </View>
        );
    }
}
const styles={
    splashContainerStyle:{
        display:'flex',
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#fff',
    },

        splashStyle:{
            width:250,
            height:150,
            marginBottom:5
        }
};
const mapStateToProps=(state)=>{
    return {
        id:state.Auth.id,

    }
};
export default connect(mapStateToProps,{LogInStudent}) (Splash);