import axios from 'axios';

export default class fakeLoginClient {
    async login(){
        return axios.get("fakeData/login.json");
    }
}
