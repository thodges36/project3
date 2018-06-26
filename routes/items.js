var express = require("express");
var router = express.Router();
var item = require("../models/items");

var multer = require("multer");

var storage = multer.diskStorage({
    filename: function(req, file, callback) {
        callback(null, Date.not() + file.originalname);
    }
});

var imageFilter = function (req, file, callback) {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/i)) {
        return callback(new Error("Upload Image Files Only!"), false);
    }
    callback(null, true);
};

var upload = multer({
    storage: storage,
    fileFilter: imageFilter
})

//database goes here or cloudinary


router.get("/", function (req, res) {
    item.find({}, function(err, allitems) {
        if(err) {
            console.log(err)
        } else {
            res.render("items/index", {
                items: allitems
            })
        }
        item.find({}, function (err, allitems) {
            if(err) {
                console.log(err);
            } else {
                // function (error, res, body) {
                //     if (!error && response.statusCode == 200) {
                //         console.log(body);
                        res.render("items/index", {
                            items: allitems 
                        });
                    }
                }
            // }
        // });
    )
}
