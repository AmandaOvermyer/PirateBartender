function UserPreferences(){
	this.categories = [];
}

UserPreferences.prototype.addCategory = function(category){
	this.categories.push(category);
}

module.exports = UserPreferences;