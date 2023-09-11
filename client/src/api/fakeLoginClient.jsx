import axios from 'axios';

export default class fakeLoginClient {
<<<<<<< HEAD
    async login(){
        return axios.get("fakeData/login.json");
=======
    constructor(id) {
        this.id = id;
    }
    async login(id){
        // return axios.get("fakeData/login.json");
        try{
            const response = await axios.get(`http://localhost:4000/auth/login?id=${this.id}`);
            return response.data;
        }catch(error){
            console.error("Error:",error);
        }
>>>>>>> d629f522fe2c3160999906c4e58e9b5156bb892a
    }
}
