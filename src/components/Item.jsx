import React, {Component} from 'react';
import AppContext from '../AppContext';

class Item extends Component {

  componentDidMount = () => {
    console.log(this.props);
  }

  render () {
    const {title, body, user, handleChangeUser} = this.props;
    return (
      <li>
        <h1>{user.name}</h1>
        <strong>{title}</strong>
        <span>{body}</span>
        <button onClick={() => handleChangeUser(title)}>CHANGE USER</button>
      </li>
    )
  }
};

const ItemConsumer = (props) => 
  <AppContext.Consumer>
    { 
      state => {
        return <Item {...state} {...props}/> 
      }
    }
  </AppContext.Consumer>

export default ItemConsumer;
