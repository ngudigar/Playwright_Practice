
//reverse string without using reverse function
let Firstname = "Nagaraj";
let rev = "";
for (let i = Firstname.length - 1; i >= 0; i--) {
    rev += Firstname.charAt(i);
}
console.log("Reverse of the string is: " + rev);