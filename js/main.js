/**
 * Uitleg van deze opdrachten:
 * Kijk hoever je komt met deze opdrachten. Ik zal deze lijst in de toekomst nog wat uitbreiden met nieuwere opdrachten
 * Je mag me bij elke opdracht om hulp vragen
 * Sowieso wil ik je werk zien. Dus loop even bij me langs als je 1 of meerdere opdrachten af hebt
 */

/**
 * Opdracht 1: primitives
 * Maak voor de volgende primitives 5 goed bedachte variabelen per primitive
 * 
 * 5 variabelen met daarin een string
 * 5 variabelen met daarin een number
 * 5 variabelen met daarin een boolean
 * 
 * Geef ze een goede engelse naam en sla er iets in op wat een goed voorbeeld geeft
 * van Media Development producten (apps, sites, etc.)
 * Bijvoorbeeld een string variabele met de naam 'teacherName' en als waarde 'Berend'
 */
var TeacherName = "Berend";
var TeacherSurname = "Weij";
var age = "34";
var style = "hipster";
var job = "teacher";

var a = "2";
var b = "4";
var c = "6";
var d = "8";
var e = "10";

var AreYouPirate = true;
var AreYouRowy = false;
var areYouStudent = true;
var HaveAMobile = true;
var GameDeveloper =  false;

//debugger;
/**
 * Opdracht 2: Arrays
 * Bedenk 3 arrays en vul ze met primitives
 * console.log de lengte van de arrays
 *
 * Bijvoorbeeld een Array met de naam 'students' en als waarde ['Berend', "Erwin']
 */

var cars = ["Saab", "Volvo", "BMW"];
var classes = ["MG1A", "MG1B", "MG1C", "MD2A", "MD2B"];
var teachers = ["Rosemerta", "Berend", "Jelle", "Hugo"];

console.log(cars.length);
console.log(classes.length);
console.log(teachers.length);

/**
 * Opdracht 3: Arrays push
 * Maak een lege array aan
 * push er een string in
 */

var students = [""];
students.push("Bas");

/**
 * Opdracht 4: Array splice
 * Maak een array aan en vul hem met namen
 * Gooi de naam op de 1e plek weg
 * Gooi de naam op de 3e plek weg
 */

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1);
fruits.splice(1, 1);
console.log(fruits);

/**
 * Opdracht 5: Objects
 * Maak van 10 objecten uit je dagelijkse leven een object
 *
 * Bijvoorbeeld een object met de gegevens van je mobiel zoals welk merk, type en hoe oud hij is
 */

var person = {firstName:"Bas", lastName:"Vugts", age:21, eyeColor:"blue"};
var mobile = {Colour:"black", Brand:"Samsung"};
var mom = {firstName:"Tam", lastName:"Something", age:45};
var dad = {firstName:"Jeff", lastName:"Something2", age:46};
var bro = {firstName:"Tim", lastName:"Vugts", age:17};
var grandma = {firstName:"Ria", lastName:"Something2", age:72};
var granddad = {firstName:"Chris", lastName:"Something2", age:77};
var laptop = {Brand:"Dell", age:2};
var buddy = {firstName:"jelle", lastName:"Kitzen", age:19};
var girl = {firstName:"desteney", lastName:"Bader", age:18};

/**
 * Opdracht 6: Functions
 * Bedenk 4 functies die handig zouden kunnen zijn
 * Bijvoorbeeld een functie met de naam 'multiply'. Deze functie verwacht 2 parameters value & multiplier
 * console.log( value * multiplier)
 */

function multiply(value, multiplier){
    return (value * multiplier)
}
console.log(multiply(3,4));

function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit);
}
console.log(toCelsius(-32));

function addition(value1, add){
    return (value1 + add)
}
console.log(addition(3,4));

function devide(value2, dev){
    return (value2 / dev)
}
console.log(devide(12,4));
console.log(devide(100,10));

/**
 * Opdracht 7: Function & objects
 * Maak een functie die een firstName en lastName verwacht als parameter
 * vervolgens returned de functie een object met daarin de firstname en lastname opgeslagen
 * roep deze functie aan en console.log() de waarde
 */

function getPerson(firstName, lastName){
    return {
        firstName, 
        lastName
    };
}
console.log(getPerson("Berend", "Weij"));

/**
 * Opdracht 8: Functions, objects
 * Maak een object genaamd 'student'
 * Maak in dit object bij het aanmaken een functie aan met de naam 'showName'
 */

/**
 * Opdracht 9: Functions, objects
 * Maak een object genaamd 'student'
 * Voeg nadat je het object hebt aangemaakt een functie toe aan 'student' met de naam 'showName'
 */

/**
 * Opdracht 10: Arrays & for loops
 * Maak een array genaamd 'students' met daarin 10 namen van je medeleerlingen
 * Schrijf een for loop om alle namen in de Array te laten zien
 */

