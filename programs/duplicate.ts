

//// findout the duplicate values from the given integr ariaReadOnly 
// let arr = [1,2,3,4,5,4,3];

// console.log("The duplicate value from the given array :")

// for(let i=0;i<arr.length;i++){
//     for(let j=i+1; j<arr.length;j++){
//         if(arr[i]==arr[j]){
//             console.log(""+arr[i])
//         }
//     }
// }


//// remove the duplicates and print the rest 

// let numA =  [1,2,3,4,3,2];

// let you = [...new Set(numA)];
// console.log("after removing the duplicate ",you);

//// findout the duplicate from the string and print along with there count

let FullName="Nagaraj Gudigar";
let result:{[key:string]:number}={};
for(let i of FullName){
    result[i]=(result[i] || 0)+1;
}
for(let key in result){
    if(result[key]>1){
        console.log("duplicate Key : ", key , "and there count" , result[key]);
    }
}
