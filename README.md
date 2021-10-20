
# Mongoose Document Relationships (Codealong)

Exercise to practice document relationships in Mongoose and MongoDB.



## Iterations

Iteration 0: Update DB name


Iteration 1: Embedded Documents
- Update Book Model (single embedded document)
- Update seed File


Iteration 2: References
- Update Book Model (single reference to 'Author')
- Create Author Model
- Update seed File


Iteration 3: Create book, allowing users to choose from a list of authors

- We need to update the form to display a list with all posible authors:
  - Update the route that displays the form (GET `/books/create`)
  - Make a query to the DB (`Author.find`) + send that information to the view
  - Update the view (`book-create.hbs`)

- Process form:
  - Since we're now receiving the author id, it will just work ;)


Iteration 4: display the correct information of the author
- We use `.populate('author')` (where 'author' is the name of the property we need to populate)
