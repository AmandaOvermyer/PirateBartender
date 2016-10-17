class Pantry{
	constructor (ingredients){
		this.ingredients = ingredients;
	}
	getRandomIngredient(category){
		let match = [];
		for (let i = 0; i < this.ingredients.length; i++){
			if (this.ingredients[i].category === category){
				match.push(this.ingredients[i]);
			}
		} 
		const randomNumber = Math.floor(Math.random() * match.length);
		return match[randomNumber].name;
	}
}


export default Pantry;
