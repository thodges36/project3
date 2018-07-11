import React, { Component } from "react";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";


class Summary extends Component {

  render() {
    return (
      <Container>
        <Header />
        <Row>
          <Col size="md-6">
            
          <h3>Congratulations!</h3>
          <p>You've successfully rented this item.</p>
          <Link to="/">← Back to Catalog</Link>


            
          </Col>
        </Row>

      </Container>
    );
  }
}

export default Summary;
