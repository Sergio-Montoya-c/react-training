import React from 'react';

const AppContext = React.createContext({
  user: {},
  changeUserName: () => {},
});

export default AppContext;