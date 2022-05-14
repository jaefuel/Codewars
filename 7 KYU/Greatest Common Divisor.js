// Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.
// The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

function mygcd(x,y)
{

    let testNum;


    if (x > y)
    {
        testNum = x;
    }
    else
    {
        testNum = y;
    }

    for (let i = testNum; i >= 1; i--)
    {
        if (y % i == 0 && x % i == 0)
        {
            return i;
            
        }
    }
}


console.log(mygcd(30,12));
//6