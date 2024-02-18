let arr="apple"
let output={}
for(let i=0;i<=arr.length;i++){
    if(output[arr[i]]){
        output[arr[i]]+=1
    }else{
        output[arr[i]]=1

    }
}
console.log(output,"output")
let dup=[1,1,2,2,3,3,4,4,5,5,6,6,7,8,9,10]
let unique=[]
let duplicate=[]
for(let i=0;i<dup.length;i++){
 if(unique.indexOf(dup[i])==-1){
    unique.push(dup[i])
 }else{
    duplicate.push(dup[i])
 }
}
console.log(unique,duplicate,"dup")


let arrrr = [1,1,2,2,3,4,3,3,4,5,5,6,6,6]
let duppp = new Set(arrrr)
console.log(Array.from(duppp))