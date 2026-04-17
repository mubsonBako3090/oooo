import React from 'react';

const NotificationContext = React.createContext(null);

export function NotificationProvider({ children }) {
  return <NotificationContext.Provider value={}>{children}</NotificationContext.Provider>;
}

export default NotificationContext;
