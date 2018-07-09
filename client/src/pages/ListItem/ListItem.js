import React, { Component } from "react";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
import "./ListItem.css";


class Books extends Component {
  state = {
    books: [],
    title: "",
    category: "",
    author: "",
    synopsis: "",
    image: "",
    location: "",
    price: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.category && this.state.author && this.state.image && this.state.location && this.state.price) {
      API.saveBook({
        title: this.state.title,
        category: this.state.category,
        author: this.state.author,
        synopsis: this.state.synopsis,
        image: this.state.image,
        location: this.state.location,
        price: this.state.price
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container>
        <Header />
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h2>Earn money by listing your item</h2>
              <hr />
              <p>No matter what kind of object you have to share, Rental Central makes it simple and secure to earn money and reach hundreds of DIYers, just like you.</p>
            </Jumbotron>
          </Col>
          <Col size="md-6">
            <h4>List Your Item</h4>
            <p>All fields are required.</p>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Item"
              />
              <Input
                value={this.state.category}
                onChange={this.handleInputChange}
                name="category"
                placeholder="Category"
              />
              <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="author"
                placeholder="Contact Person"
              />
              <Input
                value={this.state.image}
                onChange={this.handleInputChange}
                name="image"
                placeholder="Image (paste image link)"
              />
              <Input
                value={this.state.location}
                onChange={this.handleInputChange}
                name="location"
                placeholder="Location (city, state)"
              />
              <Input
                value={this.state.price}
                onChange={this.handleInputChange}
                name="price"
                placeholder="Hourly price ($)"
              />
              <TextArea
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name="synopsis"
                placeholder="Using a couple of sentences, describe the item."
              />
              <FormBtn
                disabled={!(this.state.author && this.state.category && this.state.title && this.state.image && this.state.location && this.state.price)}
                onClick={this.handleFormSubmit}
                className="btn btn-sm btn-outline-secondary align-center"
                href="/"
              >
                List Item
              </FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
