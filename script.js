console.log("hello script js");

//shortcut
var input = document.getElementById("input");
//empty Variables
var userName = "Harry";

//Array
var horcrux = ["Tom Riddle's Diary", "Marvolo Gaunt's Ring", "Salazar Slytherin's Locket", "Helga Hufflepuff's Cup", "Rowena Ravenclaw's Diadem", "Nagini, the Snake", "Harry Potter"];

var horcruxLeft = horcrux;

//count Variables
var count = 0;


//reset Text Box's value after user input.
var inputReset = function() {
    input.value = "";
};

var resetPH = function() {
    input.placeholder  = "";
};

//default setting
var contPH = function () {
    input.placeholder = "enter 1 to continue";
};

var riddleOne = `Solve the riddle.
            \n What kind of room has no doors or windows?
            \n _ _ _ _ _ _ _ _ (8 letters)`;

var riddleTwo = `Solve the riddle.
            \n I'm light as a feather, yet the strongest man can't hold me for more than 5 minutes. What am I?
            \n _ _ _ _ _ (5 letters, starts with a "b")`;

//game start

contPH();
var inputHappened = function(currentInput){
    if (parseInt(currentInput) === 1 && count === 0) {
        contPH();
        count++;
        console.log("Input Start: " +count);
        inputReset();
        input.placeholder = "fang or sword"
        return `Hello ${userName}. Pick a weapon. \u000A Basilisk's Fang or Gryffindor's Sword?\n
        fang or sword`;
    } else if (currentInput.toLowerCase() === "fang" && count === 1) {
        count++;
        console.log("Input fang: " +count);
        inputReset();
        input.placeholder = "A or B";
        return `Pick a letter: \n
        A or B`;
    } else if (currentInput.toLowerCase() === "a" && count === 2 ) {
        count++
        console.log("Input A: " +count);
        inputReset();
        input.placeholder = "glass or key";
        return `You have entered the Chamber of Secret? \u000A Pick an item from the room:
            \n glass or key`;
    } else if (currentInput.toLowerCase() === "glass" && count === 3) {
        count++
        console.log("Input glass: " +count);
        inputReset();
        input.placeholder = "Y or I";
        return `A secret word is at the bottom of the glass: \u000A What letter is missing?
            \n "Gr_ffindor"
            \n Y or I`;
    } else if (currentInput.toLowerCase() === "y" && count === 4) {
        count++
        console.log("Input Y: " +count);
        inputReset();
        horcruxLeft.splice(horcruxLeft.indexOf("Tom Riddle's Diary"),1);
        input.placeholder = "yes or no";
        return `You found one item: Tom Riddle's diary. \u000A You destroyed it with the Basilisk's Fang.
            \n ${horcruxLeft.length} more horcruxes to go. \u000A Continue to other Quest?
            \n Yes or No
            \n (Warning: entering "No" will reset the game.)
            \n ${horcruxLeft.join(" \n ")}`;
    } else if (currentInput.toLowerCase() === "yes" && count === 5) {
        count++
        console.log("Input Yes: " +count);
        inputReset();
        input.placeholder = "sword or fang";
        return `Pick a weapon. \u000A Gryffindor's Sword or Basilisk's Fang`;
    } else if (currentInput.toLowerCase() === "fang" && count === 6) {
        count++
        console.log("Input fang: " +count);
        inputReset();
        input.placeholder = "B or C";
        return "Pick a letter: B or C";
    } else if (currentInput.toLowerCase() === "b" && (count === 2 || count === 7)) {
        count++;
        console.log("Input b: " +count);
        inputReset();
        input.placeholder = "left or right";
        return `You are walking down the corridor. \u000A At the end of the corridor, there are two doors. \u000A Which door will you want to go in?
            \n left or right door`;
    } else if (currentInput.toLowerCase() === "right" && count === 8) {
        count++;
        console.log("Input right: " + count);
        inputReset();
        input.placeholder = "Y or I";
        return `Hermione and Ron are in the room solving a missing letter to get to the Chamber of Secret. \u000A You might be able to help her.
            \n F_endFyre.
            \n Y or I`
    } else if (currentInput.toLowerCase() === "i" && count === 9) {
        count++;
        console.log("Input right: " + count);
        inputReset();
        input.placeholder = "Hermione or Ron";
        return `The door to the Chamber of Secrets opened. \u000A One of you have to stay in the room to keep the door open. Who do you choose to bring with you?
            \n Hermione or Ron`
    } else if (currentInput.toLowerCase() === "hermione" && count === 10) {
        count++;
        console.log("Input Hermione: " + count);
        inputReset();
        horcruxLeft.splice(horcruxLeft.indexOf("Helga Hufflepuff's Cup"),1);
        input.placeholder = "";
        return `You found the Helga Hufflepuff's cup. Hermione destroyed it with the Basilisk's Fang. \u000A ${horcruxLeft.length} more horcruxes to go. \u000A Continue to other Quest?
            \n Yes or No
            \n ${horcruxLeft.join(" \n ")}`
    } else if (currentInput.toLowerCase() === "yes" && count === 11) {
        count++;
        console.log("Input Yes: " +count);
        inputReset();
        input.placeholder = "sword or book";
        return `Pick a weapon. \u000A Gryffindor's Sword or Book of Spells`;
    } else if (currentInput.toLowerCase() === "sword" && (count === 1 || count === 6 || count === 12)) {
        count++;
        console.log("Input sword: " +count);
        inputReset();
        input.placeholder = "Hint: starts with m and ends with m"
        return `As you picked up the sword, the Headmaster's office door opened. Albus Dumbledore walked out with Marvolo Gaunt's Ring. To destroy it, you will need to solve the riddle.
        \n ${riddleOne}`;
    } else if ((count === 2 || count === 7 || count === 13) && currentInput.toLowerCase() !== "mushroom") {
        inputReset();
        return `Nope. Please try again.
        \n ${riddleOne}`;
    } else if (currentInput.toLowerCase() === "mushroom" && (count === 2 || count === 7 || count === 13)) {
        count++;
        inputReset();
        horcruxLeft.splice(horcruxLeft.indexOf("Marvolo Gaunt's Ring"),1);
        input.placeholder = 'hint: Begins with "b"';
        return `Marvolo Gaunt's Ring has been destroyed. A voice leads you to the Forest of Dean. There, you met Ron who was wearing the Salazar Slytherin's locket. He wouldn't let you have it without answering the riddle.
        \n ${riddleTwo}`;
    } else if ((count === 3 || count === 8 || count === 14) && currentInput.toLowerCase() !== "breath") {
        inputReset();
        return `Nope. Please try again.
        \n ${riddleTwo}`;
    } else if (currentInput.toLowerCase() === "breath" && (count === 3 || count === 8 || count === 14)) {
        count++;
        inputReset();
        horcruxLeft.splice(horcruxLeft.indexOf("Salazar Slytherin's Locket"),1);
        input.placeholder = 'Hermione or Neville'
        return `Salazar Slytherin's Locket has been destroyed. Before this, who have you sent to guard Hogwarts.
            \n Hermione Granger or Neville Longbottom`;
    } else if (currentInput.toLowerCase() === "neville" && (count === 4 || count === 9 || count === 15)) {
        count++;
        inputReset();
        horcruxLeft.splice(horcruxLeft.indexOf("Nagini, the Snake"),1);
        input.placeholder = "";
        return `Nagini, the Snake, has been killed by Neville Longbottom.`;
    } else if (currentInput.toLowerCase() === "no") {
        count = 0;
        inputReset();
        contPH();
        horcruxLeft = horcrux;
        return "Game Reset. Please enter 1 to continue.";
    } else {
        console.log(count);
        inputReset();
        return "Please enter a valid choice.";
    };
    console.log("outside " + count);
};

/*
 else if () {

    }
*/