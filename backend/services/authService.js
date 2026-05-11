const jwt = require("jsonwebtoken");

const users = [];

const authService = {
  register: async (data) => {
    users.push(data);
    return { message: "User registered", user: data };
  },

  login: async ({ email, password }) => {
    const user = users.find(u => u.email === email);

    if (!user) {
      return { message: "User not found" };
    }

    const token = jwt.sign(user, "secret_key");

    return {
      message: "Login successful",
      token,
      user
    };
  }
};

module.exports = authService;