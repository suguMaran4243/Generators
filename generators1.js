const counter=function *()
{
    
    
    yield 1;
    yield 2
    yield 3;

}
const counterGenerator=counter();
console.log(counterGenerator.next());
console.log(counterGenerator.next());
console.log(counterGenerator.next());

const newGen=function*()
{
    yield 1;
    yield 2;
    yield 3;
}

const counterGenerator1=newGen();
let counterObj=counterGenerator1.next();
while(counterObj.done==false)
{
    console.log(counterObj.value)
    counterObj=counterGenerator1.next();
}
//return --It is to stop iteration inside generatorss..
