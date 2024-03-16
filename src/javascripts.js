// let arr="apple"
// let output={}
// for(let i=0;i<=arr.length;i++){
//     if(output[arr[i]]){
//         output[arr[i]]+=1
//     }else{
//         output[arr[i]]=1

// import { faAppleAlt } from "@fortawesome/free-solid-svg-icons";

//     }
// }
// console.log(output,"output")
// let dup=[1,1,2,2,3,3,4,4,5,5,6,6,7,8,9,10]
// let unique=[]
// let duplicate=[]
// for(let i=0;i<dup.length;i++){
//  if(unique.indexOf(dup[i])==-1){
//     unique.push(dup[i])
//  }else{
//     duplicate.push(dup[i])
//  }
// }
// console.log(unique,duplicate,"dup")


// let arrrr = [1,1,2,2,3,4,3,3,4,5,5,6,6,6]
// let duppp = new Set(arrrr)
// console.log(Array.from(duppp))
let arre="apple"
output={}
for(i=0;i<=arre.length;i++){
    if(output[arre[i]]){
    output[arre[i]]+=1
}else{
    output[arre[i]]=1
}
}
console.log(output,"output")
let arr=[1,2,4,5,6,7,8,9,10]
 arr=arr.sort()
 let heighest=arr[0]
 let secondHeighest=arr[0]
 for(i=0;i<arr.length;i++){
 if(arr[i]>heighest){
 secondHeigheat=heighest;
 heighest=arr[i]
 }
 }
 console.log(heighest,secondHeighest)
 
let arr1=[1,2,3,4,5,6]
let arr2=[1,3,4,5,6]
let arr4=[]
let sum=0
for(let i=0;i<arr1.length;i++){
    if(arr1[i]&&arr2[i]){
    let arr3=arr1[i]+arr2[i]
    arr4.push(arr3)
    }
}
console.log("sum",arr4,sum);
let str="apple"
reverse=""
for(let i=str.length-1;i>=0;i--){
    reverse+=str[i]
}
console.log(reverse)
let arrr=[1,2,3,4,5,6]
// let arrr2=[1,3,4,5,6]
let arrr4=[]
let summ=0
for(let i=0;i<arrr.length;i++){
  summ+=arrr[i]  
    
}
console.log(summ,"sum")
let unic=[1,2,3,3,4,4,5,5,6,6]
let unicarr=[]
let duplicate=[]
for(let i=0;i<unic.length;i++){
    if(unicarr.indexOf(unic[i])==-1){
        unicarr.push(unic[i])
    }else{
        duplicate.push(unic[i])
    }}
    console.log(unicarr,duplicate)

let company=[{car:"toyota",company:1},{bus:"redbus",company:2},{lorry:"loadlorry",company:3}]
let finalresult=[]
for(let i=0;i<=company.length-1;i++){
   console.log(company[i],i);
    if(company[i].company==3){
        console.log("hi")
        finalresult.push(company[i])
    }
}
console.log(finalresult,"finalresult")



