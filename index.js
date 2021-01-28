const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");

const resolvers = require('./graphql/resolvers')
const typeDefs = require('./graphql/typeDefs');
const { MONGODB } = require("./config");


const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose
  .connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("mongodb connected");
    return server.listen({ port: 5000 });
  })
  .then((res) => {
    console.log(`Server runinng at ${res.url}`);
  });