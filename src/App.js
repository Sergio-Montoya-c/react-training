import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainLayout from './layouts/MainLayout';

// Components
import List from './components/List';
import Main from './components/Main';
import Post from './components/Post';

class App extends Component {
  render() {
    return (
      <Router>
        <MainLayout>
          <Route exact path="/" component={Main} />
          <Route exact path="/list" component={List} />
          <Route exact path="/posts/:id" component={Post} />
        </MainLayout>
      </Router>
    );
  }
}

export default App;
