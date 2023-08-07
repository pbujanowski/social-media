import axios from "axios";
import { FC, createContext, useEffect, useMemo, useState } from "react";

interface AuthProviderProps {
  children: JSX.Element;
}

interface AuthContextType {
  token: string | null;
  setTokenAndStore: (token: string) => void;
}

const AuthContext = createContext<AuthContextType>({
  token: null,
  setTokenAndStore: () => {},
});

const AuthProvider: FC<AuthProviderProps> = ({ children }: AuthProviderProps) => {
  const tokenKey = "token";
  const authorizationHeader = "Authorization";

  const [token, setToken] = useState(localStorage.getItem(tokenKey));

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common[authorizationHeader] = "Bearer " + token;
      localStorage.setItem(tokenKey, token);
    } else {
      delete axios.defaults.headers.common[authorizationHeader];
      localStorage.removeItem(tokenKey);
    }
  });

  const setTokenAndStore = (token: string) => {
    setToken(token);
    localStorage.setItem(tokenKey, token);
  };

  const contextValue = useMemo(
    () => ({
      token,
      setTokenAndStore,
    }),
    [token],
  );

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
