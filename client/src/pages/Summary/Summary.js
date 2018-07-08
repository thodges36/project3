import React, { Component } from "react";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";

class Summary extends Component {

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-6">
            
          <h3>Congratulations!</h3>
          <p>You've successfully rented this item.</p>

            
          </Col>
        </Row>

        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Catalog</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Summary;