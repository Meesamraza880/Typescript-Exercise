const Shrinking_Guests: Array<string> = ["Kashif", "Ahsan", "Hamad"];

Shrinking_Guests.unshift("kashan");
Shrinking_Guests.splice(2, 0, "Sajjad");
Shrinking_Guests.push("taseen");

console.log(Shrinking_Guests);

for (let index = 0; index < Shrinking_Guests.length; index++) {
  if (index <= 1) {
    console.log(
      `${Shrinking_Guests[index]}, \n "I warmly invite you to the dinner to be held at my home from 9 pm on this Sunday. I would like to await your presence at the dinner hopefully you must accept my dinner invitation."\n`
    );
  }

  if (index > 1) {
    console.log(
      `${Shrinking_Guests[index]}, \n "I hope this message finds you well. I am writing to apologize for not being able to invite you to the dinner party that I mentioned earlier. Unfortunately, due to limited space, we had to keep the guest list small."\n`
    );
  }
  if (index == Shrinking_Guests.length - 1) {
    Shrinking_Guests.length = 0;
  }
}

console.log(Shrinking_Guests);
