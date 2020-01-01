import React from 'react';
import {Text,View,Image,TouchableOpacity} from 'react-native';
import go from '../assets/images/go.png';

const BlueLink=({TextChildren,onPress})=>{
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
                    <Image source={go} style={imageStyle}/>
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
        backgroundColor:"#0952FE",
        shadowColor: 'rgba(0,0,0,0.2)',
        shadowOffset:{width:0 , height: 3},
        shadowOpacity:1,
        elevation: 2,
        position:"relative",
        marginTop:10,
        marginBottom:10,
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
        color:"#fff",
        fontSize:25,
        fontWeight:'700',
        letterSpacing: 2
    },
    imageContainerStyle:{
        display: 'flex',
        flex:1,
        alignItems:'flex-end',
    },

}
export {BlueLink};