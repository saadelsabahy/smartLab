import React ,{Component} from 'react';
import {View,ScrollView} from 'react-native';
import CreateQuizC  from './public/CreateQuizC'

export default class  CreateQuiz extends Component{

    render(){
        const{container_fluid}=this.styles;
        return(
        <ScrollView>
            <View style={container_fluid}>
                <CreateQuizC/>
            </View>
        </ScrollView>
        )
    
    }
    styles={
        container_fluid:{
            flex:1,
            height:"100%",
            padding:20,
            backgroundColor:'#fff'
        },
    }
}

