import express from "express";
import cors from "cors";
import http from "http";
import { graphqlHTTP } from "express-graphql";
import { stitchSchemas } from "@graphql-tools/stitch";
import schema from "./graph-config/typeDefs";

let app = express();
let server = http.createServer(app);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  "/",
  graphqlHTTP({
    schema: stitchSchemas({
      subschemas: [{ schema }],
    }),
    graphiql: false,
  })
);

server.listen(3000);
