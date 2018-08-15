import React, {Component} from 'react';
import AppConsumer from '../consumers/AppConsumer';

class Item extends Component {
  render () {
    const {context, title, body} = this.props;
    return(
      <li>
        <label>{context.user.name}</label>
        <strong>{title}</strong>
        <span>{body}</span>
        <button onClick={() => context.changeUserName(title)}>CAMBIAR DATOS</button>
      </li>
    )
  }
};

export default AppConsumer(Item);
