import React from 'react';
import AppContext from '../context/AppContext';

const AppConsumer = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      return (
        <AppContext.Consumer>
          {
            context => {
              return <WrappedComponent context={context} {...this.props} />
            }
          }
        </AppContext.Consumer>
      )
    }
  }
}

export default AppConsumer;