import React, {Component} from 'react';
import {View,Text} from 'react-native';

class StudentItem extends Component {
    render() {
        const {containerStyle,nameContainerStyle,nameTextStyle,idContainerStyle,idTextStyle}= styles;
        const {name,id}=this.props;
        return (
            <View  style={containerStyle}>
                <View style={nameContainerStyle}>
                    <Text style={nameTextStyle}> {name}</Text>
                </View>

                <View style={idContainerStyle}>
                    <Text style={idTextStyle}> {id} </Text>
                </View>

            </View>
        );
    }
}
const styles={
    containerStyle:{
        display:"flex",
        justifyContent:"center",
        marginLeft:"5%",
        marginTop:10

    },
    nameContainerStyle:{
        display:"flex",

    },
    nameTextStyle:{
        fontSize:20,
        fontWeight: "700",
        color:"#707070",
        textAlign: 'justify'

    },
    idContainerStyle:{
        display:"flex",
        marginLeft:"1%",
        marginTop:"2%",
        marginBottom:"2%",


    },
    idTextStyle:{
        fontSize: 20,
        color:"#707070"
    },

};

export {StudentItem};