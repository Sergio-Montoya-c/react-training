import React, {Fragment, Component} from "react";
import { Link } from "react-router-dom";
import Item from './Item';
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

  handlePostItem = async () => {
    const newPost = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: 'Miche Training',
        body: 'Cool traning to learn react',
      })
      .then(response => response.data);
      this.setState({
        posts: [newPost, ...this.state.posts],
      });
  };

  render() {
    const {posts} = this.state;
    return(
      <Fragment>
        <Link to="/">Return to index</Link>
        <h1>POSTS</h1>
        <button onClick={ this.handleRetrievePosts }>
          PRESS TO LOAD DATA
        </button>
        <button onClick={ this.handlePostItem }>
          PRESS TO ADD ONE ITEM
        </button>
        <ul>
          {posts.map(post => {
            return <Item key={post.id} title={post.title} body={post.body} />
          })}
        </ul>
      </Fragment>
    )
  }
};

export default List;
