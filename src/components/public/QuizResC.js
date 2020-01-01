import React from 'react';
import {View,Text} from 'react-native';



const QuizResC=(props)=>{
    const{container,text,text1,yellowC}=styles;
    return(
        <View style={container}>
            <View>
                <Text style={text}>{props.name}</Text>
            </View>
            <View style={props.mark==props.fullMark?{...text1,...yellowC}:text1}>
                <Text  style={text}>{props.mark +'/'+props.fullMark}</Text>
            </View>
        </View>
    )
}
const styles={

    container:{
        width:"100%",
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:30,
        paddingLeft:20,
        paddingRight:20,
        paddingTop:10,
        paddingBottom:10,
        borderWidth:0,
        borderRadius:16,
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:2,
        },
        shadowOpacity:0.2,
        shadowRadius:5,
        elevation:1

    }  ,
    text:{
        fontSize:25,
        color:"#757575",
        "fontWeight":"500"

    } ,

    text1:{
        backgroundColor:'#F5F5F5',
        fontWeight:'bold',
        color:'brown',
        fontSize:18,
        padding:10,
        width:70,
        height:70,
        borderRadius:35,
        borderColor:'#adadad',
        position:'relative',
        alignItems:'center',
        justifyContent:'center',

    },
    yellowC:{
        backgroundColor:"#FFEE07",
    } ,


};


export default QuizResC;