

let nam = "Hi Hello";
let namex = nam.split("");
let me = "";
for(let i of namex){
    if(i.length > me.length){
        me = i;
    }

}
console.log("largest number is:" + me)
