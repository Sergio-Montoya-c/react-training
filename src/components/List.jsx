import React, {Fragment, Component} from "react";
import { Link } from "react-router-dom";
import Item from './Item';
import Form from './Form';
import axios from 'axios';

class List extends Component {
  state = {
    posts: []
  }

  handleRetrievePosts = async () => {
    const posts = await axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.data);
    this.setState({
      posts: posts,
    });
  }

  handlePostItem = async item => {
    const newPost = await axios.post('https://jsonplaceholder.typicode.com/posts', item)
      .then(response => response.data);
      this.setState({
        posts: [newPost, ...this.state.posts],
      });
  };

  render() {
    const {posts} = this.state;
    return(
      <Fragment>
        <h1>POSTS</h1>
        <Form onPostItem={this.handlePostItem} />
        <button onClick={ this.handleRetrievePosts }>
          PRESS TO LOAD DATA
        </button>
        <ul>
          {posts.map(post => {
            return <Item key={post.title} title={post.title} body={post.body} />
          })}
        </ul>
      </Fragment>
    )
  }
};

export default List;
