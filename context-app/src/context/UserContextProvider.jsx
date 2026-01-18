// import { useState } from "react";
import UserContext from "../context/UserContext";

function UserContextProvider({value, children }) {
  // const [user, setUser] = useState(null);
  return (
    // <UserContext.Provider value={{ user, setUser }}>
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
