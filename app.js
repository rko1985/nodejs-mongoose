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

fruit.save();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number
})

const Person = new  mongoose.model("Person", personSchema);

const person = new Person({
  name: "John",
  age: 37
});

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