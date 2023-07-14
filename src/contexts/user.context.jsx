import React, { createContext, useState } from "react";
const UserContext = createContext();
export default UserContext;

export const UserContextProvider = (props) => {
  const [username, setUsername] = useState("bob89");
  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {props.children}
    </UserContext.Provider>
  );
};
