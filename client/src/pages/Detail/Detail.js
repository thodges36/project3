import React, { Component } from "react";
import Header from "../../components/Header";

import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";
import Calendar from 'react-calendar';


class Detail extends Component {
  state = {
    book: {},
    date: new Date()
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getBook(this.props.match.params.id)
      .then(res => this.setState({ book: res.data }))
      .catch(err => console.log(err));
  }
  
  onChange = date => this.setState({ date })


  render() {
    return (
      <Container>
        <Header />
        <Row>
          <Col size="md-6">
            
            <img src={this.state.book.image} alt={this.state.book.title} class="img-large"></img>

            <article>
              <h1>
                {this.state.book.title}
              </h1>
              <p>
                {this.state.book.synopsis}
              </p>
              <p>
              <i class="fas fa-map-marker-alt"></i>  {this.state.book.location}
              </p>
              <p>
              <i class="fas fa-dollar-sign"></i> {this.state.book.price}/hour
              </p>
           
            </article>
         
            
          </Col>
  
          <Col size="md-4">
          <div>
            <h4>
              Rent this item
            </h4>

            <div class="alert alert-primary" role="alert">
            This item is rentable for one day at a time!
            </div>

            <div>
              <Calendar
                onChange={this.onChange}
                value={this.state.date}
              />
            </div>
            <br />
            <form>
              <label>
                Start Time (hour): 
                <input
                  name="start"
                  type="text"
               />
              </label>
              <br />
              <label style="padding:2px">
                End Time (hour): 
                <input
                  name="end"
                  type="text"
                />
              </label>
            </form>

           
              
            <Link to="/summary">
            <button type="button" class="btn btn-sm btn-outline-secondary">Rent Now</button>
            </Link>

            </div>

          </Col>
        </Row>
 
      </Container>
    );
  }
}



export default Detail;
