import { useContext } from "react";
import UserContext from "../contexts/user.context";

export const User = () => {
  const { username, setUsername } = useContext(UserContext);
  return (
    <div>
      <h2> User Page </h2>
      <label> change username : </label>
      <input type="text" onChange={(e) => setUsername(e.target.value)} />
      <p> Current username is : {username} </p>
    </div>
  );
};
