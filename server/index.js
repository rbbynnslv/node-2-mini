const express = require("express");

const app = express();

app.use(express.json());
app.use(express.static(__dirname + "/../build"));

const b = require("./controller/booksController.js");

const PORT = 1800;

app.get("/api/books", b.read);
app.post("/api/books", b.create);
app.put("/api/books/:id", b.update);
app.delete("/api/books/:id", b.remove);

app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`);
});
