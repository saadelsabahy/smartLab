import React, {Component} from 'react';
import {View,Text,TouchableOpacity,Image} from 'react-native';
import User from "../assets/images/user.png";
import {connect} from 'react-redux';
import {logingout} from "../../actions";
import {Actions} from "react-native-router-flux";
import {getType} from "../../helpers";


class ProfileHeader extends Component {
    state={
        type:'',
    };

    componentWillMount(): void {
        getType().then((type)=>{
           this.setState({
               type:type
           });
        });
    }

    LogOut=()=>{
            this.props.logingout(this.props.user.class_num);
        Actions.AuthDoctor();
    };
    renderLOgOutButton=()=>{

            if (this.state.type==='doctor'){
                return(
                    <TouchableOpacity style={styles.buttonToucheStyle} onPress={this.LogOut}>
                            <Text style={styles.buttonTextStyle}>logout</Text>
                    </TouchableOpacity>

                )
            }
            else {
                return null;
            }

    };
    render() {

        const {
            mainContainerStyle,
            profileInfoContainerStyle,
            personalInfoContainerStyle,
            userNameTextStyle,
            userTypeTextStyle,
            buttonStyle,
            imageStyle,

        }=styles;
        const {userName,userType,onPress}=this.props;
        return (
             <View style={mainContainerStyle}>

                 <View style={ profileInfoContainerStyle}>
                     <Image source={User} style={imageStyle}/>
                 </View>

                 <View style={personalInfoContainerStyle}>
                     <View>
                         <Text style={ userNameTextStyle}> {userName} </Text>
                     </View>
                     <View>
                         <Text style={userTypeTextStyle}> {userType} </Text>
                     </View>
                 </View>


                 <View style={buttonStyle}>
                      {this.renderLOgOutButton()}
                 </View>


             </View>
        );
    }
}
const styles={
    mainContainerStyle:{
        display:"flex",
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#fff',
        shadowColor:'rgba(0,0,0,.3)',
        shadowOffset:{width:0,height:3},
        elevation:2,
        padding:10,
        height:150
     },
    profileInfoContainerStyle:{
        marginLeft:20,
    },
    personalInfoContainerStyle:{

        left:10,
    },
    imageStyle:{
        borderWidth:3,
        borderColor:"#0952FE",
        borderRadius: 32
    },
    userNameTextStyle:{
        color:"#0952FE",
        fontSize:22,
        fontWeight:'700',
        paddingRight:100,
        textAlign: 'justify'
    },
    userTypeTextStyle:{
        color:"#0952FE",
        fontSize:17,
        fontWeight:'600',
        paddingRight:10,
        textAlign: 'justify'

    },

    buttonStyle:{
        position:'absolute',
        bottom:15,
        right:30,
        alignSelf:'center'
    },
    buttonToucheStyle:{
        backgroundColor: '#707070',
        paddingLeft: 7,
        paddingRight: 7,
        paddingTop: 3,
        paddingBottom: 7,
        borderRadius: 3
    },
    buttonTextStyle:{
        color:'#fff',
        fontSize:17
    }

};
const mapStateToProps=(state)=>{
    return {
        user:state.user
    }
};


export default connect(mapStateToProps,{logingout}) (ProfileHeader) ;