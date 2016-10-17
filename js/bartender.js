import Drink from './Drink';

class Bartender{
	constructor (questions){
		this.questions = questions;
		this.currentQuestion = 0;
	}
	askQuestion(){
	//return this.questions[0];
		return this.questions[this.currentQuestion];

	}

	makeDrink(userPreferences, pantry){
		let ingredients = [];
		for (let i = 0; i < userPreferences.categories.length; i++) {
			const randomNumber = Math.floor(Math.random() * 4);
			const category = userPreferences.categories[i];
			ingredients.push(pantry.getRandomIngredient(category));
			
			
		}
		return new Drink(ingredients);
		
	}


	nextQuestion() {
		this.currentQuestion++;
	}

	nameDrink() {
		const randomNumber = Math.floor(Math.random() * drinkName1.length);
		return drinkName1[randomNumber] + " " + drinkName2[randomNumber];
	}

	reset(){
		this.currentQuestion = 0;
	}
}



const drinkName1 = [
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
const drinkName2 = [
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

export default Bartender;
