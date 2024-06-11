import { createContext, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";

export const userDataContext = createContext(null);

export function UserDataContextProvider({ children }) {
  const [userData, setUserData] = useState(null);
  function decodeUserToken() {
    let token = localStorage.getItem("userToken");
    let decodedToken = jwtDecode(token);

    setUserData(decodedToken);
  }

  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      decodeUserToken();
    }
  }, []);
  return (
    <userDataContext.Provider
      value={{ userData, decodeUserToken, setUserData }}
    >
      {children}
    </userDataContext.Provider>
  );
}
