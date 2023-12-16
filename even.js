var i,sum=0;
for(i=1;i<=20;i++)
if(i%2==0)
var sum=sum+i;
{
    console.log(sum) ;
}



var n=567,r,sum=0;
    while (n > 0)
    {
        r=n%10;
        sum=(sum*10)+r;
       n=Math.trunc(n/10);
    }
    console.log("reverse number",sum);