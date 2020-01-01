import React ,{Component} from 'react';
import {View,TouchableOpacity,Image} from 'react-native';
import {Input,Btn} from '../common';
import checked from '../assets/images/checked.png';
import { QuestionTextChange,FirstAnswerTextChange,SecondAnswerTextChange,ThirdAnswerTextChange,AddNew,CreateQuiz} from '../../actions/DoctorAction';
import {connect} from 'react-redux';


 class CreateQuizC extends Component{
    constructor(props) {
        super(props);
        this.state = {radioSelected:'a'};
    }
    radioClick(val) {
        this.setState({
            ...this.state,
            radioSelected: val
        })
    }
    HandleChange=(text)=>{
        this.props. QuestionTextChange(text);
    };
     HandleFirstAnswerChange=(text)=>{
         this.props.FirstAnswerTextChange(text);
     };
     HandleSecondAnswerChange=(text)=>{
         this.props.SecondAnswerTextChange(text);
     };
     HandleThirdAnswerChange=(text)=>{
         this.props.ThirdAnswerTextChange(text);
     };
     HandleAdd=()=>{
         let qu={ question:this.props.docQuestion,a:this.props.answerA,b:this.props.answerB,c:this.props.answerC,answer:this.state.radioSelected};
         let quiz=this.props.quiz;
         quiz.push(qu);
         this.props.AddNew(quiz);
     };
     HandleCreate=()=>{
         this.props.CreateQuiz({id:this.props.user.id,quiz:this.props.quiz});
 };

    render(){
        const{wrapper,container,notSelected,radioContainer,btnContainer}=this.styles;
        return(
            <View style={wrapper}>
                <View style={container}>
                    <Input onChangeText={this.HandleChange} value={this.props.docQuestion} headerTextValue={'Add a question'}/>
                </View>

                <View style={container}>
                    <Input onChangeText={this.HandleFirstAnswerChange} value={this.props.answerA} headerTextValue={'Choice A'} inputCStyle={{marginBottom:0}}/>
                    <TouchableOpacity style={radioContainer}  key={'a'} onPress={this.radioClick.bind(this,'a')}>
                        {this.state.radioSelected==="a" ?(<View ><Image style={ {width:60,height:60}} source={checked} /></View>):(
                         <View style={notSelected}/>
                        )}
                    </TouchableOpacity>
                </View>

                <View style={container}>
                    <Input onChangeText={this.HandleSecondAnswerChange} value={this.props.answerB} headerTextValue={'Choice B'} inputCStyle={{marginBottom:0}}/>
                    <TouchableOpacity style={radioContainer}  key={'b'} onPress={this.radioClick.bind(this,'b')}>
                        {this.state.radioSelected==="b" ?(<View ><Image style={ {width:60,height:60}} source={checked} /></View>):(
                         <View style={notSelected}/>
                        )}
                    </TouchableOpacity>
                </View>
                <View style={container}>
                    <Input onChangeText={this.HandleThirdAnswerChange} value={this.props.answerC} headerTextValue={'Choice C'} inputCStyle={{marginBottom:0}}/>
                    <TouchableOpacity style={radioContainer}  key={'c'} onPress={this.radioClick.bind(this,'c')}>
                        {this.state.radioSelected==="c" ?(<View ><Image style={ {width:60,height:60}} source={checked} /></View>):(
                         <View style={notSelected}/>
                        )}
                    </TouchableOpacity>
                </View>
                <View style={btnContainer}>
                    <Btn onPress={this.HandleAdd} style={{padding:15,paddingLeft:30,paddingRight:30,margin:0}} innerStyle={{fontSize:22,fontWeight:'normal'}}>Add new</Btn>
                    <Btn onPress={this.HandleCreate} style={{padding:15,paddingLeft:30,paddingRight:30,margin:0}} innerStyle={{fontSize:22,fontWeight:'normal'}}>Create</Btn>

                </View>
            </View>
        )

    }
    styles={
        wrapper:{

        },
        container:{
            flexDirection:'row',
            alignItems:'flex-end',
            width:"100%",
            marginBottom:25


        },
        notSelected:{
            width:60,
            height:60,
            borderRadius:30,
            borderWidth:15,
            borderColor:'#F5F5F5',
            backgroundColor:'#fff'

        },
        radioContainer:{
            marginLeft:20
        },
        btnContainer:{
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-between',
            marginTop:20
        }
    }
}
const mapStateToProps=(state)=>{
    return {
        docQuestion:state.doctor.docQuestion,
        answerA:state.doctor.answerA,
        answerB:state.doctor.answerB,
        answerC:state.doctor.answerC,
        quiz:state.doctor.quiz,
        user:state.user
    }
};

export default connect (mapStateToProps,{ QuestionTextChange,
    FirstAnswerTextChange,
    SecondAnswerTextChange,
    ThirdAnswerTextChange,
    AddNew,
    CreateQuiz,
})(CreateQuizC);

