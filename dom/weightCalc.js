//Create variables to host the data given by the user using prompts
var userWeight = parseInt(prompt("How much do you weight?"));
var userPlanet = parseInt(prompt("Choose the Planet you want:\n1.Earth\n2.Mars\n3.Jupiter\n4.Mercury\n5.Venus\n6.Saturn\n7.Neptune\n8.Uranus\n9.Pluto"));
//Create variables corresponding to the G of each planet
var earthG = 9.8;
var marsG = 3.7;
var jupiterG = 24.8;
var mercuryG = 3.7;
var venusG = 8.9;
var saturnG = 10.4;
var neptuneG = 11.2;
var uranusG = 8.9;
var plutoG = 0.6;
//Create a variable to set the name of the planet after the calculation with the conditional ELSE IF
var planetName;
//Create a series of conditionals to calculate the weight based on the planet chosen
if (userPlanet == 1) {
    //If 1 is chosen, it corresponds to Earth, thus calculations takes no place
    finalWeight = userWeight;
    //Change the name of planet to allow it to work with its corresponding ELSE IF
    planetName = ("Earth");
} else if (userPlanet == 2) {
    //If any number from 2 up to 9 is chosen, the "Rule of 3" applies to the formula
    finalWeight = userWeight * marsG / earthG;
    planetName = ("Mars");
} else if (userPlanet == 3) {
    finalWeight = userWeight * jupiterG / earthG;
    planetName = ("Jupiter");
} else if (userPlanet == 4) {
    finalWeight = userWeight * mercuryG / earthG;
    planetName = ("Mercury");
} else if (userPlanet == 5) {
    finalWeight = userWeight * venusG / earthG;
    planetName = ("Venus");
} else if (userPlanet == 6) {
    finalWeight = userWeight * saturnG / earthG;
    planetName = ("Saturn");
} else if (userPlanet == 7) {
    finalWeight = userWeight * neptuneG / earthG;
    planetName = ("Neptune");
} else if (userPlanet == 8) {
    finalWeight = userWeight * uranusG / earthG;
    planetName = ("Uranus");
} else if (userPlanet == 9) {
    finalWeight = userWeight * plutoG / earthG;
    planetName = ("Pluto");
    //Close the conditionals with the last ELSE
} else {
    //If the user's number correspond to any number outside the 1to9 scope, invalid alert pops up
    alert("Invalid information, Kryptonian");
}
//Create a variable to convert the final float into an integer
finalWeight = parseInt(finalWeight);
//Print the result of the final value on the website
document.write("Your weight on ", planetName, " corresponds to a value of <b>", finalWeight, " Kg.</b>");