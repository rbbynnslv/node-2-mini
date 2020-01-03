let books = [];
let id = 0;

function read(req, res) {
  res.status(200).send(books);
}

function create(req, res) {
  const { title, author } = req.body;

  let book = {
    id,
    title,
    author
  };
  books.push(book);
  id++;

  res.status(200).send(books);
}

function update(req, res) {
  const bookToUpdate = books.find(book => Number(req.params.id) === book.id);
  if (bookToUpdate) {
    const { title, author } = req.body;

    Object.assign(bookToUpdate, {
      ...(title && { title }),
      ...(author && { author })
    });
    return res.status(200).send(books);
  }
  return res.status(404).send({ error: "Could not find specified book." });
}

function remove(req, res) {
  const bookIndex = books.findIndex(book => Number(req.params.id) === book.id);
  if (bookIndex > -1) {
    books.splice(bookIndex, 1);
    return res.status(200).send(books);
  }

  return res.status(404).send({ error: "Could not find specified book." });
}

module.exports = {
  read,
  create,
  update,
  remove
};