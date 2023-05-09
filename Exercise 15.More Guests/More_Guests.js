var More_Guests = ["Kashif", "Ahsan", "Hamad"];
More_Guests.unshift("kashan");
More_Guests.splice(2, 0, "Sajjad");
More_Guests.push("taseen");
for (var _i = 0, More_Guests_1 = More_Guests; _i < More_Guests_1.length; _i++) {
    var Changes_Guest_List_value = More_Guests_1[_i];
    console.log("".concat(Changes_Guest_List_value, ", \n \"I warmly invite you to the dinner to be held at my home from 9 pm on this Sunday. I would like to await your presence at the dinner hopefully you must accept my dinner invitation.\"\n"));
}
console.log("Dear friends,\n\nI am excited to inform you all that I have found a bigger dinner table! This means that we can now comfortably host all of our guests for our upcoming dinner party without having to worry about space constraints.");
