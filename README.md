

Step 0: initial setup (ironlauncher)


Step 1: create seed file



Step 2: (READ) display a list with all books in the DB

- [x] Create a route (GET `/books`)
- [x] Make a request to the DB --> Book.find()
- [x] Create a view (and pass the data from the database)


Step 3: (READ) book details page

- [x] Update `books-list.hbs` (add link to each book)

- [x] Create a route (GET `/books/:bookId`)
- [x] Make a request to the DB to get the details of book with id `bookId` --> Book.findById()
- [x] Create view (`book-details.hbs`)



Step 4: (CREATE) functionality to create new books

- Step 4.a: display a form to create new books
  - [x] add link in the homepage
  - [x] Create a route (GET `/books/create`)
  - [x] Create a view (`book-create.hbs`)

- Step 4.b: receive the information from the form and save in DB
  - [x] Create a route (POST `/books/create`)
  - [x] Make a request to the DB to save the new book --> Book.create()
  - [x] After book is created, we will redirect to `/books` (we don't need to create an additional view)


