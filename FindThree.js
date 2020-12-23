
var numbers = [ 1, 2, 3, 4, 5, 8, 12];

var search = 16;

var ops = 0;

var found = false;

for (i=0; i<numbers.length; i++) {
    var first = i + 1;
    var last = numbers.length - 1;
    var newSearch = search - numbers[i];

    while (first < last && !found){
        ops++;

        var theSum = numbers[first] + numbers[last];

        if (theSum < newSearch) {
            first++;
        }
        else if (theSum > newSearch) {
            last--;
        }
        else {
            found = true;
            console.log(`Found: ${numbers[i]} ${numbers[first]} ${numbers[last]}`);
            break;
        }
    }

}

if (!found)
{
    console.log("Not found");
}

console.log(`ops: ${ops}`);
