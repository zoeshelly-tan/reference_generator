import axios from "axios";

const googleScholarAPI = {
    getGoogleScholar: function (){
        return axios.get("https://www.googleapis.com/books/v1/volumes");
    }
}

export default googleScholarAPI;