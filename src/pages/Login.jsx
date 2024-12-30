// import React, { useState } from "react";
// import { loginUser } from "../services/authentication";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate=useNavigate()
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!email || !password) {
//       setError("Please fill all the fields");
//       return;
//     }
//     try {
//       const userData = { email, password };
//       const response = await loginUser(userData);
//       if (response.success) {
//         alert("Login successful!");
//         navigate("/");
//       } else {
//         setError(response.message);
//       }
//     } catch (error) {
//         console.log(error);
        
//     //   setError("An error occurred. Please try again later.");
//     }
//   };
//   return (
//     <div>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;
