import axios from "axios";


export default{
    //login 
    login: function(userData){
        return axios.post("/api/login", userData)
    },
    getGoogleScholar: function (){
        return axios.get("https://www.googleapis.com/books/v1/volumes");
    }
}