import React, {Component} from 'react';
import {View,Image,Picker,BackHandler} from "react-native";
import logo from "./assets/images/logo.png";
import {Btn, Input} from "./common";
import {connect} from "react-redux";
import {IdChange,LogInDoctor,setUsers} from "../actions";
import {Actions} from "react-native-router-flux"
import {getUser} from "../helpers";
import axios from "../axios";

class Authentication extends Component {
    state={
        class_num:1,
    };
    componentDidMount() {
        console.log(this.props.user);
        this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }

    componentWillUnmount() {
        this.backHandler.remove()
    }

    handleBackPress = () => {
        this.goBack(); // works best when the goBack is async

    };
    goBack=()=>{
        console.log(this.props.user);

            if (!this.props.user)
            {
                Actions.AuthDoctor();
            }

    };
    onCodeChange=(DoctorId)=>{
        this.props.IdChange(DoctorId);
    };
    login=()=>{

        this.props.LogInDoctor({'code':this.props.id,class_num:this.state.class_num});
    };
    render() {
        const {
            mainContainerStyle,
            logoContainerStyle,
            logoStyle,
            containerBtnStyle,
            inputContainerStyle,
            PickerContainerStyle,
            PickerStyle,
            buttonStyle,
        }=styles;
        return (
            <View style={mainContainerStyle}>
                <View style={logoContainerStyle}>
                    <Image source={logo} style={logoStyle} />
                </View>

                <View style={inputContainerStyle}>
                    <Input
                        placeholder="Submit Your Id"
                        headerTextValue="Login"
                        onChangeText={this.onCodeChange}
                        value={this.props.id}
                    />
                </View>
                <View style={{...inputContainerStyle,...PickerContainerStyle}}>
                    <Picker
                        style={PickerStyle}
                        selectedValue={this.state.class_num}
                        onValueChange={(itemValue)=>{
                             this.setState({class_num:itemValue})
                    }}>
                        <Picker.Item label={'class 1'} value={1}color={'#0952FE'}/>
                        <Picker.Item label={'class 2'} value={2}color={'#0952FE'}/>
                        <Picker.Item label={'class 3'} value={3}color={'#0952FE'}/>
                        <Picker.Item label={'class 4'} value={4}color={'#0952FE'}/>
                    </Picker>
                </View>

                <View style={containerBtnStyle}>

                        <Btn children={"Login"} loading={this.props.loading} onPress={this.login} style={buttonStyle}/>


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
        flex:1,
        marginTop:"10%",
        marginBottom:"8%"
    },
    logoStyle:{
        width:"100%",
    },
    inputContainerStyle:{
        flex:1,
       width:'80%',
        alignSelf: 'center'
    },
    inputStyle:{
        padding: 10
    },
    containerBtnStyle:{
        flex:1,
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

    PickerContainerStyle:{
        flex:.5,
        marginBottom:10,
        display:"flex",
        color:"#0952FE",
        fontSize:17,
        borderWidth:1,
        borderColor:"#0952FE",
        borderRadius:100,
        marginRight:20,
        marginLeft:20,
        marginTop:60,
        letterSpacing:2,
        fontWeight:'100',
        justifyContent:'center',

    },
    PickerStyle:{

    padding:0,
    height:50,
    color:"#0952FE",
    fontSize:17,
    marginRight:20,
    marginLeft:20,
    letterSpacing:2,
    fontWeight:'100',

    }


};
const mapStateToProps=(state)=>{
    return {
        id:state.Auth.id,
        loading:state.Auth.loading,
        user:state.user,
    }
};

export default connect(mapStateToProps,{IdChange,LogInDoctor,setUsers})(Authentication);