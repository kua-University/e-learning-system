const users = [];

const userService = {
  createUser: async (data) => {
    users.push(data);
    return { message: "User created", data };
  },

  getUserByEmail: async (email) => {
    return users.find(u => u.email === email);
  }
};

module.exports = userService;