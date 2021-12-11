const bcryptjs = require("bcryptjs");
const User = require("../models/user");

const resolvers = {
  Query: {
    // User
    getUser: () => {
      console.log("Obteniendo usuario");
      return null;
    },
  },

  Mutation: {
    // User
    register: async (_, { input }) => {
      const newUser = input;
      newUser.email = newUser.email.toLowerCase();
      newUser.username = newUser.username.toLowerCase();

      const { email, username, password } = newUser;

      // Check email
      const foundEmail = await User.findOne({ email });
      if (foundEmail) throw new Error("Email already in use");

      // Check username
      const foundUserName = await User.findOne({ username });
      if (foundUserName) throw new Error("Username already in use");

      // Encrypt
      const salt = await bcryptjs.genSaltSync(10);
      newUser.password = await bcryptjs.hash(password, salt);

      try {
        const user = new User(newUser);
        user.save();
        return user;
      } catch {
        console.log(error);
      }
    },
  },
};

module.exports = resolvers;
