const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/fruitsDB');

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please check your data entry, no name specified.']
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  rating: 10,
  review: "Peaches are so good"
});

// fruit.save();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema
})

const Person = new  mongoose.model("Person", personSchema);

const pineapple = new Fruit({
  name: "Pineapple",
  score: 9,
  review: "Great fruit."
});

const mango = new Fruit({
  name: "Mango",
  score: 6,
  review: "Decent fruit."
});

mango.save();

Person.updateOne({name: "John"}, {favoriteFruit: mango}, function(err){
  if(err){
    console.log(err);
  } else {
    console.log("Successfully updated the document");
  }
});

// const person = new Person({
//   name: "Amy",
//   age: 12,
//   favoriteFruit: pineapple
// });

// person.save();

const kiwi = new Fruit({
  name: "Kiwi",
  score: 10,
  review: "the best fruit"
});

const orange = new Fruit({
  name: "orange",
  score: 10,
  review: "too sour for me"
});

const banana = new Fruit({
  name: "banana",
  score: 10,
  review: "weird texture"
});

// Fruit.insertMany([kiwi, orange, banana], function(err){
//   if(err){
//     console.log(err);
//   }else {
//     console.log("successfully saved all fruits to fruits DB");
//   }
// });


Fruit.find(function(err, fruits){
  if(err){
    console.log(err);
  } else {

    mongoose.connection.close();
    
    fruits.forEach(function(fruit){
      console.log(fruit.name);
    });
  }
});

// Fruit.updateOne({_id: "63f4fd067aad94e0ed099fce"}, {name: "Peach"}, function(err){
//   if (err){
//     console.log(err);
//   } else {
//     console.log("Successfully updated the document.");
//   }
// });

// Fruit.deleteOne({name: "Peach"}, function(err){
//   if (err){
//     console.log(err);
//   } else {
//     console.log("Successfully deleted the document.");
//   }
// });

// Person.deleteMany({name: "John"}, function(err){
//   if (err){
//         console.log(err);
//       } else {
//         console.log("Successfully deleted the document.");
//       }
// });

// Fruit.deleteMany({}, function(err){
//     if (err){
//         console.log(err);
//       } else {
//         console.log("Successfully deleted the document.");
//       }
// })