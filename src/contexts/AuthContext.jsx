import React from 'react';

const AuthContext = React.createContext(null);

export function AuthProvider({ children }) {
  return <AuthContext.Provider value={}>{children}</AuthContext.Provider>;
}

export default AuthContext;
