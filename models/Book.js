const mongoose = require("mongoose");
const Joi = require("joi");

const Bookschema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
            minlength: 3,
            maxlength: 200,
        },
        author: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Author",
        },
        description: {
            type: String,
            required: true,
            trim: true,
        },
        price: { type: Number, required: true, min: 0 },

    },
    { timeStamps: true }
);

//Book model
const Book = mongoose.model("Book", Bookschema);

// Validate create book
function validateBook(obj) {
    const schema = Joi.object({
        title: Joi.string().trim().min(3).max(200).required(),
        author: Joi.string().required(),
        description: Joi.string().trim().min(5).required(),
        price: Joi.number().min(0).required(),

    });

    return schema.validate(obj);
}
// validate Update book
function validateUpdateBook(obj) {
    const schema = Joi.object({
        title: Joi.string().trim().min(3).max(200),
        author: Joi.string(),
        description: Joi.string().trim().min(5),
        price: Joi.number().min(0),
    });

    return schema.validate(obj);
}

// export Book;
module.exports = {
    Book,
    validateBook,
    validateUpdateBook
}; 
