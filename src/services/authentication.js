import axios from "axios";
const authBaseUrl = "http://localhost:3001";

//Register
const registerUser = async (userData) => {
  try {
    const res = await axios.post(`${authBaseUrl}/users`, userData, {
      headers: { "Content-Type": "application/json" },
    });
    return res.data;
  } catch (error) {
    console.error("Error during registration:", error.response?.data || error);
    throw error.response?.data || error;
  }
};

//LoginLogin
const loginUser = async (userData) => {
  try {
    const res = await axios.get(`${authBaseUrl}/users`);
    //Quét dữ liệu trong db.json
    const user = res.data.find(
      (user) =>
        user.email === userData.email && user.password === userData.password
    );
    if (!user) {
      return { success: false, message: "Invalid email or password" };
    }
    return { success: true, message: "Login successful", user };
  } catch (error) {
    console.error("Error during login:", error.response?.data || error);
    throw error.response?.data || error;
  }
};

export { registerUser, loginUser };
