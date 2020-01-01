import React, {Component} from 'react';
import {View, Text, Image} from "react-native";
import User from "../assets/images/user.png"
import {Actions} from "react-native-router-flux";


class QuestionItemDoctor extends Component {
    render() {
        console.log('doctor',Actions)
        const{name,question,questionDetails}=this.props;
        const {
            parentStyle,
            mainContainerStyle,
            contentContainerStyle,
            imageContainerStyle,
            rightContentStyle,
            imageStyle,
            nameTextStyle,
            questionTextStyle,
            countContainerStyle,
            countTextStyle,

        }=styles;

        return (
            <View style={parentStyle}>

                <View style={mainContainerStyle}>

                    <View style={contentContainerStyle}>

                        <View style={imageContainerStyle}>
                            <Image source={User} style={imageStyle}/>
                        </View>

                        <View style={rightContentStyle}>
                            <View >
                                <Text style={nameTextStyle}>
                                    {name}
                                </Text>
                            </View>

                            <View>
                                <Text style={ questionTextStyle}>
                                    {question}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={countContainerStyle}>
                    <Text style={countTextStyle}>
                        {questionDetails}
                    </Text>
                </View>
            </View>
     );
    }
};
const styles={
    parentStyle:{
        display:"flex",

        height:'auto',
    },
    mainContainerStyle:{
        display:"flex",
        backgroundColor:"#fff",
        margin:10,
        borderRadius:30,
        shadowColor: '#000',
        shadowOpacity:0.7,
        shadowOffset:{width:0 ,height:2},
        elevation: 5,
        position:"relative",
    },
    contentContainerStyle:{
        display:"flex",
        flexDirection:"row",
        padding: 5,
        margin:5,
        height:"auto",
    },
    imageContainerStyle:{
        marginLeft:10,
        marginRight:10,
        display:"flex",


    },
    imageStyle:{
        borderWidth:3,
        borderColor:"#0952FE",
        borderRadius: 32
    },
    rightContentStyle:{
        marginRight:"5%",
        display: "flex",
        flexDirection:"column",
        paddingTop:"1%",
        paddingBottom:"5%",
        paddingRight:"8%",
        paddingLeft:"8%",
        flexBasis:250,
        textAlign: "justify"

    },
    nameTextStyle:{
        color:"#0952FE",
        fontSize:20,
    },
    questionTextStyle:{
        color: "#707070",
        fontSize:18,
    },
    countContainerStyle:{
        marginTop:"2%",
        marginLeft:"5%",
    },

    countTextStyle:{
        color:"#0952FE",
        fontSize:18,
    },


};

export { QuestionItemDoctor };