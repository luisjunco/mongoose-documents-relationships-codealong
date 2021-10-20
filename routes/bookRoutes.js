const router = require("express").Router();
const Book = require("../models/Book.model");
const Author = require("../models/Author.model");



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
    Author.find()
        .then( (allAuthors) => {
            res.render("books/book-create", { authorsArr: allAuthors } );
        })
        .catch( (error) => {
            console.log("Error getting Authors from DB", error);
            next(error);
        });
});


router.post("/books/create", (req, res, next) => {

    /* OPTION 1 */

    // const bookTitle = req.body.title;
    // const bookAuthor = req.body.author;
    // const bookDescription = req.body.description;
    // const bookRating = req.body.rating;

    // const data = {
    //     title: bookTitle,
    //     description: bookDescription,
    //     author: bookAuthor,
    //     rating: bookRating
    // }

    // Book.create(data)
    //     .then()
    //     .catch();


    /* OPTION 2 */
    
    const {title, author, description, rating} = req.body;
    Book.create({title, author, description, rating})
        .then( () => {
            res.redirect("/books");
        })
        .catch( (error) => {
            console.log("Error adding new book to DB", error);
            next(error);
        });

})


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



router.get('/books/:bookId/edit', (req, res, next) => {
    Book.findById(req.params.bookId)
        .then( (bookFromDB) => {
            res.render("books/book-edit", bookFromDB);
        })
        .catch( (error) => {
            console.log("Error getting details for a single book from DB to render edit form", error);
            next(error);
        });
});


router.post('/books/:bookId/edit', (req, res, next) => {

    const {title, author, description, rating} = req.body;
    const newDetails = {
        title,
        author,
        description,
        rating
    };

    Book.findByIdAndUpdate(req.params.bookId, newDetails, {new: true})
        .then( (bookFromDB) => {
            res.redirect('/books/' + bookFromDB._id);
        })
        .catch( (error) => {
            console.log("Error updating book details", error);
            next(error);
        });
});


router.post('/books/:bookId/delete', (req, res, next) => {
   Book.findByIdAndDelete(req.params.bookId)
    .then( () => {
        res.redirect('/books');
    })
    .catch( (error) => {
        console.log("Error deleting book from DB", error);
        next(error);
    });
});


module.exports = router;