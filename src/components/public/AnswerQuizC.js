import React, { Component } from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import {changeResult} from '../../actions'
import {connect} from "react-redux";
 class AnswerQuizC extends Component{
    constructor(props){
        super(props);
        this.state = {
            radioSelected: 'a'
        }
    }
    radioClick(val) {
        this.setState({
            radioSelected: val
        });
        let r=this.props.results;

        let index=r.findIndex((it)=>{
            return it.id===this.props.item.id;
        });
        r[index]={answer: val,'id':this.props.item.id};
        this.props.changeResult(r);

    }
    render(){
        const{quiz,text,answer,box,greenColor,container}=this.styles;
        const {item}=this.props;
        return(
            <View style={container}>
                <View style={quiz}>
                    <Text style={text}> {item.question}</Text>
                </View>
                <View style={answer}>
                    <TouchableOpacity  style={[box,this.state.radioSelected=== 'a' ?greenColor:'']}  onPress={this.radioClick.bind(this, 'a')}>
                        <Text style={[{ fontWeight:"500"},this.state.radioSelected=== 'a' ?{color:'#fff'}:'']}>{'A) '+item.a}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={[box,this.state.radioSelected=== 'b' ?greenColor:'']}  onPress={this.radioClick.bind(this, 'b')}>
                        <Text style={[{ fontWeight:"500"},this.state.radioSelected=== 'b' ?{color:'#fff'}:'']}>{'B) '+item.b}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={[box,this.state.radioSelected=== 'c' ?greenColor:'']}  onPress={this.radioClick.bind(this, 'c')}>
                        <Text style={[{ fontWeight:"500"},this.state.radioSelected=== 'c' ?{color:'#fff'}:'']}>{'C) '+item.c}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    styles={
        container:{
            width:"100%",
            justifyContent:'center',
            alignItems:'center',
            marginBottom:30,
            backgroundColor:'#F5F5F5',
        },
        quiz:{

            padding:15,
        },
        text:{
            fontSize:16,
            color:"#6D6D6D",
            textAlign:'left'
        } ,
        answer:{
            flexDirection:'row',
            paddingTop:10

        },
        box:{
            backgroundColor:'#F1F1F1',
            flex:1,
            height:60,
            alignItems:'center',
            justifyContent:'center',
            marginRight:10,


        },
        greenColor:{
            backgroundColor:'#0FF0AC',
            color:'#fff'
        },

    }
}

const mapStateToProps=(state)=>{
    return {
        results:state.student.results
    }
};


export default connect (mapStateToProps,{changeResult}) (AnswerQuizC);
