const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/fruitsDB');

const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name: "Apple",
  rating: 7,
  review: "Pretty solid as a fruit."
});

// fruit.save();

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
  name: "Kiwi",
  score: 10,
  review: "too sour for me"
});

const banana = new Fruit({
  name: "Kiwi",
  score: 10,
  review: "weird texture"
});

Fruit.insertMany([kiwi, orange, banana], function(err){
  if(err){
    console.log(err);
  }else {
    console.log("successfully saved all fruits to fruits DB");
  }
});