import { createContext, useContext } from 'react';
import { useAuthStore } from '../store/authStore';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const { user, token, setAuth, logout } = useAuthStore();
    return (
        <AuthContext.Provider value={{ user, token, setAuth, logout }}>
              {children}
                  </AuthContext.Provider>
                    );
                    };

                    export const useAuthContext = () => useContext(AuthContext);