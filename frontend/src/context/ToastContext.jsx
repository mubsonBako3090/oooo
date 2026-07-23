import { createContext, useContext } from 'react';
import toast from 'react-hot-toast';

const ToastContext = createContext(null);

export const ToastProvider = ({ children }) => {
  const value = {
      success: (msg) => toast.success(msg),
          error:   (msg) => toast.error(msg),
              info:    (msg) => toast(msg),
                };
                  return (
                      <ToastContext.Provider value={value}>
                            {children}
                                </ToastContext.Provider>
                                  );
                                  };

                                  export const useToastContext = () => useContext(ToastContext);