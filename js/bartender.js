var Drink = require('./Drink');

function Bartender(questions){
	this.questions = questions;
	this.currentQuestion = 0;
}

Bartender.prototype.askQuestion = function(){
	//return this.questions[0];
	return this.questions[this.currentQuestion];

}

Bartender.prototype.makeDrink = function(userPreferences, pantry){
	var ingredients = [];
	for (var i = 0; i < userPreferences.categories.length; i++) {
		randomNumber = Math.floor(Math.random() * 4);
		var category = userPreferences.categories[i];
		ingredients.push(pantry.getRandomIngredient(category));
		
		
	}
	return new Drink(ingredients);
	
}


Bartender.prototype.nextQuestion = function() {
	this.currentQuestion++;
}

Bartender.prototype.nameDrink = function() {
	randomNumber = Math.floor(Math.random() * drinkName1.length);
	return drinkName1[randomNumber] + " " + drinkName2[randomNumber];
}

Bartender.prototype.reset = function(){
	this.currentQuestion = 0;
}

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

module.exports = Bartender;