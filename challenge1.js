/**
 * Task 1:
 * Create a function named `printName`
 * - that just prints your name on the screen
 */
function printName(name)
{
    
    console.log("Fahad Alajmi")
}
printName (); 
/**
 * Task 2:
 * Create a function named `printAge`
 * - that takes a birth year as a parameter,
 * - and prints the age on the screen.
 * - Age = current year - birth
 */
function printAge (BirthYear)
{
let age = 2022 - BirthYear;
console.log(age);
}
printAge (1996);
/**
 * Task 3:
 * Create a function named `printHello`
 * - that takes 2 parameters, name, and language
 * - language can be passed in different values, here are the accepted values:-
 * -- en: it should print `Hello NAME`
 * -- es: it should print `Hola NAME`
 * -- fr: it should print `Bonjour NAME`
 * -- tr: it should print `Merhaba NAME`
 */
function printHello (name,language)
{
    if (language === "en"){
        console.log ("hello ",name);
    }
    
    else if (language === "es"){
        console.log ("hola ",name);
    }
    else if (language === "fr"){
        console.log ("bonjour ",name);
    }
    else if (language === "tr"){
        console.log ("merhaba ",name);
    }
}
printHello ("fahad","tr");
/**
 * Task 4:
 * Create a function named `printMax`
 * - that takes 2 parameters as numbers
 * - should print out the bigger number
 */
function printMax (n1,n2)
{
    if (n1>n2)
    {
return (n1);
    }
    else
    {
        return (n2);
    }
}
console.log(printMax(1,2));
console.log(printMax(2,1));
