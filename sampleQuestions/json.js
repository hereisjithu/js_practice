fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json())
.then(data=>console.log(data.map(e=>e.address)));
// let arrayData = new Array();
// arrayData.push(2,4,5,4,5,6,7)
// let length = arrayData.length
// console.log(length);
// arrayData.pop();
// arrayData.unshift(8);
// arrayData.shift();
// arrayData.forEach((data)=>console.log(data))
// arrayData.splice(1,1)
    
// console.log(arrayData)
// array1 = [5,1,2,3,4]
// array2 = [5,6,7,8]
// array3 = [].concat(array1,array2);
// console.log(array3);

// sumOfArray = array3.reduce((sum,data)=>{
//    return sum += data; 
// },0)
// console.log(sumOfArray)
// let sortedArray = array3.sort()
// console.log(sortedArray)


//constructor
function Office(name ,id,designation,department){
this.name = name;
this.id = id;
this.designation = designation;
this.department = department
}''
let office1 = new Office('jithu','1','warranty','service')
let office2 = new Office('nidhin','1','serviceManager','service')
console.log(office1,office2);
