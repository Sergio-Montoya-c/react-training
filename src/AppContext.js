import React from 'react';

const AppContext = React.createContext({
  user: {},
  account: 'asdas',
  handleChangeUser: () => {},
});

export default AppContext;