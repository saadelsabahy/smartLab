import React, {Component} from 'react';
import {ScrollView,View,Image,TouchableOpacity} from "react-native";
import {StudentItem} from "./public";
import down from "./assets/images/down.png";
import {connect} from 'react-redux';
class Students extends Component {
    render() {
        let data=this.props.names;
        const {itemsContainerStyle,imageContainerStyle}=styles;
        return (

             <ScrollView contentContainerStyle={{backgroundColor:"#fff",flex: 1}}>
                 <View style={itemsContainerStyle}>
                     {data.map((student,index)=><StudentItem key={index} name={student.name} />)}
                 </View>
                 <View style={imageContainerStyle}>
                     <TouchableOpacity>
                         <Image source={down}/>
                     </TouchableOpacity>
                 </View>

             </ScrollView>
        );
    }
}

const styles={
    itemsContainerStyle:{
        display:"flex",
        flex:1,
       height:'100%',


    },
    imageContainerStyle:{
        position:"absolute",
        bottom:0,
        left:"80%"

    },

};
const mapStateToProps=(state)=>{
    return {
         names:state.doctor.AttendanceNames,
    }
};

export default connect(mapStateToProps) (Students);