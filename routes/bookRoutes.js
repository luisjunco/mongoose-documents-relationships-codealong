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


router.get('/books/create', (req, res, next) => {
    res.render("books/book-create");
});


router.get("/books/:bookId", (req, res, next) => {
    Book.findById(req.params.bookId)
        .then( (bookFromDB) => {
            res.render("books/book-details", bookFromDB);
        })
        .catch( (error) => {
            console.log("Error getting details for a single book from DB", error);
            next(error);
        });
});


module.exports = router;