import React, { Component } from 'react';
import API from '../utils/API';
import Navbar from "../components/Navbar"
import { Input, TextArea, FormBtn } from "../components/Form";
import { Col, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Link } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

class MessageBoard extends Component
{
  state = {
    posts: [],
    title: '',
    author: '',
    body: ''
  };

  componentDidMount()
  {
    this.loadPosts();
  };

  loadPosts = () =>
  {
    API.getPosts()
      .then(res =>
        this.setState({ posts: res.data, title: '', author: '', body: '' })
      )
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = () =>
    API.createPost({
      title: this.state.title,
      author: this.state.author,
      body: this.state.body,
    }).then(() =>
      this.setState({
        posts: [
          ...this.state.posts,
          {
            title: this.state.title,
            author: this.state.author,
            body: this.state.body,
          },
        ],
      })
    );

  render()
  {
    return (
      <div>
        <Navbar />
        <Container fluid>
        <Row className="justify-content-md-center">
        <Col size="md-9">
        <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Create New Post
              </Accordion.Toggle>
            </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                    <Input
                      value={this.state.title}
                      onChange={this.handleInputChange}
                      name="title"
                      placeholder="Title (required)"
                    />
                    <Input
                      value={this.state.author}
                      onChange={this.handleInputChange}
                      name="author"
                      placeholder="Author (required)"
                    />
                    <TextArea
                      value={this.state.body}
                      onChange={this.handleInputChange}
                      name="body"
                    />
                    <FormBtn
                      disabled={!(this.state.author && this.state.title)}
                      onClick={this.handleFormSubmit}
                    />
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
          </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col size="md-10">
              <List>
                {this.state.posts.map(post => (
                  <ListItem key={post.id}>
                    <Link to={"/posts/:id" + post.id}>
                      <strong>
                        {post.title} by {post.author}
                      </strong>
                    </Link>
                    <p>
                      {post.body}
                    </p>
                  </ListItem>
                ))}
              </List>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }

}

export default MessageBoard;