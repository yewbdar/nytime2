const db =require('../models')
module.exports = {
    findAllArticle:function(req,res){
        db.Article.find({})
        .then((result) =>{
            console.log("DB")
            console.log(result)
             res.json(result)
        }).catch((err )=>{
            res.status(422).json(err);
        });
    },
    findById: function(req, res) {
        db.Article
          .findById(req.params.id)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      saveData: function(req, res) {
          console.log(req.body)
        db.Article
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => { console.log(err) ;
            return res.status(422).json(err)});
      },
      remove: function(req, res) {
          
        db.Article
          .findById({articleId: req.params.id })
          .then(dbModel => dbModel.remove())
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },

      deleteArticleById : (req, res) => {
        console.log("DB remove");
        //  console.log(req.params.id);
        db.Article.remove({articleId : req.params.id})
        .then(() => {
            res.status(200).json({data : "okay"})
        })
        .catch((err) => {
            console.log("error while deleting an article")
            console.log(err)
            res.status(400).json({err : "something went wrong"})
        })
    }

}