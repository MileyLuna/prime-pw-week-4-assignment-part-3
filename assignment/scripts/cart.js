console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

console.log( '--Adding items--');

let basket =[];

function addItem(itemOne, itemTwo){
    basket.push('fries','ketchup');
    return true;
}

console.log('First confirmation:', addItem('fries','ketchup'));
console.log(`Items in basket: ${basket}`);
console.log('Number of items:', basket.length);


console.log( '--Loop & logging--');

function listItems(){
    for (let i=0; i < basket.length; i++) {
        console.log(basket[i])
    }
}

listItems();
//console.log('Items on list:', listItems());



console.log( '--Empty Array--');

function empty(){
    return basket.length = 0;
}
console.log(empty());
console.log('Number of items now are:', basket.length);


