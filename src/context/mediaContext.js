import { createContext, useState } from "react";
import { data } from "../Pages/database";

export const mediaContext = createContext();

export const MediaProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState(data); // Renamed 'data' state to 'userData'
  // const [updatedData, setUpdatedData] = useState([]);

  console.log(username, password);

  return (
    <mediaContext.Provider
      value={{ data: userData, username, setUsername, password, setPassword }}
    >
      {children}
    </mediaContext.Provider>
  );
};
