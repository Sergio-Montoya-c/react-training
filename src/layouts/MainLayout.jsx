import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import AppConsumer from '../consumers/AppConsumer';

class MainLayout extends Component {
  render() {
    const { children, context: {user} } = this.props;
    return(
      <Fragment>
        <header>
          <h1>MicheReact Training</h1>
          <div>
            Username: {`${user.name} ${user.lastname}`}
          </div>
          <div>
            <Link to="/">Return to Root</Link>
            <Link to="/list">View Posts</Link>
          </div>
        </header>
        <div className="main-content">
          {children}
        </div>
        <footer>
          MICHETRAINING
        </footer>
      </Fragment>
    )
  }
}

export default AppConsumer(MainLayout)