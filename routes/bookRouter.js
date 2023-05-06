const express = require("express");
const bookModel = require("../models/bookModel");
const bookRouter = express.Router();

bookRouter.get("/:id", async (req, res, next) => {
  try {
    const book = await bookModel.findById(req.params.id);

    res.status(200).send(book);
  } catch (error) {
    res.status(500).send(error);
  }
});

bookRouter.post("/", async (req, res, next) => {
  try {
    const book = new bookModel(req.body);

    await book.save();

    res.status(200).send({ success: true, book });
  } catch (error) {
    res.status(500).send(error);
  }
});

bookRouter.patch("/:id", async (req, res, next) => {
  try {
    const book = await bookModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.status(204).send({ success: true, msg: "Book Updated", book });
  } catch (error) {
    res.status(500).send(error);
  }
});

bookRouter.delete("/:id", async (req, res, next) => {
  try {
    const book = await bookModel.findByIdAndDelete(id);

    if (book) {
      res.status(202).send({ success: true, msg: "Book deleted" });
    } else {
      res.status(404).send({ success: true, msg: "Book not found" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

bookRouter.get("/", async (req, res, next) => {
  const { category, author } = req.query;
  try {
    if (category) {
      const book = await bookModel.find({ category: category });
      res.status(200).send(book);
    } else if (author) {
      const book = await bookModel.find({ author: author });
      res.status(200).send(book);
    } else if (category && author) {
      const book = await bookModel.find({ author: author, category: category });
      res.status(200).send(book);
    } else {
      const books = await bookModel.find();
      res.status(200).send(books);
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = bookRouter;
