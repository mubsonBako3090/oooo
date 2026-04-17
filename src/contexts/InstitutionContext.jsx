import React from 'react';

const InstitutionContext = React.createContext(null);

export function InstitutionProvider({ children }) {
  return <InstitutionContext.Provider value={}>{children}</InstitutionContext.Provider>;
}

export default InstitutionContext;
