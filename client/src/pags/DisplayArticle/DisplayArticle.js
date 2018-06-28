import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
// import Jumbotron from "../../components/Jumbotron";
// import API from "../../utils/API";
import { Btn } from "../Form";
import ArticleList from "../../components/ArticleList/ArticleList";
const DisplayArticle = (props) => (

<Container>
    <Row>
        <Col size="md-1">
        {!props.length ? (<h1 className="text-center">No Article to Display</h1>) : (
            <ul >
                {props.map(article => {
                    return (
                        <ArticleList articles={article}
                        />
                    );
                })}
            </ul >
        )}
        </Col>
    </Row>
</Container>
)
export default DisplayArticle;