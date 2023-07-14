import { useContext } from "react";
import UserContext from "../contexts/user.context";

export const Home = () => {
  const { username } = useContext(UserContext);
  return (
    <div>
      <h2> Home Page </h2>
      <p> Hello {username} </p>
    </div>
  );
};
