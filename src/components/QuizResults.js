import React, { Component } from 'react';
import {View,FlatList,StyleSheet} from 'react-native';

import QuizResC from "./public/QuizResC";
import {connect} from 'react-redux';


class QuizResults extends Component {
    render() {

        const {container_fluid} = styles;
        return (
            <View style={container_fluid}>
                <FlatList
                    data={this.props.results}
                    keyExtractor={(item,index)=>index.toString()}
                    renderItem={({item}) => <QuizResC name={item.name} mark={item.mark} fullMark={item.fullMark}/>}
                />
            </View>
        )
    }

}
const styles=StyleSheet.create({
    container_fluid:{
        flex:1,
        height:"100%",
        padding:10,
        backgroundColor:'#fff'
    },

});
const mapStateToProps=(state)=>{
    return {
        results:state.doctor.QuizResults,



    }
};
export default connect(mapStateToProps) (QuizResults);


