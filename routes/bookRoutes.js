const router = require("express").Router();
const Book = require("../models/Book.model");

router.get("/books", (req, res, next) => {
    Book.find()
        .then( (booksFromDB) => {
            const data = {
                booksArr: booksFromDB
            }
            res.render("books/books-list", data);
        })
        .catch( (error) => {
            console.log("Error getting list of books from DB", error);
            next(error);
        });
});


module.exports = router;