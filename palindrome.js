var n=33,r,sum=0;
    var temp=n;
    while (n > 0)
    {
        r=n%10;
        sum=(sum*10)+r;
        n=Math.trunc(n/10);
    }
    if(temp==sum)
    {
        console.log("it is a palindrome number");
    }
    else
    {
        console.log(" it is not a palindrome number");
    }