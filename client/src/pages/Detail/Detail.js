import React, { Component } from "react";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";

class Detail extends Component {
  state = {
    book: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getBook(this.props.match.params.id)
      .then(res => this.setState({ book: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container>
        <Header />
        <Nav />
        <Row>
          <Col size="md-6">
            
            <img src={this.state.book.image} alt={this.state.book.title} class="img-large"></img>
            
          </Col>
        </Row>
        <Row>
          <Col size="md-6">
            <article>
              <h1>
                {this.state.book.title}
              </h1>
              <p>
                {this.state.book.synopsis}
              </p>
              <p>
                Location: {this.state.book.location}
              </p>
              <p>
                Price: ${this.state.book.price}/hour
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/summary">
            <button type="button" class="btn btn-success">Rent Now</button>
            </Link>
          </Col>
        </Row>
        <Row>
          {/* <Col size="md-2">
            <Link to="/">← Back to Catalog</Link>
          </Col> */}
        </Row>
      </Container>
    );
  }
}

export default Detail;
