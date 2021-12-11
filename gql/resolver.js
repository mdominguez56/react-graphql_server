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
    register: (_, { input }) => {
      console.log("Registrando usuarios");
      return null;
    },
  },
};

module.exports = resolvers;
