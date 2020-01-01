import React from 'react';
import {View,TextInput,Text} from 'react-native';

const Input=({placeholder,value,onChangeText,secureTextEntry,headerTextValue,inputCStyle})=>{
    const{  mainContainerStyle,inputContainerStyle,inputStyle,headerTextStyle, headerTextContainer}=styles;
    return(
        <View style={ mainContainerStyle}>

            <View style={ headerTextContainer}>
                <Text style={headerTextStyle}>
                     {headerTextValue}
                </Text>
            </View>

           <View style={[inputContainerStyle,inputCStyle]}>
               <TextInput
                   placeholder={placeholder}
                   value={value}
                   onChangeText={onChangeText}
                   style={inputStyle}
                   secureTextEntry={secureTextEntry}
                   placeholderTextColor={"#0952FE"}
               />
           </View>

        </View>
    );
};
const styles={
    mainContainerStyle:{
            backgroundColor:'#fff',
            flex:1,
            marginTop: 10,
            marginBottom: 10

        },
       inputContainerStyle:{
            marginTop:10,
            marginBottom:10,
            color:"#0952FE",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
        },

        inputStyle:{

            width:"100%",
            paddingTop:"7%",
            paddingBottom:"7%",
            paddingLeft:"10%",
            paddingRight:"10%",
            color:"#0952FE",
            fontSize:17,
            borderWidth:1,
            borderColor:"#0952FE",
            borderRadius:100,
            marginRight:20,
            marginLeft:20,
            letterSpacing:2,
            fontWeight:'100',
        },
        headerTextContainer:{
            left:10,
            marginLeft: 10
        },
        headerTextStyle:{
            color:"#0952FE",
            fontSize: 30,
            letterSpacing: 3,

        }
};
export {Input};