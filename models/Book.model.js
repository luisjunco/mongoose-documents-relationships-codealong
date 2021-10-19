const { Schema, model } = require('mongoose');


const authorSchema = new Schema(
  {
    name: String,
    surname: String,
    country: String
  }
);

const bookSchema = new Schema(
  {
    title: String,
    description: String,
    author: authorSchema,
    rating: Number
  },
  {
    timestamps: true
  }
);

module.exports = model('Book', bookSchema);
