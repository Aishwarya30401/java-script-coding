let array = [1, 2, 3, 4, 5, 6];
let sum = 0;
let product = 1;
let i;
for (i = 0; i < array.length; i += 1) 
   {
    sum += array[i];
    product *= array[i];
    }
console.log(`Sum is : ${sum} Product is:  ${product}`);


/2nd program:find the duplicate element/ 

function Duplicate(arr){
let result=arr.filter((item,temp,array) => array.indexOf(item)!==temp);
return result;
}
 console.log(Duplicate([1,4,4,5,7,7,6])); 


/3rd program:merge two array and remove duplicate element/
function merge_array(array1, array2) {
    var array3 = [];
    var temp = array1.concat(array2);   
    var len = temp.length;
    var assoc = {};
   while(len--) {
        var item = temp[len];

        if(!assoc[item]) 
        { 
            array3.unshift(item);
            assoc[item] = true;
        }
    }
    return array3;
}
var array1 = [1, 2,4, 3];
var array2 = [2,34,67,889,4,5];
console.log(merge_array(array1, array2)); 


/4th program :specific elements/
const number=[1,3,34,66,71,15]
let odd=number.filter((value)=>
{
return value %2==0;
});
console.log('  odd numbers',odd);

/7th  program:only above 18/ 
let eligible=[{
    name:'geetha' ,age:60},{
    name:'abi' ,age:10},{
    name:'latha' ,age:40},{
    name:'js' ,age:28},{
    name:'ganga' ,age:79},{
    name:'raj' ,age:14},{
    name:'ram' ,age:50}
    ]
    let above18=eligible.filter((vote)=>{
    return vote.age>=18;
    });
    console.log(above18)

    / 8th program:append/ 
    
function insertObject(arr, obj) {
    arr.push(obj);
    console.log(arr);
}
let array = [1, 2, 3];
let object = {x: 12, y: 8};
insertObject(array, object);

/10th armstrong:armstrong/
let sum = 0;
const number = 153;
let temp = number;
while (temp > 0) {
    let remainder = temp % 10;
    sum += remainder * remainder * remainder;
    temp = parseInt(temp / 10); 
}
if (sum == number) {
    console.log(`${number} is an Armstrong number`);
}
else {
    console.log(`${number} is not an Armstrong number.`);
}

