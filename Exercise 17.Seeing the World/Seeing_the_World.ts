const places: Array<string> = [
  "italy",
  "france",
  "canada",
  "turkey",
  "japan",
  "greece",
];
console.log(places, "Original array");

const sortPlaces: Array<string> = [...places];

console.log(sortPlaces.sort(), "show the sorted list");

console.log(places, "show the original");

console.log(places.reverse(), "reverse the order");
console.log(places.reverse(), "reverse again");
console.log(places.sort(), "sorted");
console.log(places.sort().reverse(), "sorted reverse order");
