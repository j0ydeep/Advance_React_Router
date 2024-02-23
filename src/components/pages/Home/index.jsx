import React from "react";

import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      Home component
      <button onClick={() => navigate("/login")}>Login</button>
      <button onClick={() => navigate("/about")}>About</button>
      <button onClick={() => navigate("/signup")}>Sign Up</button>
    </div>
  );
};

export default Home;
