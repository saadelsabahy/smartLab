import React from "react";
import {Scene, Router, Actions} from "react-native-router-flux";
import Authentication from "../components/AuthStudent";
import UserDoctor from "../components/UserDoctor";
import UserStudent from "../components/UserStudent";
import Questions from "../components/Questions";
import Light from "../components/Light";
import Students from "../components/Students";
import QuizResults from "../components/QuizResults";
import CreateQuiz from "../components/CreateQuiz";
import AnswerQuiz from "../components/AnswerQuiz";
import Splash from "../components/Splash";
import AuthDoctor from "../components/AuthDoctor";
import StopScreen from "../components/StopScreen";
import QuizItem from "../components/public/QuizItem";
import AllQuiz from "../components/AllQuiz";


const RouterComponent=()=>{
    const {navBar,navBarText}=styles;
    return(
        <Router>
            <Scene key="root" hideNavBar >
                <Scene key="Splash" >
                    <Scene key="SplashPage"  component={Splash} hideNavBar  />
                </Scene>
                <Scene key="Auth" >
                    <Scene key="login"  component={Authentication} hideNavBar  />
                </Scene>
                <Scene key="AuthDoctor"  component={AuthDoctor} hideNavBar  />
                <Scene key="StopScreen"  component={StopScreen} hideNavBar  />


                <Scene key='Doctor' >
                    <Scene key='DoctorProfile' component={UserDoctor} hideNavBar />
                    <Scene
                        key="CreateQuiz"
                        title='Create Quiz'
                        component={CreateQuiz}
                        headerLayoutPreset={'center'}
                        navigationBarStyle ={navBar}
                        navBarButtonColor={'#0952FE'}
                        titleStyle={navBarText}
                    />
                    <Scene
                        key="AllQuiz"
                        title='Quiz'
                        component={AllQuiz}
                        headerLayoutPreset={'center'}
                        navigationBarStyle ={navBar}
                        navBarButtonColor={'#0952FE'}
                        titleStyle={navBarText}
                    />
                    <Scene
                        key="QuizResults"
                        title='Quiz Results'
                        component={QuizResults}
                        headerLayoutPreset={'center'}
                        navigationBarStyle ={navBar}
                        navBarButtonColor={'#0952FE'}
                        titleStyle={navBarText}
                    />

                    <Scene
                        key="Students"
                        title='Students'
                        component={Students}
                        headerLayoutPreset={'center'}
                        navigationBarStyle ={navBar}
                        navBarButtonColor={'#0952FE'}
                        titleStyle={navBarText}
                    />

                    <Scene
                        key="Light"
                        title='Control Lights'
                        component={Light}
                        headerLayoutPreset={'center'}
                        navigationBarStyle ={navBar}
                        navBarButtonColor={'#0952FE'}
                        titleStyle={navBarText}
                    />
                    <Scene
                        key="DoctorQuestions"
                        title='Questions'
                        component={Questions}
                        headerLayoutPreset={'center'}
                        navigationBarStyle ={navBar}
                        navBarButtonColor={'#0952FE'}
                        titleStyle={navBarText}

                    />

                </Scene>
                <Scene key='Student'>
                    <Scene key='StudentProfile' component={UserStudent} hideNavBar/>

                    <Scene
                        key="StudentQuestions"
                        title='Questions'
                        component={Questions}
                        headerLayoutPreset={'center'}
                        navigationBarStyle ={navBar}
                        navBarButtonColor={'#0952FE'}
                        titleStyle={navBarText}

                    />

                    <Scene
                        key="AllQuiz"
                        title='Quiz'
                        component={AllQuiz}
                        headerLayoutPreset={'center'}
                        navigationBarStyle ={navBar}
                        navBarButtonColor={'#0952FE'}
                        titleStyle={navBarText}
                    />

                    <Scene
                        key="NewQuiz"
                        title='Quiz'
                        component={AnswerQuiz}
                        headerLayoutPreset={'center'}
                        navigationBarStyle ={navBar}
                        navBarButtonColor={'#0952FE'}
                        titleStyle={navBarText}
                    />
                </Scene>
            </Scene>
        </Router>
    );
};
const styles={
    navBar:{
        backgroundColor:'#fff',

        height:70,
    },
    navBarText:{
        color: '#0952FE',

        alignSelf:'center',
        left:85,
        fontSize:25,
    },
    /*navBarButton:{
        color: '#0952FE',
    },*/


};

export default RouterComponent;