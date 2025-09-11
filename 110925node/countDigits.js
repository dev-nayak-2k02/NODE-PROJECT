
const countDigits = (n)=>{
    let count = 0;
    while(n!=0){
        count++;
        n = parseInt(n/10);
    }
    return count;
}
export default countDigits