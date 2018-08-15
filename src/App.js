import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainLayout from './layouts/MainLayout';

import AppContext from './AppContext';

// Components
import List from './components/List';
import Main from './components/Main';
import Post from './components/Post';

class App extends Component {
  
  changeUserName = (newUserName) => {
    this.setState({
      user: {
        name: newUserName,
        lastName: 'Barraza',
      }
    })
  }
  
  state = {
    user: {
      name: 'Sergio',
      lastName: 'Montoya',
    },
    account: '',
    handleChangeUser: this.changeUserName,
  }

  render() {
    return (
      <Router>
        <AppContext.Provider value={this.state}>
          <MainLayout>
            <Route exact path="/" component={Main} />
            <Route exact path="/list" component={List} />
            <Route exact path="/posts/:id" component={Post} />
          </MainLayout>
        </AppContext.Provider>
      </Router>
    );
  }
}

export default App;
