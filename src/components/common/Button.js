import React from 'react';
import {Text,TouchableOpacity,View} from 'react-native';
import {Spinner} from "./Spinner";

const Btn=({children,onPress,style,innerStyle,loading=false})=>{
    const{ textStyle,buttonStyle,buttonContainer}=styles;
 return(

         <View style={buttonContainer}>
             <TouchableOpacity style={{...buttonStyle,...style}} onPress={onPress}>
                 {loading?<Spinner/>:<Text style={{...textStyle,...innerStyle}}>{children}</Text>}
             </TouchableOpacity>
         </View>

 );

};
const styles={
    buttonContainer:{
        display:'flex'
    },
    textStyle:{
        alignSelf:"center",
        fontSize:22,
        color:"#FFF",
        fontWeight: '500',
        letterSpacing: 2

    },
    buttonStyle:{
        backgroundColor:"#0952FE",
        borderRadius:40,
        padding:15,
        margin:10

    }

};
export {Btn} ;