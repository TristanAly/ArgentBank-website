import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h1>This is the home page!</h1>
      <Link to="/login">Click to view our login page</Link>
    </div>
  );
};
