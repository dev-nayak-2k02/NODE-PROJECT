let checkArmstrong = (n)=>{
    let m = n;
    //no.of digits
    let count = 0;
    while (n!=0) {
        count++;
        n = parseInt(n/10);
    }
    n = m;
    let sum = 0;
    for(let i=1; i<=count; i++){
        let d = n%10;
        let p = 1;
        for(let j=1; j<=count; j++){
            p *= d;
        }
        sum += p;
        n = parseInt(n/10);
    }
    if(m === sum){
        console.log(m, "is armstrong");
    } else {
        console.log(m, "is not armstrong");
    }
}
checkArmstrong(9474);