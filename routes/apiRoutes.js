// const axios = require("axios");
const router = require("express").Router();
const request = require("request");
// var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
const dbController = require("../controllers/nytController")

router.get("/article", (req, res) => {
    console.log(req.query);
    request.get({
        url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
        qs: {
            'api-key': "a6fafa0f676b487eb61ae9b100d08673",
            'q': req.query.q
        },
    },
        function (err, response, body) {
            body = JSON.parse(body);
            let allArticles = [];
            body.response.docs.forEach(element => {
                let oneArticle = {
                    articleId: element._id,
                    title: element.headline.main,
                    snippet: element.snippet.substring(0, 150) + "...",
                    url: element.web_url,
                    date: element.pub_date
                }
                allArticles.push(oneArticle);
            });
            // console.log(allArticles);
            console.log(body.response.docs[0]);
            res.status(200).json(allArticles);
        });
});
router.post("/articles", (req, res) => {
    dbController.saveData(req, res);
})

router.get("/saved", (req, res) => {
    console.log("api reached");
    // res.status(200).json();
    dbController.findAllArticle(req, res);
});
router.delete("/remove/:id", (req, res) => {
    console.log("api reached");
    console.log(req.params.id);
    // res.status(200).json();
    dbController.deleteArticleById(req, res);
});

module.exports = router;