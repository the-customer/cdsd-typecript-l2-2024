// LES TYPES


const x = 10
console.log( typeof(x))

const y = 10.5
console.log( typeof(y))

let z;
console.log( typeof(z))
z = "Toto"
z = true
console.log( typeof(z))
// NB : typeof permet de savoir le type d'une valeur

//============= - Number

let a: Number,c: Number;
var b: Number;

// a = "dfdsf" //❌
// c = "ghsdjfk" //❌
a = 4 //✅

//============ - booleen

let test: Boolean

// test = "toto" //❌
test = true //✅
test = 1 > 5 //✅

//============ - string
let nom: String

// nom = 12 //❌
nom = "Toto" //✅

//============ - object
let obj1: Object

// obj1 = 8 //❌
// obj1 = "une chaine" //❌
obj1 = Object({});

let obj2: {}

obj2 = {
    nom: "toto",
    prenom: "titi",
    age : 16
}

obj2 = {
    nom: "toto",
    prenom: "titi",
    age : 16,
    sexe: "F"
}

let obj3: {nom:String}

//❌
// obj3 = {
//     nom: 344
// }
//✅
obj3 = {
    nom: "toto"
}

//============ - Array
let tab1: [] // tableau vide

// tab1 = 23 //❌
// tab1 = [23,4] //❌
// tab1.push(3) // ❌

let tab2: Array<Number> // un tableau de nombres
tab2 = [12,2,3,4,5,6]
tab2.push (12)
// tab2.push ("toto") //❌
console.log(tab2)

//============ - Tuple
// c'est un tableau de taille fixe
let tup1: [Number,String];

tup1 = [12,"toto"] //✅
// tup1 = ["toto",12] //❌
// tup1 = [12,"toto","titi"] //❌

let tup2 = [Number,Number,Number] //un tableau de taille fixe 3 et qui ne contient que des entiers

//============ - Enumeration
enum Role {ADMIN,USER,VISITOR}

let r1: Role

r1 = 2
console.log(r1)
r1 = Role.VISITOR
console.log(r1)
// r1 = 7 // ❌
// r1 = ADMIN // ❌
// r1 = "ADMIN" // ❌

enum Jours {LUNDI,MARDI,MERCREDRI,JEUDI,VENDREDI,SAMEDI,DIMANCHE}

let j :Jours
j = Jours.LUNDI // idem que mettre j = 0
//Changer les valeurs
enum Days {LUNDI=1,MARDI,MERCREDRI,JEUDI,VENDREDI,SAMEDI,DIMANCHE}

//============ - Any
// Le type ANY accepte toutes valeurs et par defaut les variables qui n'ont pas de type, sont de type ANY
let a1: any
// let a1;
a1 = 12
a1 = "toto"
a1 = true
a1= [13,2,1,12]
a1 = {
    nom : "DIOP",
    prenom: "MOUSSA"
}