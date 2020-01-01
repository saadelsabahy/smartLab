import * as axios from "axios";

const instance=axios.create({
    baseURL: 'http://192.168.1.10/smartlabb/public/index.php/api',
});

export  {instance as default};
