// import React, { useState } from "react";

// import { useDispatch, useSelector } from "react-redux";

// import { useNavigate } from "react-router-dom";

// import { loginFunction } from "../../../reduxStore/reducers/authentication/action";

// const index = () => {
//   const dispatch = useDispatch();

//   const navigate = useNavigate();

//   const { loading, errorMsg, user } = useSelector((res) => res.auth);

//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = function (e) {
//     const { name, value } = e.target;

//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     dispatch(loginFunction({ formData, navigate }));
//   };

//   return (
//     <div>
//       <h1>Login</h1>

//       <form action="#" onSubmit={handleSubmit}>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//         />
//         <input
//           type="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//         />

//         <button
//           style={{ padding: "1rem", fontSize: "1rem" }}
//           type="submit"
//           disabled={loading}
//         >
//           {loading ? "...Loading" : "Log In"}
//         </button>
//       </form>

//       <p> {errorMsg ? errorMsg : ""} </p>

//       <button onClick={navigate("/")}>
//         Home
//       </button>

//       <button onClick={navigate("/about")}>
//         About
//       </button>

//       <button onClick={navigate('/signup')}>
//         Sign Up
//       </button>
//     </div>
//   );
// };

// export default index;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginFunction } from "../../../reduxStore/reducers/authentication/action";

const Index = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, errorMsg, user } = useSelector((res) => res.auth);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = function (e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginFunction({ formData, navigate }));
  };

  return (
    <div>
      <h1>Login</h1>
      <form action="#" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button
          style={{ padding: "1rem", fontSize: "1rem" }}
          type="submit"
          disabled={loading}
        >
          {loading ? "...Loading" : "Log In"}
        </button>
      </form>
      <p>{errorMsg ? errorMsg : ""}</p>
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/about")}>About</button>
      <button onClick={() => navigate("/signup")}>Sign Up</button>
    </div>
  );
};

export default Index;
