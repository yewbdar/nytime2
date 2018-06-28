import axios from "axios";

export default {
    getArticle: function (query) {
        console.log(query)
        return axios.get("/api/article",
            { params: { q: query } });
        //  ,begin_date:startDate ,end_date:endDate,sort:'newest'
    },
    
    getSavedArticle: function () {
        console.log("api get saved articles")
        return axios.get("/api/saved")
    },
    
    SaveArticle: function (json) {
        return axios.post("/api/articles" , json)
    },
    deleteArticle: function (id) {
        console.log("clinte API deleteArticle");
        return axios.delete("/api/remove/" + id);
    },
    loadeHtml: function () {
        return axios.get("*")
    }
};

