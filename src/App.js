import React, { Component } from 'react';
import { View} from 'react-native';
import RouterComponent from "./Router/Router";

import {Provider} from 'react-redux';
import ReduxThunk from "redux-thunk";
import {createStore,applyMiddleware} from 'redux';
import reducers from "./reducers";
import FlashMessage from "react-native-flash-message";
class App extends Component {


    render() {
        return (
            <Provider store={createStore(reducers,{},applyMiddleware(ReduxThunk))}>
            <View style={{backgroundColor: '#fff',flex:1 }}>
                 <RouterComponent/>
                <FlashMessage position='top'/>
            </View>
            </Provider>



     );
  }
}


export default App;