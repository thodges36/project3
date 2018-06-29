const mongoose = require("mongoose");
const db = require("../models");
const Item = require("../models/items");
mongoose.Promise = global.Promise;

// // This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/rental_central");

// Here's the rental items

const itemSeed = [{
        category: "Lawn & Garden",
        image: "https://www.homedepot.com/tool-truck-rental/assets/img/Makita/336x336/Makita-16-in.-Gas-chainsaw-image-lg.jpg",
        item: "16 inch Gas-powered Makita Chainsaw",
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
        category: "Home Cleaning",
        item: "RugDoctor Pro Carpet Cleaner",
        image: "https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/fetch/Enterprise/Tool_and_Truck_Rental/Floorcare_Rental/carpet-cleaner-.jpg",
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
        category: "Electronics",
        item: "RugDoctor Pro Carpet Cleaner",
        image: "https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/fetch/Enterprise/Tool_and_Truck_Rental/Floorcare_Rental/carpet-cleaner-.jpg",
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
        category: "Transportation",
        image: "https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/fetch/Enterprise/Tool_and_Truck_Rental/Large_Equipment_Rental/Boom-Lift-JLG-T500.jpg",
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


// function seedDB(){
// db.Item
//   Item.remove({})
//   .then(() => db.Item.collection.insertMany(itemSeed))
//   .then(data => {
//     console.log(data.insertedIds.length + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });
// };

function seedDB(){
  //Remove all items
  Item.remove({}, function(err){
       if(err){
           console.log(err);
       }
       console.log("removed items!");
        //add a few items
        itemSeed.forEach(function(seed){
           Item.create(seed, function(err, item){
               if(err){
                   console.log(err)
               } 
              //  else {
              //      console.log("added a item");
              //      //create a comment
              //      Comment.create(
              //          {
              //              text: "This place is great, but I wish there was internet",
              //              author: "Homer"
              //          }, function(err, comment){
              //              if(err){
              //                  console.log(err);
              //              } else {
              //                  item.comments.push(comment);
              //                  item.save();
              //                  console.log("Created new comment");
              //              }
              //          });
              //  }
           });
       });
   }); 
   //add a few comments
}


module.exports = seedDB;

// function seedDB(){
//   //Remove all items
//   Item.remove({}, function(err){
//        if(err){
//            console.log(err);
//        }
//        console.log("removed items!");
//         //add a few items
//         itemSeed.forEach(function(seed){
//            Item.create(seed, function(err, item){
//                if(err){
//                    console.log(err)
//                } else {
//                    console.log("added a item");
//                    //create a comment
//                    Comment.create(
//                        {
//                            text: "This place is great, but I wish there was internet",
//                            author: "Homer"
//                        }, function(err, comment){
//                            if(err){
//                                console.log(err);
//                            } else {
//                                item.comments.push(comment);
//                                item.save();
//                                console.log("Created new comment");
//                            }
//                        });
//                }
//            });
//        });
//    }); 
//    //add a few comments
//  }
