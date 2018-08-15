import React from "react";
import UserConsumer from "../consumers/UserConsumer";

const Avatar = ({ context: { user } }) => {
  return <div>Username: {user.name}</div>;
};

export default UserConsumer(Avatar);
