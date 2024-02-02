const counter=function*()
{
    let i=0;
    while(true)
    {
        yield i;
        i++;
    }
}
const counterGenerator=counter();
for(const value of counterGenerator)
{
    console.log(value)
}