import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.listen(5000, () => {
  console.log(`Server is running on port: 5000`);
});


// const cors = require("cors");
// const app = express();
// const port = process.env.PORT || 5000;

// const { MongoClient, ServerApiVersion } = require("mongodb");
// const uri = `${process.env.MONGO}`;

// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });
// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log(
//       "Pinged your deployment. You successfully connected to MongoDB!"
//     );
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

//middleware
// app.use(cors());
// app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Server is running");
// });
// app.get("/test", (req, res) => {
//     res.send("this is test site");
//   });

// app.listen(port, () => {
//   console.log(`Server is running on port: ${port}`);
// });
