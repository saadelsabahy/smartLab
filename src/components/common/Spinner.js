import React from "react";
import {View,ActivityIndicator} from "react-native";

const Spinner=({size})=>{
    return(
        <View style={styles.spinnerContainerStyle}>
            <ActivityIndicator size={size||"large"} color={'#fff'}/>
        </View>
    )
}
const styles={
        spinnerContainerStyle:{
            flex:1,
            justifyContent:"center",
            alignItems:"center",
            alignSelf:"center",
            paddingTop:10,
            paddingBottom:10,


        },


};
export {Spinner}