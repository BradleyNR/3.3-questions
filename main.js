
var array = [];

for (var i = 0; i < items.length; i++) {
  var prices = items[i].price;
  array.push(prices)
}

var totalCost = array.reduce(function(total, item){
  return total + item;
})

var average = totalCost / array.length;
console.log("The average price is " + (Math.round(average *100)/100));

//--------------------------------------------------------------------------------
// TODO: ask dan why this doesn't work. Why does filer return an object instead of the property

// var arrayTwo = [];
//
// for (var j = 0; j < array.length; j++) {
//   var priceTwo = items[j].price;
//   var title = items[j].title;
//   if (14 < priceTwo && priceTwo < 18) {
//     arrayTwo.push(title);
//   }
// }
//
// console.log(arrayTwo);
var newArray = [];

items.forEach(function(item){
  if (item.price > 14 && item.price < 18) {
    return newArray.push(item.title);
  }
})

console.log("Titles: ", newArray);


//--------------------------------------------------------------------------------


var gbpArray = [];

items.filter(function(item){
  if (item.currency_code == 'GBP'){
    return gbpArray.push(`${item.title} $ ${item.price}`);
  }
})

console.log(gbpArray);

//--------------------------------------------------------------------------------

var woodArray = [];

items.filter(function(item){
  if (item.materials.includes('wood')){
    return woodArray.push(item.title + ' is made of wood');
  }
})

console.log(woodArray);

//--------------------------------------------------------------------------------

var eightArray = [];

items.filter(function(item){
  if (item.materials.length > 7){
    return eightArray.push(item.title);
  }
})

console.log(eightArray);

//--------------------------------------------------------------------------------

var whoArray = [];

items.filter(function(item){
  if (item.who_made == 'i_did'){
    return whoArray.push(item.who_made);
  }
})

console.log(whoArray.length, 'were made by their sellers');
