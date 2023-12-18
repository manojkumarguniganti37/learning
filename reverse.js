var n=47,r,sum=0;
    while (n > 0)
    {
        r=n%10;
        sum=(sum*10)+r;
       n=Math.trunc(n/10);
    }
    console.log("reverse number",sum);