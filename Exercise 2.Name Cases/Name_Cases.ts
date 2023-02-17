const person_cases: string = "John smith";

console.log(person_cases.toLowerCase());
console.log(person_cases.toUpperCase());

function titlcase(name:string):string | undefined {
    var titlcaseString:string = "";
    var strloop:string; 
    const strSplit:string[] = name.split(" ");

        for (var strloop of strSplit) {
            const substrvalue:string = strloop.charAt(0).toUpperCase();
            titlcaseString += substrvalue+strloop.slice(1);
            titlcaseString+=" ";
        }

return titlcaseString.trim();
}

console.log(titlcase(person_cases));







