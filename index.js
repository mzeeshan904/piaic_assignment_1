//  Question # 2
// Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
var myName = "zeeshan";
var message = "Hello ".concat(myName, ", would you like to learn some Python today?");
console.log(message);
//  Question # 3
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var lowercaseName = myName.toLowerCase();
console.log("Lowercase name: " + lowercaseName);
var uppercaseName = myName.toUpperCase();
console.log("Uppercase name: " + uppercaseName);
var words = myName.split(" ");
var titlecaseName = "";
for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
    var word = words_1[_i];
    titlecaseName +=
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() + " ";
}
console.log("Title case name: " + titlecaseName.trim());
//  Question # 4
// Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”
var quote = "I have not failed. I've just found 10,000 ways that won't work.";
var author = "Thomas Edison";
console.log(author + ' once said, "' + quote + '"');
//  Question # 5
// Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
// Storing the famous person's name in a variable
var famous_person = "Albert Einstein";
// Composing the message
var famous_person_message = "In the middle of every difficulty lies opportunity. - ".concat(famous_person);
// Printing the message
console.log(famous_person_message);
//  Question # 6
// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
var person_name = "   John Doe  \n\t";
console.log(person_name);
console.log(person_name.trim());
//  Question # 7
// Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
console.log(5 + 3);
console.log(10 - 2);
console.log(2 * 4);
console.log(16 / 2);
//  Question # 9
// Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
var favoriteNumber = 42;
console.log("My favorite number is ".concat(favoriteNumber, "."));
//  Question # 10
// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
// Program 1: Prints "Hello, World!"
console.log("Hello, World!");
// Program 2: Adds two numbers and prints the result
var num1 = 5;
var num2 = 3;
var sum = num1 + num2;
console.log("The sum of ".concat(num1, " and ").concat(num2, " is ").concat(sum, "."));
//  Question # 11
// Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
var friends_name = ["zeeshan", "mohsin", "irfan"];
friends_name.forEach(function (name) {
    console.log(name);
});
//  Question # 12
// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
friends_name.forEach(function (friend_name) {
    console.log("I would like to have a conversation with Mr. ".concat(friend_name, "."));
});
//  Question # 13
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var vehicles = ["car", "motorcycle", "bicycle"];
vehicles.forEach(function (vehicle) {
    console.log("I would like to own a ".concat(vehicle, "."));
});
//  Question # 14
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var guests = ["zeeshan", "mohsin", "irfan"];
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are invited to dinner."));
});
//  Question # 15
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
var unableToAttend = guests.pop();
guests.push("suleman");
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are invited to dinner."));
});
console.log("".concat(unableToAttend, " can't make it to dinner."));
//  Question # 16
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
console.log("Good news! We found a bigger dinner table!");
guests.unshift("Isaac Newton");
guests.splice(Math.floor(guests.length / 2), 0, "Galileo Galilei");
guests.push("Nikola Tesla");
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are invited to dinner."));
});
//  Question # 17
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
console.log("Oops! The new dinner table won't arrive in time.");
console.log("Sorry, we can only invite two guests for dinner.");
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("Dear ".concat(removedGuest, ", I'm sorry I can't invite you to dinner."));
}
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are still invited to dinner."));
});
guests.length = 0;
console.log("Guest list: ".concat(guests));
//  Question # 18
// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
var placesToVisit = [
    "Paris",
    "Tokyo",
    "New York",
    "Rome",
    "Sydney",
];
console.log("Original order:");
console.log(placesToVisit);
console.log("Alphabetical order:");
console.log(placesToVisit.slice().sort());
console.log("Original order:");
console.log(placesToVisit);
console.log("Reverse alphabetical order:");
console.log(placesToVisit.slice().sort().reverse());
console.log("Original order:");
console.log(placesToVisit);
placesToVisit.reverse();
console.log("Reversed order:");
console.log(placesToVisit);
placesToVisit.reverse();
console.log("Original order:");
console.log(placesToVisit);
placesToVisit.sort();
console.log("Alphabetical order:");
console.log(placesToVisit);
placesToVisit.sort().reverse();
console.log("Reverse alphabetical order:");
console.log(placesToVisit);
//  Question # 19
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
var dinnerGuests = [
    "Albert Einstein",
    "Leonardo da Vinci",
    "Marie Curie",
];
console.log("Number of people invited to dinner: ".concat(dinnerGuests.length));
//  Question # 20
// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
var mountains = ["Mount Everest", "K2", "Kangchenjunga"];
var rivers = ["Amazon", "Nile", "Yangtze"];
var countries = ["Pakistan", "Brazil", "China"];
var cities = ["Paris", "New York", "Tokyo"];
var languages = ["English", "Spanish", "Mandarin"];
// Question # 21
// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
var car = {
    manufacturer: "Toyota",
    model: "Camry",
    year: 2022,
    color: "Silver",
};
var book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    pages: 336,
};
var movie = {
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    duration: 142,
};
// Question # 22
// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
var numbers = [1, 2, 3, 4, 5];
console.log(numbers[10]); // Produces an intentional index error
// Question # 23
// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
var carName = "subaru";
console.log("Is car == 'subaru'? I predict true.");
console.log(carName === "subaru");
console.log("Is car == 'toyota'? I predict false.");
console.log(carName === "toyota");
console.log("Is car != 'ford'? I predict true.");
console.log(carName !== "ford");
console.log("Is car != 'subaru'? I predict false.");
console.log(carName !== "subaru");
console.log("Is car > 'honda'? I predict true.");
console.log(carName > "honda");
console.log("Is car < 'ford'? I predict false.");
console.log(carName < "ford");
console.log("Is car >= 'subaru'? I predict true.");
console.log(carName >= "subaru");
console.log("Is car <= 'subaru'? I predict true.");
console.log(carName <= "subaru");
console.log("Is car == 'Subaru'? I predict false.");
console.log(carName === "Subaru");
console.log("Is car.toLowerCase() == 'subaru'? I predict true.");
console.log(carName.toLowerCase() === "subaru");
// Question # 24
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// Tests for equality and inequality with strings
console.log("apple" === "apple"); // true
// console.log("apple" === "orange"); // false
// Tests using the lowercase function
console.log("Apple".toLowerCase() === "apple"); // true
console.log("Apple".toLowerCase() === "orange"); // false
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log(10 === 10); // true
// console.log(10 !== 5); // true
console.log(10 > 5); // true
console.log(10 < 20); // true
console.log(10 >= 10); // true
console.log(10 <= 15); // true
// Tests using "and" and "or" operators
console.log(true && false); // false
console.log(true || false); // true
// Test whether an item is in an array
var fruits = ["apple", "orange", "banana"];
console.log(fruits.includes("apple")); // true
console.log(fruits.includes("grape")); // false
// Test whether an item is not in an array
console.log(!fruits.includes("apple")); // false
console.log(!fruits.includes("grape")); // true
// Question # 25
// Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
var alien_color = "green";
if (alien_color === "green") {
    console.log("Congratulations! You earned 5 points!");
}
// Question # 26
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
if (alien_color === "green") {
    console.log("Congratulations! You earned 5 points for shooting the alien.");
}
else {
    console.log("Congratulations! You earned 10 points.");
}
// Question # 27
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
if (alien_color === "green") {
    console.log("Congratulations! You earned 5 points.");
}
else if (alien_color === "yellow") {
    console.log("Congratulations! You earned 10 points.");
}
else if (alien_color === "red") {
    console.log("Congratulations! You earned 15 points.");
}
// Question # 28
// Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.
var age = 25;
if (age < 2) {
    console.log("The person is a baby.");
}
else if (age < 4) {
    console.log("The person is a toddler.");
}
else if (age < 13) {
    console.log("The person is a kid.");
}
else if (age < 20) {
    console.log("The person is a teenager.");
}
else if (age < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
// Question # 29
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
var favorite_fruits = ["apple", "banana", "mango"];
if (favorite_fruits.includes("banana")) {
    console.log("You really like bananas!");
}
if (favorite_fruits.includes("orange")) {
    console.log("You really like oranges!");
}
if (favorite_fruits.includes("mango")) {
    console.log("You really like mangoes!");
}
// Question # 30
// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
var usernames = ["admin", "user1", "user2", "user3", "user4"];
usernames.forEach(function (username) {
    if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(username, ", thank you for logging in again."));
    }
});
// Question # 31
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
// const usernames: string[] = [];
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
else {
    usernames.forEach(function (username) {
        console.log("Hello ".concat(username, ", thank you for logging in again."));
    });
}
// Question # 32
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
var current_users = ["admin", "user1", "user2", "user3", "user4"];
var new_users = ["user5", "user6", "admin", "user7", "user8"];
new_users.forEach(function (new_user) {
    if (current_users
        .map(function (user) { return user.toLowerCase(); })
        .includes(new_user.toLowerCase())) {
        console.log("Sorry, ".concat(new_user, " will need to enter a new username."));
    }
    else {
        console.log("Username ".concat(new_user, " is available."));
    }
});
// Question # 33
// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
// const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach(function (number) {
    var ordinal;
    if (number === 1) {
        ordinal = "st";
    }
    else if (number === 2) {
        ordinal = "nd";
    }
    else if (number === 3) {
        ordinal = "rd";
    }
    else {
        ordinal = "th";
    }
    console.log("".concat(number).concat(ordinal));
});
// Question # 34
// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
var favorite_pizzas = ["pepperoni", "cheese", "vegetable"];
favorite_pizzas.forEach(function (pizza) {
    console.log("I like ".concat(pizza, " pizza."));
});
console.log("I really love pizza!");
// Question # 35
// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
var animals = ["dog", "cat", "rabbit"];
animals.forEach(function (animal) {
    console.log("A ".concat(animal, " would make a great pet."));
});
console.log("Any of these animals would make a great pet!");
// Question # 36
// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("You ordered a ".concat(size, " shirt with the message: \"").concat(message, "\"."));
}
make_shirt(); // Large shirt with default message
make_shirt("medium"); // Medium shirt with default message
make_shirt("small", "Hello, World!"); // Small shirt with custom message
// Question # 37
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
// function make_shirt(size: string = "large", message: string = "I love TypeScript") {
//     console.log(`You ordered a ${size} shirt with the message: "${message}".`);
//   }
make_shirt(); // Large shirt with default message
make_shirt("medium"); // Medium shirt with default message
make_shirt("small", "Hello, World!"); // Small shirt with custom message
// Question # 38
// Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
describe_city("Karachi"); // Karachi is in Pakistan
describe_city("Paris", "France"); // Paris is in France
describe_city("New York", "USA"); // New York is in USA
// Question # 39
// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
console.log(city_country("Lahore", "Pakistan")); // Lahore, Pakistan
console.log(city_country("Paris", "France")); // Paris, France
console.log(city_country("Tokyo", "Japan")); // Tokyo, Japan
function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title,
    };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_album("Billie Eilish", "When We All Fall Asleep, Where Do We Go?", 14);
