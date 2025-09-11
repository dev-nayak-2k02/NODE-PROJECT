let strongFunction = (num)=> {
    let copy = num;
    let sum = 0;
    const countDigits = (num)=>{
        let count = 0;
        while(num!=0){
            count++;
            num = parseInt(num/10);
        }
        return count;
    }
    let count = countDigits(num);
    num = copy;
    for(let j = 1; j<=count; j++){
        let rem = num%10;
        
        const factorial = (rem)=>{
            let fact = 1;
            for(let i = 1; i<=rem; i++){
                fact*=i;
            }
            return fact;
        }
        let fact = factorial(rem);
        sum+=fact;
        num=parseInt(num/10);
    }
    if(sum == copy){
        console.log('yes');
    } else {
        console.log('no');
    }
}
strongFunction(76);