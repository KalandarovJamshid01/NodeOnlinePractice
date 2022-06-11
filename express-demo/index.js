const Joi = require("joi");

const express = require("express");
const app = express();
app.use(express.json());
const books = [
  {
    id: 1,
    name: "Jamshid",
  },
  { id: 2, name: "Farkhod" },
];
app.get("/api/books", (req, res) => {
  res.send(books);
});

app.post("/api/books", (req, res) => {
  if (!req.body.name) {
    res.status(400).send("Name is required");
    return;
  }
  if (req.body.name.length < 3) {
    res.status(400).send("name should be at least 3 characters");
  }
  const book = { id: books.length + 1, name: req.body.name };
  books.push(book);
  res.status(201).send(book);
});

app.get("/api/books/:id", (req, res) => {
  const book = books.find((b) => {
    return b.id === +req.params.id;
  });

  if (book) {
    res.send(book);
  } else {
    res.status(404).send("PAge not found");
  }
});

app.put("/api/books/:id", (req, res) => {
  const book = books.find((b) => {
    return b.id === +req.params.id;
  });
  if (!book) {
    return res.status(404).send("Page not found");
  }
  book.name = req.body.name;
  res.send(book);
});

app.delete("/api/books/:id", (req, res) => {
  const book = books.find((b) => {
    return b.id === +req.params.id;
  });
  if (!book) {
    return res.status(404).send("Page not found");
  }
  const bookINdex = books.indexOf(book);
  books.splice(bookINdex, 1);
  res.send(book);
});

console.log(process.env.NODE_ENV);
console.log(app.get("env"));

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`${port}ni ewitdim`);
});
