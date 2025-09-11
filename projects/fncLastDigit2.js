function lastDigit(a){
    var b = a%10;
    return b;
}
var a = 326;
console.log("Digit Assigned: ",a);
var k = lastDigit(a);
console.log('Last Digit is: ',k);