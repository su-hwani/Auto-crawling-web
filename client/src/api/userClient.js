import axios from 'axios';


export default class userClient{
    constructor(){
        this.http = axios.create({
            baseURL: process.env.REACT_APP_SERVER_URL+"/user"
        })
    }


    register = async (id,pw,phoneNum,money) => {
        this.http.post("register",{
            user_id: id,
            user_pw: pw,
            user_phonenum: phoneNum,
            user_money: money
        });
    }
}
