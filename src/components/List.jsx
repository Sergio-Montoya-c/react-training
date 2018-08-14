import React, {Fragment, Component} from "react";
import Item from './Item';
import Form from './Form';
import OtherForm from './OtherForm';
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
        <div className="list">
          <h1>POSTS</h1>
          <Form onPostItem={this.handlePostItem} />
          <button onClick={ this.handleRetrievePosts }>
            PRESS TO LOAD DATA
          </button>
          <OtherForm onPostItem={this.handlePostItem} />
          <ul>
            {posts.map(post => {
              return <Item key={post.title} title={post.title} body={post.body} />
            })}
          </ul>
        </div>
      </Fragment>
    )
  }
};

export default List;
