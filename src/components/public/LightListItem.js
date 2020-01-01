import React, {Component} from 'react';
import {View, Text } from 'react-native';
import SwitchToggle from 'react-native-switch-toggle';
import {sendLightStatus,requestLightStatus} from  '../../actions';
import {connect} from 'react-redux';



class LightListItem extends Component {
    state={
        isOn:false,
        isOnText:"Off",
    };

    componentDidMount(): void {
        this.setState({
            ...this.state,
            isOn:this.props.val
        });

        if(this.props.name=="auto"){
            if(this.props.val){
                this.handlePressing();
            }
        }
    }

    handlePressing=()=>{
        const{isOn}=this.state;
       let r=this.props.Rows;
        if (isOn){
            r[this.props.name]=!this.state.isOn;
            this.props.sendLightStatus(r);
            this.setState({isOn:!(this.state.isOn)});
            this.setState({isOnText:"Off"});


        } else {
            r[this.props.name]=!this.state.isOn;
            this.props.sendLightStatus(r);
            this.setState({isOn:!(this.state.isOn)});
            this.setState({isOnText:"On"});

        }

       this.props.requestLightStatus(this.props.Rows,this.props.class_num);






   };
        render() {
            const { MainContainerStyle,textContainerStyle,iconContainerStyle,textStyle,iconStyle}=styles;
            const {childrenText,name}=this.props;
            return (
                <View style={ MainContainerStyle} >
                    <View style={textContainerStyle} >
                        <Text style={textStyle}>
                            {`${childrenText} ${this.state.isOnText}`}
                        </Text>
                    </View>

                    <View style={iconContainerStyle}>
                        <SwitchToggle
                            switchOn={this.state.isOn}
                            style={iconStyle}
                            backgroundColorOn={"#0952FE"}
                            backgroundColorOff={"#eee"}
                            circleColorOn={"#fff"}
                            circleColorOff={"#fff"}
                            onPress={this.handlePressing}
                            name={name}
                        />
                    </View>

                </View>
            );
        }
}
const styles={
    MainContainerStyle:{
        display:"flex",
        flexDirection:"row",
        backgroundColor:"#fff",
        padding:"4%",
        shadowColor: 'rgba(0,0,0,0.2)',
        shadowOffset:{width:0 , height:2},
        elevation: 2,
        position:"relative",
        borderWidth:1,
        borderBottom:1,
        borderColor:"#eee"

  },
    textContainerStyle:{
        display:'flex',
        justifyContent: 'center',
        marginLeft:'2%'
    },
    textStyle:{
        fontSize:22,
        fontFamily:"Roboto",
        color:'#707070',
        fontWeight: '400',
        letterSpacing:1
    },
    iconContainerStyle:{
        display: 'flex',
        flex:1,
        alignItems:'flex-end',
        justifyContent:'center',
        position:"relative",
        top:6
    },
    iconStyle:{
        display:"flex",
        justifyContent:'center',
        alignItems: "center",

    }

};
const mapStateToProps=(state)=>{
    return {
         Rows:state.doctor.Rows,
         class_num:state.user.class_num,
    }
};

export default connect(mapStateToProps,{sendLightStatus,requestLightStatus}) (LightListItem);