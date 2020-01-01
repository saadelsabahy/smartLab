import React from 'react';
import {View,Text,Image} from 'react-native';
import back from '../assets/images/back.png';

const Header =({children})=>{
    const{containerStyle,headerTextStyle,imageStyle,textContainerStyle}=styles;
   return(
       <View style={containerStyle}>
           <View style={imageStyle}>
               <Image source={back} style={{width:30,height:28}} />
           </View>

            <View style={textContainerStyle}>
                <Text style={headerTextStyle}>{children}</Text>
            </View>
       </View>
   );
};
const styles={
    containerStyle:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#fff",
        height:80,
        paddingLeft:10,
        paddingRight:10,
        shadowColor: 'rgba(0,0,0,0.2)',
        shadowOffset:{width:0 , height: 3},
        shadowOpacity:1,
        elevation: 2,
        position:"relative",

      },

    imageStyle:{
        position: "absolute",
        left:20,

     },
    headerTextStyle:{
        color:"#0952FE",
        fontSize:25,
        fontWeight:'700',
        letterSpacing: 3



    },
}
export {Header};