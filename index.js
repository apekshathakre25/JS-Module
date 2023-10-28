const foodData = require("./food.json");
console.log(foodData);

//problem No.1
const foodItems = foodData.map((food) => {
  return food.foodname;
});
console.log(foodItems);

//problem no. 2
const vegetables = foodData.filter((item) => {
  return item.category === "Vegetable";
});
console.log(vegetables);

//problem no. 3
const fruit = foodData.filter((item1) => {
  return item1.category === "Fruit";
});
console.log(fruit);

//problem no. 4
const protein = foodData.filter((item2) => {
  return item2.category === "Protein";
});
console.log(protein);

//problem no. 5
const nuts = foodData.filter((item3) => {
  return item3.category === "Nuts";
});
console.log(nuts);

//problem no. 6
const grain = foodData.filter((item4) => {
  return item4.category === "Grain";
});
console.log(grain);

//problem no. 7
const dairy = foodData.filter((item5) => {
  return item5.category === "Dairy";
});
console.log(dairy);

//problem no. 8

const calorie = foodData.filter((item6) => {
  return item6.calorie >= 100;
});
console.log(calorie)

//problem no. 9
const highCalorie = foodData.filter((item6) => {
  return item6.calorie >= 100;
});
console.log(highCalorie)

//problem no. 10
const lowCalorie = foodData.filter((item7) => {
  return item7.calorie <= 100;
});
console.log(lowCalorie)

//problem no. 11
const sortProtein1 = foodData.sort((high, low) => {
  return (low.protiens - high.protiens);
});
console.log(sortProtein1);

//problem no. 12
const sortProtein2 = foodData.sort((high, low) => {
  return (high.protiens - low.protiens);
});
console.log(sortProtein2);