var album2 = make_album("Taylor Swift", "Evermore");
var album3 = make_album("Ed Sheeran", "÷ (Divide)", 16);
console.log(album1);
console.log(album2);
console.log(album3);
// Question # 41
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
var magicians = [
    "Harry Houdini",
    "David Copperfield",
    "Penn Jillette",
];
show_magicians(magicians);
// Question # 42
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
function make_great(magicians) {
    return magicians.map(function (magician) { return "The Great ".concat(magician); });
}
//   const magicians: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette"];
var great_magicians = make_great(magicians);
show_magicians(great_magicians);
// Question # 43
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
// function make_great(magicians: string[]): string[] {
// return magicians.map((magician: string) => `The Great ${magician}`);
//   }
//   const magicians: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette"];
//   const great_magicians: string[] = make_great([...magicians]);
show_magicians(magicians);
show_magicians(great_magicians);
// Question # 44
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("You ordered a sandwich with ".concat(items.join(", "), "."));
}
make_sandwich("ham", "cheese", "lettuce");
make_sandwich("turkey", "bacon", "tomato", "mayo");
make_sandwich("chicken", "avocado", "sprouts", "mustard");
function make_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    if (options.length > 0) {
        car.options = options;
    }
    return car;
}
var car1 = make_car("Toyota", "Camry", "sunroof", "leather seats");
var car2 = make_car("Honda", "Civic");
console.log(car1);
console.log(car2);
