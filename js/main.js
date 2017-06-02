import 'les_6.js';
/**
 * Uitleg van deze opdrachten:
 * Kijk hoever je komt met deze opdrachten. Ik zal deze lijst in de toekomst
 * nog wat uitbreiden met nieuwere opdrachten Je mag me bij elke opdracht om
 * hulp vragen Sowieso wil ik je werk zien. Dus loop even bij me langs als je 1
 * of meerdere opdrachten af hebt
 */


/**
 * Opdracht 1: primitives
 * Maak voor de volgende primitives 5 goed bedachte variabelen per primitive
 *
 * 5 variabelen met daarin een string
 * 5 variabelen met daarin een number
 * 5 variabelen met daarin een boolean
 *
 * Geef ze een goede engelse naam en sla er iets in op wat een goed voorbeeld
 * geeft van Media Development producten (apps, sites, etc.) Bijvoorbeeld een
 * string variabele met de naam 'teacherName' en als waarde 'Berend'
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
 * Bijvoorbeeld een Array met de naam 'students' en als waarde ['Berend',
 * "Erwin']
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
 * Bijvoorbeeld een object met de gegevens van je mobiel zoals welk merk, type
 * en hoe oud hij is
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
 * Bijvoorbeeld een functie met de naam 'multiply'. Deze functie verwacht 2
 * parameters value & multiplier console.log( value * multiplier)
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
 * vervolgens returned de functie een object met daarin de firstname en
 * lastname opgeslagen roep deze functie aan en console.log() de waarde
 */

function getPerson(firstName, lastName){
    var person = {'firstName':firstName, 'lastName':lastName};
    return person;
}
console.log(getPerson("Berend", "Weij"));

/**
 * Opdracht 8: Functions, objects
 * Maak een object genaamd 'student'
 * Maak in dit object bij het aanmaken een functie aan met de naam 'showName'
 */

console.log("opracht 8");
var student = {'showName':function(){
    return this.firstname;
},'firstname':'John',
               'lastname':'Doe'
              };
console.log(student.showName());

/**
 * Opdracht 9: Arrays & for loops
 * Maak een array genaamd 'students' met daarin 10 namen van je medeleerlingen
 * Schrijf een for loop om alle namen in de Array te laten zien (console.log())
 */
var students = ['Bas', 'Jelle', 'Rowy', 'Desteney', 'Sjaak', 'Lucas', 'Tom', 'Willem', 'Martijn', 'Menno'];
for (var i = 0; i < students.length; i++) { 
    console.log(students[i]);
}

/**
 * Opdracht 10: Strings samenvoegen
 * Maak een variabele met de naam firstName, sla je voornaam hierin op
 * Maak een variabele met de naam lastName, sla je achternaam hierin op
 * Maak een variabele fullName, en zorg ervoor dat de variabelen 'firstName' en
 * 'lastName' hier samen in worden opgeslagen
 */
   
let firstName = "Bas";
let lastName = "Vugts";
let fullName = firstName + " " + lastName;

                          

/**
 * Opdracht 11: Random cijfers
 * console.log() een willekeurige cijfer tussen 0 en 5
 * console.log() een willekeurige cijfer tussen 1 en 10
 * console.log() een willekeurige cijfer tussen 30 en 40
 * console.log() een willekeurige cijfer tussen -100 en 100
 */
                          
console.log(Math.random()*5);
console.log(Math.random()*9+1);
console.log(Math.random()*10+30);
console.log(Math.random()*200-100);

/**
 * Opdracht 12: Primitive, Array of object?
 * Geef in de console.log antwoord op de vraag door een boolean op true of
 * false te zetten
 */
console.log('De naam van een gebruiker sla ik op in een:',
            { array : false, object : false, primitive : true });

console.log('De naam, leeftijd en lengte van een gebruiker sla ik op in een:',
            { array : false, object : true, primitive : false });

console.log('Alle facturen van een zakelijke klant sla ik op in een:',
            { array : true, object : true, primitive : false });

console.log('Een factuur sla ik op in een:',
            { array : false, object : false, primitive : true });

