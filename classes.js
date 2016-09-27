function Ingredient(name, category){
  this.name = name;
  this.category = category;
}  

function UserPreferences(){
  this.categories = [];
}
UserPreferences.prototype.addCategory = function(category){
  this.categories.push(category);
}

function Pantry(ingredients){
  this.ingredients = ingredients;
}

Pantry.prototype.getRandomIngredient = function(category){
  var match = [];
  for (var i = 0; i < this.ingredients.length; i++){
    if (this.ingredients[i].category === category){
      match.push(this.ingredients[i]);
    }
  } 
  randomNumber = Math.floor(Math.random() * match.length);
  return match[randomNumber].name;
}

function KitchenWorker(questions) {
  this.questions = questions;
  this.currentQuestion = 0;
}

KitchenWorker.prototype.askQuestion = function(){
  return this.questions[this.currentQuestion];
}

KitchenWorker.prototype.nextQuestion = function() {
  this.currentQuestion++;
}

KitchenWorker.prototype.nextQuestion = function() {
  this.currentQuestion++;
}

KitchenWorker.prototype.prepare = function(userPreferences, pantry){
  var ingredients = [];
  for (var i = 0; i < userPreferences.categories.length; i++) {
    randomNumber = Math.floor(Math.random() * 4);
    var category = userPreferences.categories[i];
    ingredients.push(pantry.getRandomIngredient(category));
  }
  return new Drink(ingredients);
}


function Bartender(questions){
  this.questions = questions;
  this.currentQuestion = 0;
}

Bartender.prototype = Object.create(KitchenWorker.prototype);
Bartender.prototype.constructor = Bartender;

Bartender.prototype.nameDrink = function() {
  var drinkName1 = [
    'Crazy',
    'Fluffy',
    'Good',
    'Loose',
    'Loud',
    'Smooth',
    'Solid',
    'Frumpy',
    'Perfect',
    'Shaggy',
    'Fuzzy',
    'Tough',
    'Tricky',
    'Tasty',
    'Tiny'
  ];
  var drinkName2 = [
    'Bunny',
    'Glitter',
    'Cookie',
    'Toejam',
    'Monkey',
    'Snow',
    'Whip',
    'Rain',
    'Cupcake',
    'Britches',
    'Trump',
    'Pickle',
    'Ninja',
    'Cougar',
    'Butter'
  ];
  randomNumber = Math.floor(Math.random() * drinkName1.length);
  return drinkName1[randomNumber] + " " + drinkName2[randomNumber];
}

function BurgerChef(questions){
  this.questions = questions;
  this.currentQuestion = 0;
}

BurgerChef.prototype = Object.create(KitchenWorker.prototype);
BurgerChef.prototype.constructor = BurgerChef;


function Drink(ingredients){
  this.ingredients = ingredients;
}

function Question(qText, category){
  this.question = qText;
  this.category = category;
}

var pantry = new Pantry([
  new Ingredient("Glug of rum","strong"),
  new Ingredient("Slug of Whiskey", "strong"),
  new Ingredient("splash of gin", "strong"),
  new Ingredient("salt-dusted rim", "salty"),
  new Ingredient("Olive on a stick", "salty"),
  new Ingredient("rasher of bacon", "salty"),
  new Ingredient("shake of bitters", "bitter"),
  new Ingredient("splash of tonic", "bitter"),
  new Ingredient("twist of lemon peel", "bitter"),
  new Ingredient("sugar cube", "sweet"),
  new Ingredient("spoonful of honey", "sweet"),
  new Ingredient("splash of cola", "sweet"),
  new Ingredient("slice of orange", "fruity"),
  new Ingredient("dash of cassis", "fruity"),
  new Ingredient("cherry on top", "fruity"),
  new Ingredient("Chicken", "meat"),
  new Ingredient("Beans protein", "vegetarian"),
  new Ingredient("Tomato", "veggies"),
  new Ingredient("Ketchup", "condiments"),
])

var bartender = new Bartender([
  new Question("Salty?", 'salty'),
  new Question("Do ye like yer drinks strong?", 'strong'),
  new Question("Are ye a lubber who likes it bitter?", 'bitter'),
  new Question("Would ye like a bit of sweetness with yer poison?", 'sweet'),
  new Question("Are ye one for a fruity finish?", 'fruity')
]);

var chef = new BurgerChef([
  new Question("Meat?", 'meat'),
  new Question("Vegetarian?", 'vegetarian'),
  new Question("Veggies?", 'veggies'),
  new Question("Condiments", 'condiments'),
]);


var drinkPreferences = new UserPreferences();
var burgerPreferences = new UserPreferences();
var userPreference = drinkPreferences;
var worker = bartender;
var q = worker.askQuestion();
$('.new-drink').hide();
showQuestion(q);

var preparingBurger = false;


$('.answers').on('click', 'input[name=answer]', function(){
  if ($(this).val() == "yes"){
    userPreference.addCategory(q.category);
  }
  worker.nextQuestion();
  q = worker.askQuestion();
  $('input[name=answer]').prop('checked', false);
  if (q) {
    showQuestion(q);
  } else {
    if(preparingBurger) {
      var drink = bartender.prepare(drinkPreferences, pantry);
      var drinkname = bartender.nameDrink();
      showDrink(drink, drinkname);
      var burger = chef.prepare(burgerPreferences, pantry);
      showBurger(burger, "Pirate Burger");
      $('.questions').hide();
      $('.answers').hide();
      $('.new-drink').show();
    } else {
      preparingBurger = true;
      worker = chef;
      userPreference = burgerPreferences;
      q = worker.askQuestion();
      showQuestion(q);
    }
    /*
    var drink = bartender.prepare(userPreference, pantry);
    var drinkname = bartender.nameDrink();
    showDrink(drink, drinkname);
    $('.questions').hide();
    $('.answers').hide();
    $('.new-drink').show();
     */
  }
})

$('.new-drink').on('click', function(){
  $('.drink').html(" ");
  bartender.reset();
  userPreference = new UserPreferences();
  q = bartender.askQuestion();
  showQuestion(q);
  $('.questions').show();
  $('.answers').show();
  $('.new-drink').hide();
})

function showQuestion(q){
  $('.questions').text(q.question);
}
function showDrink(drink, name){
  $('.drink').append('<p class="detail"> Enjoy this drink called: ' + name + '</p>');
  $('.drink').append('<p> It is made with: </p>');
  for (var i = 0; i < drink.ingredients.length; i++){
    $('.drink').append("<p>" + drink.ingredients[i] + "</p>");
  }
}

function showBurger(burger, name){
  console.log("sssss");
  $('.drink').append('<p class="detail"> Enjoy your burger called: ' + name + '</p>');
  $('.drink').append('<p> It is made with: </p>');
  for (var i = 0; i < burger.ingredients.length; i++){
    $('.drink').append("<p>" + burger.ingredients[i] + "</p>");
  }
}
