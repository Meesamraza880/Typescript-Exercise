var person_cases = "John smith";
console.log(person_cases.toLowerCase());
console.log(person_cases.toUpperCase());
function titlcase(name) {
    var titlcaseString = "";
    var strloop;
    var strSplit = name.split(" ");
    for (var _i = 0, strSplit_1 = strSplit; _i < strSplit_1.length; _i++) {
        var strloop = strSplit_1[_i];
        var substrvalue = strloop.charAt(0).toUpperCase();
        titlcaseString += substrvalue + strloop.slice(1);
        titlcaseString += " ";
    }
    return titlcaseString.trim();
}
console.log(titlcase(person_cases));
