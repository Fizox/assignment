// Task 2
function sumAndTotal(array){
    const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue);
    const average = sum/array.length ; 
    return {sum,average};
    
}
// Task 3
function removeDuble(array){
    let a =[];
    array.map(x=>!a.includes(x)?a.push(x):"");
    return a ;

}
console.log(sumAndTotal([5,6,8]));
console.log(removeDuble(["Faris","Faris","AbuShaban","AbuShaban",1,1,1,2,2,3]))