import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Avatar from "../components/Avatar";

export default class MainLayout extends Component {
  render() {
    const { children } = this.props;
    return (
      <Fragment>
        <header>
          <h1>MicheReact Training</h1>
          <Avatar />
          <div>
            <Link to="/">Return to Root</Link>
            <Link to="/list">View Posts</Link>
          </div>
        </header>
        <div className="main-content">{children}</div>
        <footer>MICHETRAINING</footer>
      </Fragment>
    );
  }
}
