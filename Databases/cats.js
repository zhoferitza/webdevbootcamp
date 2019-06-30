var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
    name: String, 
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

// var george = new Cat({
//     name: "Mrs. Norris", 
//     age: 7, 
//     temperament: "Evil"
// });

// george.save(function(err, cat){
//  if(err){
//      console.log("Something Went Wrong")
//  } else {
//      console.log("WE Just SAve a Cat to the DB:")
//      console.log(cat);
//  }   
// });

Cat.create({
   name: "Snow White",
   age: 15,
   temperament: "Bland"
   
}, function(err, cat){
    if(err){
        console.log(err);
    } else { 
        console.log(cat);
    }    
});

Cat.find({}, function(err, cat){
    if(err){
        console.log("OH, NO, ERROR!!!")
        console.log(err);
    } else{
        console.log("All the Cats.....")
        console.log(cat);
    }
});

