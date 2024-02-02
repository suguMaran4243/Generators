const counter=function*()
{
    yield 1;
    yield *[2,3,4];
    yield 5;

}
const counterGenerator=counter();
console.log(counterGenerator.next());
console.log(counterGenerator.next());
console.log(counterGenerator.next());
console.log(counterGenerator.next());
console.log(counterGenerator.next());
