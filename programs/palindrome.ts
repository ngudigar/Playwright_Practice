
//findout the integr is palidrom or not ?
let num = 121;
let num1 = num.toString();
let num2 = num1.split("").reverse().join("");
if(num1 == num2){
    console.log("is palindrome")
} 
else{
    console.log("is not palindrome")
}

//check given string is palidrom or not ?
let name1 = "malalamk";
let name2 = "";
for (let i = name1.length -1; i>=0; i--){
     name2+=name1.charAt(i);
}
if (name1.toLocaleLowerCase()==name2.toLowerCase()){
    console.log("is plaindrome")
}
else {
    console.log("is not palindrome")
}