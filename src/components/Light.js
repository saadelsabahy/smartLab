import React, {Component} from 'react';
import {View} from 'react-native';
import LightListItem from "./public/LightListItem";
import {connect} from "react-redux";
import {requestLightStatus, sendLightStatus} from "../actions";

class Light extends Component {


    render() {
        const {containerStyle} = styles;
        return (
           <View style={containerStyle}>


               <LightListItem childrenText="Automatic Mode" name={'auto'} val={this.props.auto}/>


                   {this.props.auto?null:
                       <View>
                           <LightListItem childrenText="All" name={'all'} val={this.props.Rows.all} />
                           <LightListItem childrenText="Row 1" name={'row1'} val={this.props.Rows.row1} />
                           <LightListItem childrenText="Row 2" name={'row2'} val={this.props.Rows.row2} />
                           <LightListItem childrenText="Row 3" name={'row3'}  val={this.props.Rows.row3} />
                        </View>}



           </View>
        );
    }
}
const styles={
        containerStyle:{
            display:'flex',
            flexBasis:'100%',
            backgroundColor:'#fff',
            marginTop:5,
            marginBottom:10
        }
};
const mapStateToProps=(state)=>{
    return {
        Rows:state.doctor.Rows,
        auto:state.doctor.Rows.auto,
        class_num:state.user.class_num,
    }
};
export default connect(mapStateToProps) (Light);