var express = require("express"),
    router  = express.Router(),
    Campground = require("../models/campground"),
    middleware = require("../middleware/index.js");


//main page
router.get("/", function(req,res){
    req.user;
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log(err);
        }else{ res.render("campgrounds/Index", {campgrounds: allCampgrounds, currentUser: req.user});
         }
    });
});



//create new campground
router.post("/", function(req,res){
  var name= req.body.name;
   var image= req.body.image;
   var price= req.body.price;
   var desc = req.body.description;
   var author = {
       id: req.user._id,
       username: req.user.username
   };
   var newCampground = {name: name, price: price, image: image, description: desc, author: author};
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log(err);
        }else{
            res.redirect("/campgrounds");
        }
    });
});

//show form to create new campground
router.get("/new", middleware.isLoggedIn, function(req, res) {
    res.render("campgrounds/new");
    
});


//show page
router.get("/:id", function(req, res){
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if(err){
            console.log(err);
        }else{
            console.log("found campground")
            res.render("campgrounds/show", {campground: foundCampground});
        }
    });
});


//EDIT ROUTE
router.get("/:id/edit",middleware.checkCampgroundOwnership, function(req, res){
        Campground.findById(req.params.id, function(err, foundCampground){
                    res.render("campgrounds/edit", {campground: foundCampground});
                    
        });
});
        





// UPDATE ROUTE
router.put("/:id",middleware.checkCampgroundOwnership, function(req, res){
    //find and update correct campground
    Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err){
        if(err){
            res.redirect("/campgrounds")
        }else{
            res.redirect("/campgrounds/" + req.params.id);
        }
    });
});

//DESTROY ROUTE

router.delete("/:id", middleware.checkCampgroundOwnership,  function(req, res){
    Campground.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect("/campgrounds")
        }else{
            res.redirect("/campgrounds")
        }
    });
});


module.exports = router;