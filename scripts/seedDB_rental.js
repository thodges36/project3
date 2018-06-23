// const mongoose = require("mongoose");
// const db = require("../models");
// mongoose.Promise = global.Promise;

// // This file empties the Books collection and inserts the books below

// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist",
//   {
//     useMongoClient: true
//   }
// );

// Here's the rental items

const bookSeed = [{
        category: "Outdoor Tools",
        type: "Chainsaws",
        item: "16 inch gas-powered Makita chainsaw",
        price: "20", // Dollars per hour
        // User info
        first_name: "John",
        last_name: "Smith",
        address_1: "12600 S Quivira Rd",
        address_2: "",
        city: "Overland Park",
        state: "KS",
        zip: "66213",
        email: "john.smith@gmail.com",
        phone: "913-555-5555"
    },

    {
        category: "Indoor Tools",
        type: "Carpet Cleaners",
        item: "RugDoctor Pro",
        price: "30", // Dollars per hour
        // User info
        first_name: "Joe",
        last_name: "Jones",
        address_1: "12850 S Quivira Rd",
        address_2: "",
        city: "Overland Park",
        state: "KS",
        zip: "66213",
        email: "joe.jones@gmail.com",
        phone: "913-555-5556"
    },

    {
        category: "Large Equipment",
        type: "Aerial Equipment",
        item: "Boom Lift by Compact Power",
        price: "150", // Dollars per hour
        // User info
        first_name: "Jane",
        last_name: "Doe",
        address_1: "12011 W 127th St",
        address_2: "",
        city: "Overland Park",
        state: "KS",
        zip: "66213",
        email: "jane.doe@gmail.com",
        phone: "913-555-5557"
    }

];

// db.Book
//   .remove({})
//   .then(() => db.Book.collection.insertMany(bookSeed))
//   .then(data => {
//     console.log(data.insertedIds.length + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });