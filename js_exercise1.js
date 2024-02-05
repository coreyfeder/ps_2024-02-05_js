// Instructions: Follow the prompts and make sure to check your answer in the console. Some of the methods I am requiring of you to use, we may not have done in class. That's on purpose, if you need assistance look back  in lessons, and of course Google. :) 

// =================================================
//                     VARIABLES
// =================================================

// 1.) Declare a variable
let myVariable = "initial value";
console.log(myVariable);

// 2.) Change the value of this variable
myVariable = "a new value";
console.log(myVariable);

// 3.) Change the data type of this variable
myVariable = 5;
console.log(myVariable);

// 4.) Create another variable and the one from above to concatenate
let myConcatenation = "Let's hit the gym at " + myVariable;
console.log(myConcatenation);

// 5.) Use any of the variables above or create new ones and print using string interpolation
console.log(`The concatenated value we created is "${myConcatenation}"`);


// ================ Variable Names =================
/* 
    • Case-sentive! Try it out! :O
    • Can contain letters, digits, or the symbols $ and _
    • Can't start with 0-9
    • Can't use reserved keywords in JS such as var, function, return, etc. 
*/

// =================================================
//                      STRINGS
// =================================================

let myResult;
let myInterimStep;

// Look up the following string methods!

// Using charAt(), print the letter i in Susmita
let susmita = "Susmita";
myResult = susmita.charAt(4);
console.log(myResult);

// Define Unicode in a comment, and get the Unicode using charCodeAt() of the third character in Ciera
// Unicode is a standard for encoding and representing characters and text for all of the world's currently-known written languages and major symbolic systems.
let ciera = "Ciera";
let thirdLetterAsUnicode = ciera.charCodeAt(2);
console.log(thirdLetterAsUnicode);

// Using fromCharCode() - make it readable for us :). You'll see!
let backToAscii = String.fromCharCode(thirdLetterAsUnicode);
console.log(backToAscii);

// or just...
myResult = String.fromCharCode(ciera.charCodeAt(2));
console.log(myResult);

// Take your first and last name and concat()
let myFirstName = "Corey";
let myLastName = "Feder";
let myName = myFirstName.concat(" ").concat(myLastName);
console.log(myName);
let alsoMyName = "".concat(myFirstName, " ", myLastName);
console.log(alsoMyName);

// Create a string and make it return true using startsWith()
let whatAreMyLetters = "This Is How The World Ends";
myResult = whatAreMyLetters.startsWith("T");
console.log(myResult);

// Now use any variable with endsWith() and return false
myResult = whatAreMyLetters.endsWith("ends");
console.log(myResult);

// Finish the following sentence. Use includes() and return true.
let maireg = 'Once upon a time Maireg looked up at the Moon, '
myResult=maireg.includes("Moon");
console.log(myResult);

// Help! I'm looking for my cow! Using indexOf() help Manny find his cow. What's the index of cow?
let mannyHadALittleLambOopsCow = "Manny lives in a farm. Manny was overwhelmed with coding. Manny is stressed out. Manny fed the chickens this morning and watered his plants. He took his cow Betsy on a walk. Manny went home without Betsy. Manny went to bed that night, and realized he left Betsy."
myResult=mannyHadALittleLambOopsCow.indexOf("cow");
console.log(myResult);

// Oh no! The alien doppelgangers are here. Let's use our laserbeam lastIndexOf() to shoot down the last alien Ty in the String Universe.

let ty = "I am the Alpha Ty. I am the Omega Ty. We do not come in peace."
myResult=ty.lastIndexOf("Ty");
console.log(myResult);

// Can we use length for strings? I don't know, you tell me.
let noWeCantTeo = "but did you try it out though?"
myResult = noWeCantTeo.length >= 0
console.log(myResult);

// If only it was this easy to replace() my ex. LOL. JK
let replaceGokuWithVegeta = "For my DBZ fans, we all know Goku is the best!"
myResult = replaceGokuWithVegeta.replace("Goku", "Vegeta")
console.log(myResult);

// Randi has been forgetful lately. Let's help Randi by using search(), and find their iPhone.

let randiIsLookingForiPhone = "iphone 1, iPhone 2, IPHONE 3, ifone 4";
myResult = randiIsLookingForiPhone.search("iPhone");
console.log(myResult);

// I guess we can share this pizza sentence. Use slice() to return "other half of pizza".
let pizzaSentence = "pizza, other half of pizza";
myInterimStep = pizzaSentence.indexOf("other");
myResult = pizzaSentence.slice(myInterimStep);
console.log(myResult);

// Now using the pizza sentence, return only pizza (before the comma)
myResult = pizzaSentence.substring(0, "pizza".length);
console.log(myResult);

// Okay, but who decided to go to this expensive restaurant? Brittany, Andrew, and Rockelle decided to split() the bill. Return an array separating Brittany, Andrew, and Rockelle.
let splitTheBill = "Brittany Andrew Rockelle";
myResult = splitTheBill.split(" ");
console.log(myResult);

// OH NO! The alien invaders from earlier were so against bill splitting so they decided to split() Brittany, Andrew, and Rockelle into pieces. Using splitTheBill, return an array separating all three by single characters. "B, r, i, ..."
myResult = splitTheBill.split(" ");
console.log(myResult);

// Michael was angry today. Create a string with words that Michael would yell out. Now lowercase it, to tell Micahel to chill out. 
// Use this toLowerCase()
let angry = "LOWER YOUR VOICE DOWN IF YOU AIN'T PAYING MY BILLS.";
let chill = angry.toLowerCase();
console.log(myResult);
console.log("Inside voice, Michael.");

// toUpperCase()
let coreySaidToPutSomeRespectToHisName = "corey feder";
myResult = coreySaidToPutSomeRespectToHisName.toUpperCase();
console.log(myResult);
console.log("NOT GOOD ENOUGH.");
myResult = "That's _PROFESSOR_ ".concat(coreySaidToPutSomeRespectToHisName, ", thank you!");
console.log(myResult);

// substring()
// on the chopping block...
let targetSubstring;
let targetBegins;
let targetEnds;

// Returns "ell"
let basicGreeting = "Hello World";
targetSubstring = "ell";
targetBegins = basicGreeting.indexOf(targetSubstring)
targetEnds = targetBegins + targetSubstring.length;
myResult = basicGreeting.substring(targetBegins, targetEnds);
console.log(myResult);

// Returns "JavaScript"
let ohReally = "JavaScript Substring";
console.log(ohReally.substring(0,"JavaScript".length));

// Returns aol.com
let aslDays = "xXteoWuzHereXx@aol.com"
console.log(aslDays.split("@")[1])

// trim()
// If only I can use this for my love handles...
// Create a variable with a string value with some extra loving on both sides.
let theFat = "  __the meat__  \n  "
console.log(theFat.trim())

// =================================================
//                     BOOLEAN
// =================================================

// I just want my dreams to come true. 
// With the powers of logical and comparison operators, PRINT TRUE please!
// Replace the underscores.

const a = 5;
const b = 10;
const c = 15;
const d = "Suresh"

console.log(a < b)
console.log(c > b)
console.log(d === d)
console.log(d != a)
console.log(a <= 15)
console.log(a + b == c)
console.log(c != b == a != d)
console.log((c < b) == (a > d))
