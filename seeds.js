var mongoose = require("mongoose")
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "CampCool",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOIepQYjGfAeDVa0jDol-fPIpXKJO_byOojSzyoE1ql1Hr7sFiHA",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
    },
     {
        name: "Camp Apollo Boy",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4qwxLOKj-WRUwMH9nC-ZFbDizFEA-S6GhQkympCrJUe9kijhG",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
    },
     {
        name: "CAMP NCEEEE",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXm7z26XKnx6m9oov0Q7pvmFNb67K0fPcnoxKYldibGlzAdGhw",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
    }
    
]



function seedDB(){
    //remove campgrounds
        Campground.remove({}, function(err){
//            if(err){
                console.log(err);
//            }else{
//                console.log("removed campground");
    });
}

//add new campgrounds
 //   data.forEach(function(seed){
//        Campground.create(seed, function(err, campground){
//            if(err){
//                console.log(err)
//            }else{
//                console.log("added a campground");
//            //create a comment
//                Comment.create(
//                    {
//                        text: "This place is great wish I had Wifi",
//                        author: "Homer"
//                    }, function(err, comment){
//                        if (err){
//                            console.log(err)
//                        }else{
//                        campground.comments.push(comment);
//                        campground.save();
//                        console.log("created new comment");
//                        }
//                    });
//            }
//        });
//    });
//}



module.exports = seedDB;