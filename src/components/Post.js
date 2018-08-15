import React, {Component} from 'react';
import axios from 'axios';

export default class Post extends Component {
  state = {
    title: '',
    body: '',
  }

  componentDidMount = async () => {
    const {data: post} = await axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`);
    this.setState(post);
  }

  render (){
    const {title, body} =  this.state;
    return (
      <div>
        <h2>Title</h2>
        {title}
        <h2>Body</h2>
        {body}
      </div>
    )
  }
}