let array = [1, 2, 3, 4, 5, 6];
let sum = 0;
let product = 1;
let i;
for (i = 0; i < array.length; i ++) 
   {
    sum = sum+array[i];
    product =product* array[i];
    }
console.log('Sum is:'+sum +'Product is:', +product);


/2nd program:find the duplicate element/ 

function Duplicate(arr){
let result=arr.filter((item,temp,array) => array.indexOf(item)!==temp);
return result;
}
 console.log(Duplicate([1,4,4,5,7,7,6])); 



/4th program :specific elements/
const number=[1,3,34,66,71,15]
let odd=number.filter((value)=>
{
return value %2==1;
});
console.log(' odd numbers: ' +odd);

/5th program:find missing number/ 
let array = [5,3,4,6,1,9, 7]
  missing = []
  count=10;
for (let i = 1; i <= count; i++) {
  if (array.indexOf(i) == -1) {
    missing.push(i)
  }
}
console.log(missing)

/7th  program:only above 18/ 
let eligible=[{
    name:'geetha' ,age:60},{
    name:'abi' ,age:10},{
    name:'latha' ,age:40},{
    name:'js' ,age:28},{
    name:'ganga' ,age:79},{
    name:'raj' ,age:14},{
    name:'ram' ,age:50},{
    name:'rani',age:47},{
    name:'azar',age:67},{
    name:'samna',age:25},{ 
     name:'seetha' ,age:60},{
      name:'abirami' ,age:10},{
      name:'kumar' ,age:40},{
      name:'jaya' ,age:28},{
    name:'gayathri' ,age:79},{
     name:'sushmi' ,age:14},{
    name:'hari' ,age:50},{
     name:'ravi',age:47},{
    name:'salman',age:67},{
     name:'nazreen',age:25}, 
    ]
    let above18=eligible.filter((value)=>{
    return value.age>=18;
    });
    console.log(above18)
    
    /8th reverse a string/ 
    function reverseString(str) {
        let newString = "";
        for (let i = str.length - 1; i >= 0; i--) {
            newString += str[i];
        }
        return newString;
    }
    const string = (' aishwarya  ');
    
    const result = reverseString(string);
    console.log(result);

    / 9th program:append/ 
    
function insertObject(arr, obj) {
    arr.push(obj);
    console.log(arr);
}
let array = [1, 2, 3];
let object = {x: 12, y: 8};
insertObject(array, object);



/3rd program:merge two array and remove duplicate element/
function merge_array(array1, array2) {
    let array3 = []
    let temp = array1.concat(array2);   
    let len = temp.length;
    let merge = {};
   while(len--) {
        let item = temp[len];

        if(!merge[item]) 
        { 
            array3.unshift(item);
            merge[item] = true;
        }
    }
    return array3;
}
let array1 = [1, 2,4, 64,889,3];
let array2 = [2,34,67,889,4,5];


/10th armstrong:armstrong/
let sum = 0;
const number = 153;
let temp = number;
while (temp > 0) {
    let remainder = temp % 10;
    sum =sum+ remainder * remainder * remainder;
    temp = parseInt(temp / 10); 
}
if (sum == number) {
    console.log('yes');
}
else {
    console.log('no');
}

/prime or not/ 
var number,chk=0;
number=25;
for(let i=2; i<number; i++)
{
  if(number%2==0)
  {
    chk++;
    break;
  }
}
if(chk==0)
  console.log(number + " is a Prime Number");
else
  console.log(number + " is not a Prime Number");

/captailize/   
function capitalizeFirstLetter(str) {
   
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
    return capitalized;
}
const string = prompt('Enter a string: ');
const result = capitalizeFirstLetter(string);
console.log(result);

/palindrome/
function checkPalindrome(string) {
    const len = string.length;
    for (let i = 0; i < len / 2; i++) {
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}
const string = prompt('Enter a string: ');
const value = checkPalindrome(string);
console.log(value); 

/find largest number/ 
function print2largest(array,array_size){
    let i;
    let largest =second =-62197
for(i=o;i<array_size ;i++)
   if(array[i]>largest){
       largets=array[i];
   }}
   for(i=0;i<=array_size;i++){
       if (array[i]>second&& array[i]<largest){
           second=array[i];
       }
   }

   if(second==-62197){
       console.log("the second largest element is"+sum);
       return;
   }
   }

   let array =[12,54,678,8989]
   let n=array.length;
   print2largest(array,n);