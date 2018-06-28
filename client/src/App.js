import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

// import logo from './logo.svg';
import Header from './components/Header/Header'
import Home from './pags/SearchArticle/SearchArticle';
import Saved from './pags/SavedArticle/SavedArticle';
import { Col, Row, Container } from "./components/Grid";

import './App.css';
const App = () => (
  <Router>
    <div>
      <Container fluid>
        <Row>
        <Col size="md-1"/>
          <Col size="md-10">
            <Header />
          </Col>
        </Row>
      </Container>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/saved" component={Saved} />
    </div>
  </Router>

);
export default App;
