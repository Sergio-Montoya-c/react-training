import React, { Component } from "react";

const withSubscription = (WrappedComponent, fields) => {
  return class extends Component {
    state = {
      ...fields
    };

    handleInputChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    };

    render() {
      return (
        <WrappedComponent
          fields={this.state}
          handleInputChange={this.handleInputChange}
          {...this.props}
        />
      );
    }
  };
};

export default withSubscription;
