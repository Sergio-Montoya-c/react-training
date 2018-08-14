import React from 'react';

const withSubscription = (WrappedComponent, fields) => {
  return class extends React.Component {
    state = {...fields};

    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value,
      })
    }

    render() {
      return <WrappedComponent fields={this.state} handleChange={this.handleChange} {...this.props} />
    }
  }
}

export default withSubscription;