/******************************************************************************
Funksjoner og metoder oppgave

Les oppgaveteksten NØYE. Vis noen eksempler i koden din som tester
funksjonene og metodene dine. Bruk en variasjon av pilfunksjoner (arrow functions)
og funksjoner laget med nøkkelordet `function`.

Legg til kommentarer i koden din som kort forklarer hva den gjør.

******************************************************************************/

/******************************************************************************
1.

Lag følgende funksjon:

Funksjonen skal ta inn et tall som parameter og returnere
"Oddetall" hvis tallet er et oddetall og "Partall" hvis tallet er et partall.
(PS: Funksjonen skal bruke return, du skal ikke bruke console log inni
funksjonen)

******************************************************************************/

// Skriv koden for oppgave 1 her

function oddOrEven(num) {
    // modulo gir resten av heltalldivisjon
    // 5 / 2 = 4
    // 5 % 2 = 1
    // 0 rest betyr oddetall
    return num % 2 === 0? "partall": "oddetall";
}
console.log(`
    oppg1
    oddOrEven(5) gir ${oddOrEven(5)}
    oddOrEven(6) gir ${oddOrEven(6)}
`)
    
/******************************************************************************
2.

Lag følgende funksjon:

Funksjonen skal ta inn en string som parameter og returnere stringen
i STORE BOKSTAVER med et utropstegn på slutten.

Eksempel: "Dette er kult" skal returnere "DETTE ER KULT!"

******************************************************************************/

// Skriv koden for oppgave 2 her

//mushroom that makes characters in a string grow up
function mushroom(str) {
    return str.toUpperCase();
}
console.log(`
    oppg2
    mushroom(mario) gir ${mushroom("mario")}
`)

/******************************************************************************
3.

Lag følgende funksjon:

Funksjonen skal ta inn 2 parametere:

 - Et navn (string)
 - En time på døgnet (nummer)

Funksjonen skal returnere:
"Ugyldig tid" hvis timeverdien er mindre enn 0.
"God natt (mottatt navn)" hvis timeverdien er mellom 0 og 5.
"God morgen (mottatt navn)" hvis timeverdien er mellom 6 og 11.
"God dag (mottatt navn)" hvis timeverdien er mellom 12 og 17.
"God kveld (mottatt navn)" hvis timeverdien er mellom 18 og 23.
"Ugyldig tid" hvis timeverdien er større enn 23.

Hvis ingen timeverdi mottas, skal funksjonen returnere en feilmelding.

******************************************************************************/

// Skriv koden for oppgave 3 her

/*returnerer en passende hilsen til
 * @navn angitt som string og
 * @tid, angitt som positivt tall i hele timer 0 - 23 */

function hilsen(navn, tid) {
    //sjekker at tid er number
    if (typeof(tid) != "number") throw new Error(`${tid} is not a number`);
    //sjekker at tid er gyldig
    else if (tid < 0 || 23 < tid) return "Ugyldig tid";

    //bestemmer hilsen utifra tidspunkt
    else if (tid < 6 ) return "God natt " + navn;
    else if (tid < 12) return "God morgen " + navn;
    else if (tid < 18) return "God dag " + navn;
    else	       return "God Kveld " + navn;
}

console.log("oppg3");
const person = ["Trine", "Mons", "Arild", "Catrine", "Mario"];
const iterasjoner = 8; //antal tester

for (let i = 0; i <= iterasjoner; i++) {
    navn = person[i % person.length]; //modulo hindrer ugyldig indeks
    tid = Math.ceil(i * 25 / iterasjoner - 1); //tid foredeles fra -1 til 24
    console.log(`hilsen(${navn}, ${tid}) gir ${hilsen(navn, tid)}`);
}
//console.log(hilsen("mons","trine"));//test av feilmelding
/******************************************************************************
4.

Lag følgende funksjon:

Funksjonen skal ta inn en array som parameter og returnere arrayen
med første og siste indeks fjernet.

Eksempel 1: ["Rød", "Grønn", "Blå", "Gul"] skal returnere ["Grønn", "Blå"].

Eksempel 2: ["En", "To", "Tre", "Fire", "Fem", "Seks"] skal returnere
["To", "Tre", "Fire", "Fem"].

******************************************************************************/

// Skriv koden for oppgave 4 her

//returnerer array, men 
function delEnds(array) {
    //array.length - 1 gir nest siste indeks
    return array.slice(1, array.length - 1);
}

console.log(`
    oppg4
    person inneholder ${person}
    delEnds(person) gir ${delEnds(person)}
`)
/******************************************************************************
5.

Lag følgende funksjon:

Funksjonen skal ta inn en string som parameter.

Bruk stringmetoder på stringen for å gjøre følgende:
 - Erstatt ordet "vanskelig" med "gøy".
 - Fjern mellomrom fra starten og slutten av stringen.

Returner deretter den oppdaterte stringen.

Eksempel 1: "  Javascript er vanskelig   " skal returnere "Javascript er gøy".
Eksempel 2: " Det er vanskelig å bruke metoder " skal returnere "Det er gøy å bruke metoder".
Eksempel 3: "   vanskelig        " skal returnere "gøy".

******************************************************************************/

// Skriv koden for oppgave 5 her

