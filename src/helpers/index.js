import {AsyncStorage} from "react-native";
import axios from "../axios"
export async function getId() {


        const id= await AsyncStorage.getItem('id');
        if (id !==null)
        {
            return id
        }
        return null;

}
export async function getType() {


    const type= await AsyncStorage.getItem('type');
    if (type !==null)
    {
        return type
    }
    return null;

}
export async function getUser() {


    const user= await AsyncStorage.getItem('user');
    if (user !==null)
    {
        return JSON.parse(user);
    }
    return null;

}



export  async function setUser(user) {
    if (user)
    {
        try {
            await AsyncStorage.setItem('user',JSON.stringify(user));
            axios.defaults.headers.common['Authorization']=user.token_type+''+user.token
        }
        catch (e) {
            return null
        }

    }
    return user;
}
export  async function setIdAndType(id,type) {
    if (id)
    {
        try {
            await AsyncStorage.setItem('id',id);
            await AsyncStorage.setItem('type',type);
        }
        catch (e) {
            return null
        }

    }
    return type;
}

export  async function removeUser() {


    try {
        await AsyncStorage.removeItem('user');
        console.log('done');
        axios.defaults.headers.common['Authorization'] = null;
    } catch (e) {
        return null;
    }

    return null;
}
