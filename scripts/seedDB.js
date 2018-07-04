const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist",
  {
    useMongoClient: true
  }
);

const bookSeed = [
  {
    title: "Makita Chainsaw",
    category: "Lawn & Garden",
    author: "John Smith",
    synopsis: "Gas-powered 16 inch chainsaw. Perfect from trimming limbs and clearing brush. I'll provide the product manual.",
    image: "https://www.homedepot.com/tool-truck-rental/assets/img/Makita/336x336/Makita-16-in.-Gas-chainsaw-image-lg.jpg",
    location: "Overland Park, KS",
    price: "100",
    date: new Date(Date.now())
  },
  {
    title: "Backpack Leaf Blower",
    category: "Lawn & Garden",
    author: "Will Goldman",
    synopsis: "Lightly used backpack leaf blower made by Makita. Gas powered.",
    image: "https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/fetch/Enterprise/Tool_and_Truck_Rental/Lawn_Garden_Rental/blowers-.jpg",
    location: "Blue Springs, MO",
    price: "20",
    date: new Date(Date.now())
  },
  {
    title: "Harbinger Audio System",
    category: "Electronics",
    author: "J.D. Cooper",
    synopsis: "Simple solution for anyone needing a portable and affordable sound system for smaller performances, presentations and rehearsals.",
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRVbypATm8Ya0hYOMdR9mfDbcMzHqnmu1Licb7PizXcnmC1V13ZdH2mpxp9qpaT8Y4cnvWk-GkVNg3khRiOPe2k5riexeYb0ZpiE-khlG2E&usqp=CAY",
    location: "Kansas City, MO",
    price: "150",
    date: new Date(Date.now())
  },
  {
    title: "Casio DLP Projector",
    category: "Electroncis",
    author: "Sally Cline",
    synopsis: "Perfect for presentations or movies. Need USB or HDMI connection.",
    image: "https://images.flexshopper.xyz/385x385/product-beta-images/bfa1c7e3-ace4-4999-9d89-3dcb3c5f9967.jpg",
    location: "Kansas City, KS",
    price: "75",
    date: new Date(Date.now())
  },
  {
    title: "Rug Doctor Carpet Cleaner",
    category: "Home Cleaning",
    author: "J.B. Wilkinson",
    synopsis:
      "Regular deep carpet cleanings are essential to keep your house free of dirt, dust, allergens and other irritants that resist vacuuming.",
    image: "https://www.homedepot.com/tool-truck-rental/assets/img/Rug-Doctor/336x336/FS-CC-RC-CarpetCleaner-large-1-a.jpg",
    location: "Independence, MO",
    price: "30",
    date: new Date(Date.now())
  },
  {
    title: "Tile & Grout Steam Cleaner",
    category: "Home Cleaning",
    author: "Neal Saiman",
    synopsis:
      "Restore your tile and grout back to its original color. This chemical-free steamer uses high pressure heat and water to release dirt and mildew trapped in porous floor surfaces.",
    image: "https://www.homedepot.com/tool-truck-rental/Tile-Grout-Steam-Cleaner/13070/Tile-and-Grout-steam-Cleaner_marketing-concept.jpeg",
    location: "Fairway, KS",
    price: "100",
    date: new Date(Date.now())
  },
  {
    title: "Sit-on Kayak",
    category: "Recreation",
    author: "Sandie Petzold",
    synopsis:
      "Bundle includes 1 free Life Jacket and 1 free paddle.",
    image: "http://content.academy.com/aurora/category/2018/outdoors/watersports/KayakBundle.jpg?is=500.500",
    location: "Shawnee, KS",
    price: "15",
    date: new Date(Date.now())
  },
  {
    title: "Inflatable Pool",
    category: "Recreation",
    author: "Brad Stone",
    synopsis: "Have fun in the sun with this inflatable family pool. Fits 8 people.",
    image: "https://images.homedepot-static.com/productImages/46a7338a-3999-4864-861a-ffa3bc455a60/svn/blue-bestway-above-ground-pools-57269e-64_1000.jpg",
    location: "Smithville, MO",
    price: "50",
    date: new Date(Date.now())
  },
  {
    title: "Magliner Appliance Dolly",
    category: "Transportation",
    author: "Al Sampson",
    synopsis: "Ideal for transporting large appliances and furniture safely. Easily moves heavy loads up and down stairs and curbs. 800 lb. loading capacity.",
    image: "https://images.homedepot-static.com/productImages/83d8fdee-902c-430b-b4f6-11ca05393ad2/svn/magliner-dollies-gmk16ua4-64_1000.jpg",
    location: "Grain Valley, MO",
    price: "60",
    date: new Date(Date.now())
  },
  {
    title: "3x5 ft Trailer",
    category: "Transportation",
    author: "Ashlee Vance",
    synopsis:
      "Open-side design features tubular railing to easily secure load.",
    image: "https://www.homedepot.com/tool-truck-rental/assets/img/Ohio/336x336/LM-OhioSteel-TrailerLawnGarden-large-2-a.jpg",
    location: "Stilwell, KS",
    price: "50",
    date: new Date(Date.now())
  }

];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
