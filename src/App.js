import React, {Component} from 'react';
import './App.css';

// Components
import List from './components/List';

class App extends Component {

  state = {
    posts: [],
  }

  componentWillMount = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => {
        this.setState({
          posts: posts,
        })
      });
  }

  render() {
    const {posts} = this.state;
    return (
      <div className="App">
        <List posts={posts} />
      </div>
    );
  }
}

export default App;
