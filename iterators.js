const arr1=[1,2,3,4];
for(let i of arr1)//arr1 is an itterable [array is  an itterable]
{
    console.log(i);
}
const numberIterator=arr1[Symbol.iterator]();
console.log(numberIterator.next());
console.log(numberIterator.next());
console.log(numberIterator.next());
console.log(numberIterator.next());
console.log(numberIterator.next());