var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = [
    "italy",
    "france",
    "canada",
    "turkey",
    "japan",
    "greece",
];
console.log(places, "Original array");
var sortPlaces = __spreadArray([], places, true);
console.log(sortPlaces.sort(), "show the sorted list");
console.log(places, "show the original");
console.log(places.reverse(), "reverse the order");
console.log(places.reverse(), "reverse again");
console.log(places.sort(), "sorted");
console.log(places.sort().reverse(), "sorted reverse order");
