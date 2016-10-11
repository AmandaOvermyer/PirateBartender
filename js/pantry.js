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

module.exports = Pantry;