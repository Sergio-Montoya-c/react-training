import React, { Component } from "react";
import UserConsumer from "../consumers/UserConsumer";

class Item extends Component {
  render() {
    const { title, body } = this.props;
    const { user, handleChangeUser } = this.props.context;
    return (
      <li>
        <h2>{user.name}</h2>
        <strong>{title}</strong>
        <span>{body}</span>
        <button onClick={() => handleChangeUser(title)}>CHANGE USER</button>
      </li>
    );
  }
}

export default UserConsumer(Item);