//handles complaints from students
function counselor(complaint) {
    return complaint.trim().replace("vanskelig", "gøy");
}

console.log("oppg5");
let example = [
    "  Javascript er vanskelig   ",
    " Det er vanskelig å bruke metoder ",
    "   vanskelig        "
];

example.forEach(e => {
    console.log(`counselor(${e})\nblir\n${counselor(e)}`);
});
/*****************************************************************************
6.

Fullfør følgende steg for å manipulere "items"-arrayet. Hvert steg skal
fullføres ved å bruke passende array-metoder.

*******************************************************************************/

const items = ["Bok", "Penn", "Notatbok", "Viskelær", "Blyant", "Markør"];

/*******************************************************************************
Steg 1: Fjern det første elementet ("Bok") fra arrayen ved hjelp av riktig metode.

Steg 2: Finn og erstatt "Viskelær" med "Linjal" i arrayen.

Steg 3: Bruk splice-metoden til å fjerne både "Penn" og "Notatbok", og legg til "Markeringspenn" i deres plass.

Steg 4: Kombiner alle elementene i arrayen til en enkelt string ved å bruke " | " som separator.

Ekstra utfordring: Lag et nytt array som kun inkluderer elementer som inneholder bokstaven "e".

******************************************************************************/

// Skriv koden for oppgave 6 her

console.log("oppg6");
console.log(items);
console.log("steg1: fjern første element");
items.shift();// fjerner første element bok
console.log(items);

console.log('steg2: finn og erstatt "Viskelær" med "Linjal');
let searchIndex = items.indexOf("Viskelær");//finner indeks til viskelær
items[searchIndex] = "Linjal";//erstatter Viskelær med Linjal
console.log(items);

console.log("steg3: erstatt 'Penn' og 'Notatblokk' med 'Markeringspenn'")
let replace = "Markeringspenn"; //erstatningsord
//fra indeks 0, erstatter 2, med verdi i replace
items.splice(0, 2, replace, replace);
console.log(items);

console.log("steg4: kombiner array med ' | ' som seperator");
let itemString = items.join(" | "); //lager string med items
console.log(itemString);
    
/******************************************************************************
7.

EKSTRA UTFORDRING #1:

Dette er ikke obligatorisk, kun for de som vil ha en ekstra utfordring.

Lag følgende funksjon:

Funksjonen skal ta inn 2 parametere, en array og en string.

Sjekk om arrayen inneholder stringen. Hvis den gjør det, fjern elementet
fra arrayet og returner den oppdaterte arrayen.

Hvis arrayet ikke inneholder stringen, legg stringen til på slutten
av arrayet og returner det oppdaterte arrayet.

Eksempel 1: (["Rød", "Grønn"], "Blå") --> ["Rød", "Grønn", "Blå"]
Eksempel 2: (["Rød", "Grønn", "Blå"], "Grønn") --> ["Rød", "Blå"]
Eksempel 3: (["En", "To", "Tre"], "Fire") --> ["En", "To", "Tre", "Fire"]
Eksempel 4: (["En", "To", "Tre"], "To") --> ["En", "Tre"]

******************************************************************************/

// Skriv koden for oppgave 7 hero

function roulette(arr, str) {
    if (arr.includes(str)) {//sjekker string er i array
	let strIndex = arr.indexOf(str);//lagrer strings index i array
	car.splice(strIndex,1);//fjerner string
    } else arr.push(str);//legger til string
    return arr;//returnerer resultat
}
const car = ['volvo', 'mercedes', 'mitsubishi']
console.log(`
    oppg7
    ${car}
    roulette(car, volvo) ${roulette(car, 'volvo')}
    roulette(car, banan) ${roulette(car, 'banan')}
`)
/******************************************************************************
8.

EKSTRA UTFORDRING #2:

Dette er ikke obligatorisk, kun for de som vil ha en ekstra utfordring.

Lag følgende funksjon:

Funksjonen skal ta inn ett parameter.

Hvis parameteret er en string:
Returner stringen med "😎" lagt til i starten og slutten.

Hvis parameteret er et tall:
Doble verdien, konverter den til en string, og returner den med "😎" lagt til i
starten og slutten.

Hvis parameteret er en boolean:
Returner "😎Ja😎" hvis parameteret er true, eller "😎Slapp av😎" hvis parameteret er false.

Hvis parameteret er en annen datatype:
Returner "😎Kun primitive verdier😎".

******************************************************************************/

// Skriv koden for oppgave 8 her

//primitive verdier kan bli endret, og omringes av smiley 
function dataFun(e) { //e = element
    let result;
    //typeof() returnerer datatype som en string
   if (typeof(e) === "string") {
       result = e;
   } else if (typeof(e) === "number") {
       result = 2 * e;//dobbler nummer
   } else if (typeof(e) === "boolean") {
       if(e) result = "Ja"; //blir utført om e er true
       else result = "Slapp av";
   } else {
       resultat = "Kun primitive verdier";
   }
   return `😎 ${result} 😎` ;  
}

console.log(`
   oppg8
   dataFun("fiolin") ${dataFun("fiolin")}
   dataFun(3) ${dataFun(3)}
   dataFun(true) ${dataFun(true)}
   dataFun(false) ${dataFun(false)}
   dataFun(items) ${dataFun(items.join(" | "))}
`);
