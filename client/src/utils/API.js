import axios from "axios";


export default {
    //login 
    loginApi: function (userData) {
        console.log(userData)
        //return axios.post("http://localhost:3001/login", userData)
        return axios({
            method: 'post',
            url: 'http://localhost:3001/login',
            data: userData
        });

    },
    getGoogleScholar: function () {
        return axios.get("https://www.googleapis.com/books/v1/volumes");
    }

}