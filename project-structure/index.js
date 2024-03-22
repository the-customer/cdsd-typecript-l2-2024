// LES TYPES
var x = 10;
console.log(typeof (x));
var y = 10.5;
console.log(typeof (y));
var z;
console.log(typeof (z));
z = "Toto";
z = true;
console.log(typeof (z));
// NB : typeof permet de savoir le type d'une valeur
//============= - Number
var a, c;
var b;
// a = "dfdsf" //❌
// c = "ghsdjfk" //❌
a = 4; //✅
//============ - booleen
var test;
// test = "toto" //❌
test = true; //✅
test = 1 > 5; //✅
//============ - string
var nom;
// nom = 12 //❌
nom = "Toto"; //✅
//============ - object
var obj1;
// obj1 = 8 //❌
// obj1 = "une chaine" //❌
obj1 = Object({});
var obj2;
obj2 = {
    nom: "toto",
    prenom: "titi",
    age: 16
};
obj2 = {
    nom: "toto",
    prenom: "titi",
    age: 16,
    sexe: "F"
};
var obj3;
//❌
// obj3 = {
//     nom: 344
// }
//✅
obj3 = {
    nom: "toto"
};
//============ - Array
var tab1; // tableau vide
// tab1 = 23 //❌
// tab1 = [23,4] //❌
// tab1.push(3) // ❌
var tab2; // un tableau de nombres
tab2 = [12, 2, 3, 4, 5, 6];
tab2.push(12);
// tab2.push ("toto") //❌
console.log(tab2);
//============ - Tuple
// c'est un tableau de taille fixe
var tup1;
tup1 = [12, "toto"]; //✅
// tup1 = ["toto",12] //❌
// tup1 = [12,"toto","titi"] //❌
var tup2 = [Number, Number, Number]; //un tableau de taille fixe 3 et qui ne contient que des entiers
//============ - Enumeration
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["VISITOR"] = 2] = "VISITOR";
})(Role || (Role = {}));
var r1;
r1 = 2;
console.log(r1);
r1 = Role.VISITOR;
console.log(r1);
// r1 = 7 // ❌
// r1 = ADMIN // ❌
// r1 = "ADMIN" // ❌
