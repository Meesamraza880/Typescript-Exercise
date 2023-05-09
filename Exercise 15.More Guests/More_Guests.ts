const More_Guests: Array<string> = ["Kashif", "Ahsan", "Hamad"];

More_Guests.unshift("kashan");
More_Guests.splice(2, 0, "Sajjad");
More_Guests.push("taseen");

for (const Changes_Guest_List_value of More_Guests) {
  console.log(
    `${Changes_Guest_List_value}, \n "I warmly invite you to the dinner to be held at my home from 9 pm on this Sunday. I would like to await your presence at the dinner hopefully you must accept my dinner invitation."\n`
  );
}

console.log(`Dear friends,

I am excited to inform you all that I have found a bigger dinner table! This means that we can now comfortably host all of our guests for our upcoming dinner party without having to worry about space constraints.`);
