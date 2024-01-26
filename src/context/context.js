import { createContext } from "react";
import { useState } from "react";
export const FirebaseContext = createContext(null);
export const AuthContext = createContext(null);
const Context = ({ children }) => {
  let [user, setUser] = useState(null);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
export default Context;
