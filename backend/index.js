const express = require("express");
const app = express();
const mongoose = require('mongoose');
const cors = require("cors");

const PORT = process.env.PORT || 3001
const HOSTNAME = process.env.HOST || '127.0.0.1'

//middlewares
app.use(express.urlencoded({ extended: true }))
app.use(express.json({ extended: true }));
app.use(cors()); //TODO - Mudar para que nao permita requisicoes de todos os servidores

// Routes
require("./routers/index")(app);
require("./routers/user")(app);

// mongo --host sigteste.sti.ufpb.br --port 5556 -u csiadmin -p 'c$!s3cret' --authenticationDatabase 'admin'
mongoose.connect(
  "mongodb://csiadmin:c$!s3cret@sigteste.sti.ufpb.br:5556/admin", {
    useNewUrlParser: true
  }
);
var db = mongoose.connection;
db.on("error", (a, b) => console.error("connection error:", a, b));
db.once("open", function() {
  console.log("we're connected!");
  app.listen(PORT, HOSTNAME, () => {
    console.log(`Server on ${HOSTNAME}:${PORT}`);
  });
});