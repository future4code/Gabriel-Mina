// 1°A -
//const minhaVariavel:string = 20;
// console.log(minhaVariavel);
// Ao atribuir um numero para uma variavel definida como string ocorre um erro de Type
// 1°B -
// const meuNumero: (number|string) = "20";
// console.log(meuNumero);
//1°C-
type person ={
    name:string,
    age:number,
    favoriteColor:string
}
// 1°-D
enum Colors_Raibow {
    RED="Red",
    ORANGE="Orange",
    YELLOW="Yellow",
    GREEN="Green",
    BLUE="Blue",
    INDIGO="Indigo",
    VIOLET="Violet"
}
const Gabriel:person ={
    name:"gabriel",
    age:21,
    favoriteColor:Colors_Raibow.ORANGE
}
const Amanda:person ={
    name:"Amanda",
    age:31,
    favoriteColor:Colors_Raibow.YELLOW
}
const Julia:person ={
    name:"Julia",
    age:29,
    favoriteColor:Colors_Raibow.GREEN
}

const persons: person[] = [Gabriel,Amanda,Julia]

console.table(persons);
