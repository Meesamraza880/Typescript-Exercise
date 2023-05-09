const Dinner_Guests: string[] = ["Kashif", "Ahsan", "Hamad"];

for (const Dinner_Guests_value of Dinner_Guests) {
  console.log(
    `${Dinner_Guests_value}, \n "I warmly invite you to the dinner to be held at my home from 9 pm on this Sunday. I would like to await your presence at the dinner hopefully you must accept my dinner invitation."`
  );
}

const numGuests: number = Dinner_Guests.length;

console.log(`You are inviting ${numGuests} people to dinner.`);
