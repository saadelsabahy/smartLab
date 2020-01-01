import React from 'react';
import {Text,View,Image,TouchableOpacity} from 'react-native';
import gogrey from '../assets/images/gogrey.png';

const WhiteLink=({TextChildren,onPress})=>{
    const{MainContainerStyle,contentContainerStyle,textContainerStyle,textStyle, imageContainerStyle,imageStyle}=styles;
    return(
        <View style={MainContainerStyle}>

            <TouchableOpacity style={contentContainerStyle} onPress={onPress}>
                <View style={textContainerStyle}>
                    <Text style={textStyle}>
                        {TextChildren}
                    </Text>
                </View>

                <View style={imageContainerStyle}>
                    <Image source={gogrey} style={imageStyle}/>
                </View>
            </TouchableOpacity>

        </View>
    );
};
const styles={
    MainContainerStyle:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#fff",
        shadowColor: 'rgba(0,0,0,0.2)',
        shadowOffset:{width:0 , height: 3},
        shadowOpacity:1,
        elevation: 2,
        position:"relative",
        marginTop:10,
        borderRadius:15,
        marginLeft: "5%",
        marginRight: "5%",

    },
    contentContainerStyle:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        padding:"4%",
    },
    textContainerStyle:{
        display:'flex',
        justifyContent: 'center',
        marginLeft:'2%',

    },
    textStyle:{
        display:'flex',
        justifyContent: 'center',
        alignItems:"center",
        color:"#707070",
        fontSize:24,
        fontWeight:'700',
        letterSpacing: 2
    },
    imageContainerStyle:{
        display: 'flex',
        flex:1,
        alignItems:'flex-end',
    },

};
export {WhiteLink};