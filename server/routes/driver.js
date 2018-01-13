var express = require("express");
var router = express.Router();

var mongojs = require("mongojs");
var db = mongojs("mongodb://localhost:27017/Taxi", ["drivers"]);


//Get Single Driver
router.get("/driver/:id", function (req, res, next) {
    db.drivers.findOne({ _id: mongojs.ObjectId(req.params.id) }, function (err, driver) {

        if (err) {
            res.send(err);
        } else if (driver) {
            res.send(driver);
        } else {
            res.json({ status: 200, message: "No driver found" })
        }
    });
});

//post 


/*
//add driver
router.get("/driver", function (req, res, next) {
    var data = {
        firstName: "Jack",
        lastName: "Dom",
        dob: "06/03/1990",
        profilePic: "http://profilepicturesdp.com/wp-content/uploads/2017/02/DP-for-Whatsapp-profile-images-34.jpg",
        rating: 5,
        address: {
            addressLine1: "Hampankatta",
            addressLine2: "Mangalore",
            city: "Mangalore",
            zipCode: "575001"
        },
        vehicle: {
            bodyType: "Sedan",
            model: "Proton",
            plateNumber: "KA 19 N 7887",
            color: "white"
        }
    }

    db.drivers.save(data, function (err, savedBooking) {
        if (err) {
            res.send(err);
        }
        // console.log("Socket Id ", nearByDriver.socketId)
        res.json(savedBooking);
    });
    /* var data = {
         firstName: "Jack",
         lastName: "Dom",
         dob: "06/03/1990",
         profilePic: "http://profilepicturesdp.com/wp-content/uploads/2017/02/DP-for-Whatsapp-profile-images-34.jpg",
         rating: 5,
         address: {
             addressLine1: "Hampankatta",
             addressLine2: "Mangalore",
             city: "Mangalore",
             zipCode: "575001"
         },
         vehicle: {
             bodyType: "Sedan",
             model: "Proton",
             plateNumber: "KA 19 N 7887",
             color: "white"
         }
     }
     new Driver(data).save()
     // show.save()
     res.send(data)*/
// })


module.exports = router;