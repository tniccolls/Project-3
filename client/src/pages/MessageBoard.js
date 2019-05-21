import React, { Component } from 'react';
import API from '../utils/API';
import Navbar from "../components/Navbar";
import { Input, TextArea, FormBtn } from "../components/Form";

class MessageBoard extends Component {
    state = {
        posts: [],
        title: '',
        author: '',
        body: ''
      };

    componentDidMount() {
        this.loadPosts();
    };

    loadPosts = () => {
        API.getPosts()
          .then(res =>
            this.setState({ posts: res.data, title: '', author: '', body: ''})
          )
          .catch(err => console.log(err));
    };

    onChange = key => e => this.setState({ [key]: e.target.value });

    onClick = () =>
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

    render() {
        return (
          <div>
            <Navbar />
            <Input 
            value={this.state.title}
            onChange={this.onChange}
            name="title"
            placeholder="Title (required)"
            />
            <Input 
            value={this.state.author}
            onChange={this.onChange}
            name="author"
            placeholder="Author (required)"
            />
            <TextArea
              value={this.state.body}
              onChange={this.onChange}
              name="body"
              placeholder="Text Body"
            />
            <FormBtn 
            disabled={!(this.state.author && this.state.title)}
            onClick={this.handleFormSubmit}
            />
            {/* Breakdown Input Fields, Rows, Container, etc and import them here */}
            {JSON.stringify(this.state.posts)}
          </div>
        )
    }

}

export default MessageBoard;