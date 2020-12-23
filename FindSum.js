//const one = "I";
//const two = "Love vscode"
//console.log(`${one} ${two}`);

var numbers = [-1, 1, 2, 3, 5, 8];
var search = 6;

var ops = 0;

var found = false;
/*
for (i=0; i < numbers.length; i++)
{
    if (found)
        break;

    console.log(`${numbers[i]}` );

    for (j=i+1; j < numbers.length; j++)
    {
        console.log(`${numbers[i]} ${numbers[j]}`);
        ops++;
        if (numbers[i] + numbers[j] == search)
        {
            found = true;
            console.log(`Found: ${numbers[i]} ${numbers[j]}`);
            break;
        }
    }
}
*/

var first = 0;
var last = numbers.length - 1;

while ( !found && first < last )
{
    ops++;
    var theSum = numbers[first] + numbers[last];
    if (theSum == search)
    {
        found = true;
        console.log(`Found: ${numbers[first]} ${numbers[last]}`);
    }
    else if (theSum < search)
    {
        first++;
    }
    else if (theSum > search)
    {
        last--;
    }
    else
    {
        console.log("Nil");
    }
}

// Same
if (!found)
{
    console.log("Not found");
}

console.log(`ops: ${ops}`);
// 22 -> j=i
// 15 -> j =i+1
// 10 -> break
