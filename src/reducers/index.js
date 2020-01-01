import {combineReducers} from "redux";
import AuthReducer from './AuthReducer';
import UserLogin from './UserLogin';
import StudentReducer from "./StudentReducer";
import DoctorReducer from './DoctorReducer';

export default combineReducers({
    Auth:AuthReducer,
    user:UserLogin,
    student:StudentReducer,
    doctor:DoctorReducer,
})