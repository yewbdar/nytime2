import React from "react";
import  {FormBtn}  from "../Form";
export const ArticleListItem = (props) => (
  
  <div>
      <div  className="row border border-secondary " key={props.article.articleId} id={props.article.articleId}>
        <div className="col-lg-10">
        <a href={props.article.url}><h1>{props.article.title}</h1></a><br/>
        <h3>{props.article.snippet}</h3><br />
        {props.article.article}<br />
        </div>
        <div className="col-lg-2"> <br/>
        <FormBtn  onClick={props.onBtnClick} data-article-id={props.article.articleId} >{props.btnName}</FormBtn></div>
      </div>
      <br/>
  </div>
  
);
