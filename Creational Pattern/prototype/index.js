var scout_prototype = require('./scout_prototype');

var suwi = scout_prototype.clone();
alex.name = 'Suwi';
alex.addItemToList('slingshot');

var puja = scout_prototype.clone();
puja.name = 'Puja';
puja.addItemToList('reading light');

console.log(`${ suwi.name }: ${ suwi.shoppingList }`);
console.log(`${ puja.name }: ${ puja.shoppingList }`);
