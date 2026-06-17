
//reverse each words from the given string 

let Lname = "Nagaraj Gudi Bangalore";
let word = Lname.split(" ");

for (let i = 0; i < word.length; i++) {
    let w = word[i];
    let rev = "";
    for (let j = w.length - 1; j >= 0; j--) {
        rev += w.charAt(j);
    }   
    word[i] = rev;
}
let revLname = word.join(" ");
console.log("Reverse of the string is: " + revLname);   

