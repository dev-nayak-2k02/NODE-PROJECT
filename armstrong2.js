let checkArmstrong = (n)=> {
    let sum = 0;
    const countDigits = (n)=>{
        let count = 0;
        while(n!=0){
            count++;
            n = parseInt(n/10);
        }
        return count;
    }
    let count = countDigits(n);
    let numCheck = function(count, n){
        let add = 0;
        for(var i = 1; i<=count; i++){
            let d = n%10;
            let p = 1;
            let multiply = function(count, p, d) {
                let r = p;
                for(var j=1; j<=count; j++){
                    r = r*d;
                }
                return r;
            }
            let mulAns = multiply(count, p, d);
            add += mulAns;
            n = parseInt(n/10);
        }
        return add;
    }
    let numCheckAns = numCheck(count, n);
    if(n === numCheckAns ){
        console.log("yes");
    } else {
        console.log("No");
    }
}

let ans = checkArmstrong(10);
