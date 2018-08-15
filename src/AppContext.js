import React from "react";

const AppContext = React.createContext({
  user: {},
  account: "",
  handleChangeUser: () => {}
});

export default AppContext;
