import React, { Component } from "react";
import UserContext from "../AppContext";

const UserConsumer = WrappedComponent => {
  return class extends Component {
    render() {
      return (
        <UserContext.Consumer>
          {context => {
            console.log(context);
            return <WrappedComponent context={context} {...this.props} />;
          }}
        </UserContext.Consumer>
      );
    }
  };
};

export default UserConsumer;
