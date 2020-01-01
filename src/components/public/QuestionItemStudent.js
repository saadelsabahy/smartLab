import React, {Component} from 'react';
import {View, Text, Image,TouchableOpacity} from "react-native";
import User from "../assets/images/user.png"
import {PlusCounter,DeleteMessage} from '../../actions';
import {connect} from 'react-redux';
import {showMessage} from "react-native-flash-message";


class QuestionItemStudent extends Component {


    componentDidUpdate(): void {
        if(this.props.messageType){
            showMessage({
                message:this.props.message,
                type:this.props.messageType,
                title:'plus status',
                hideStatusBar:true,
                floating:true
            });

        }


    }

    HandlePlus=()=>{

               this.props.studentQuestions.map((question)=>{
                   console.log(question.id,'question');
                   this.props.PlusCounter({QuestionId:question.id,UserId:this.props.user.id})
               })
           };



    renderPlus=()=>{
        return(this.props.user.type==="doctor"?null
            :( <TouchableOpacity style={styles.likeContainerStyle } onPress={this.HandlePlus}>
                <View style={styles.likeCon}>
                    <Text style={styles.likeTextStyle}>
                        +1
                    </Text>
                </View>

            </TouchableOpacity>))
    };
    render() {


        const{question,user,num,id}=this.props.question;
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
                                 {user.name}
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
                     {`${num} Student Ask That Question `}
                 </Text>
             </View>
             {
                this.renderPlus()
             }



             </View>




        );
    }
};
const styles={
    parentStyle:{
        display:"flex",
        backgroundColor: '#fff'
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
    likeContainerStyle:{
         display:"flex",
        alignItems:"flex-end",
        position:"relative",
        left:-40,
        top:-15,

       },
    likeCon:{
        display:'flex',
        justifyContent:'center',

        shadowColor: '#fff',
        width:50,
        height:50,
        borderRadius:25,
        shadowOffset:{width:0 , height: 0},
        elevation: 1,
        position:"relative",
        alignItems: 'center'
    },
    likeTextStyle:{
        fontSize:20,
        fontWeight:"bold",
        color:"#0952FE",

    },
};
const mapStateToProps=(state)=>{
    return{
        studentQuestions:state.student.questions,
        user:state.user,
        message:state.student.message,
        messageType:state.student.messageType,

    }
};

export default connect(mapStateToProps,{PlusCounter,DeleteMessage}) (QuestionItemStudent);