console.log(
    'Als ik vanuit JavaScript een menu maak met knoppen, dan sla ik de knoppen op in een:',
    { array : true, object : false, primitive : false });

/**
 * Opdracht 13: Keywords
 * Maak 4 variabelen aan met de let keyword
 * Maak 4 variabelen aan met de const keyword
 */
console.log("opdracht 13");
let q = "test";
let r = "2e letter";
let s = "true";
let t = ['1', '2', '3'];
                          
const u = "test";
const v = "2e const";
const w = "true";
const x = ['1', '2', '3'];

/**
 * Opdracht 14: Keywords
 * Geef antwoord op de volgende vragen:
 */
console.log('Wanneer gebruik je de let keyword?', 'Als het aanpasbaar binnen het blok moet zijn');
console.log('Wanneer gebruik je de const keyword', 'als het niet aanpasbaar moet zijn');

/**
 * Opdracht 15: Objects en array
 * Maak een object voor jezelf (naam, leeftijd, lengte)
 * Maak in je object een array aan genaamd 'family' en vul deze array met namen
 * uit je familie
 * (objecten en arrays kunnen in elkaar opgeslagen worden)
 */
                          
let Bas = {naam:'Bas', leeftijd:20, lengte:180, family:['Tim', 'Tamara','Jeffrey']};
console.log(Bas);


/**
 * Hieronder heb ik code geschreven die je nodig hebt voor vraag 16 en 17
 * Aan deze code hoef je niets te veranderen
 */

Array.prototype.random = function() {
    let randomIndex = Math.floor(Math.random() * this.length);
    return this[ randomIndex ];
};

String.prototype.replaceAll = function(search, replacement) {
    return this.replace(new RegExp(search, 'g'), replacement);
};

/**
 * Opdracht 16: Custom prototype method gebruiken
 * Maak een array met meerdere namen
 * Probeer vervolgens de random() functie (die hierboven staat) te gebruiken
 * Tip: je roept deze functie op dezelfde manier aan als bijvoorbeeld push() en
 * splice().
 * console.log() de naam die deze functie returned
 */

let namen = ['John', 'Jane', 'Bas'];
console.log(namen.random());

/**
 * Opdracht 17: Custom prototype method gebruiken
 * Maak een variabele waarin je een lange tekst opslaat
 * Probeer vervolgens de replaceAll() functie te gebruiken om een bepaald woord
 * op alle plekken te vervangen voor een ander woord
 * console.log() deze gewijzigde tekst
 */

let PieceOfString = 'Lorem Ipsum is een super leuke, Lorem ipsum is handig, De Lorem tekst is om dingen te testen'
console.log(PieceOfString.replaceAll('Lorem', 'Replaced'));

/**
 * Opdracht 18: Prototype based language
 * Geef antwoord op onderstaande vraag
 */
console.log('Waarom heet JavaScript een prototype based language?',
            'omdat ze andere objecten inheriten om verschillende en standaard methods te hebben');


/**
 * Opdracht 19: Zelf een custom prototype method maken
 * Soms wil je een array leeg kunnen gooien. Het zou dus wel handig zijn als
 * je bij elke array een empty() functie kunt aanroepen.
 * Zorg ervoor dat deze functie er is en laat met 3 arrays zien dat hij werkt
 */
Array.prototype.empty = function(){
    this.splice(0, this.length);
    return this;
}

let JoeySkills = ['java', 'androidstudio', 'php'];
let colours = ['red', 'blue', 'purple'];
let alphabet = ['a', 'b', 'c', 'd', 'e'];

console.log(JoeySkills.empty());
console.log(alphabet.empty());

/**
 * Opdracht 20: Monkey patching (?)
 * Je begint nu in te zien hoe JS werkt. Probeer nu de splice() en push()
 * functies van Arrays te overschrijven met een eigen functie.
 * Maak 2 arrays aan en laat zien dat je code werkt
 */

Array.prototype.splice = function (begin, end) {
    for(let i = begin; i < end; i++){
        delete this[i];
    }
    return this;
};

console.log(colours.splice(2,3));