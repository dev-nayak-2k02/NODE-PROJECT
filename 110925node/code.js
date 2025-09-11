import countDigits from "./countDigits.js";
import numCheck from "./numCheck.js";
function checkArmstrong (n){
    let sum = 0;
    
    let count = countDigits(n);
    
    let numCheckAns = numCheck(count, n);
    if(n === numCheckAns ){
        console.log(`Yes, ${n} is An Armstrong number`);
    } else {
        console.log(`No, ${n} is not An Armstrong number`);
    }
}
// checkArmstrong(153);

export default checkArmstrong;