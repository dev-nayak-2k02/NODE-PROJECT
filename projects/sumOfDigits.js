var num = 112;
var sum = 0;
while(num!=0){
    var rem = num%10;
    sum = parseInt(sum+rem);
    var num = parseInt(num/10);
}
console.log('Answer is: ',sum);