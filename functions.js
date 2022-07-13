function stringLength(String){
   
    const num = String.length;
    if(num <1 || num > 10 ){
        throw new Error('You word is long than 10.');
    }else {
        return num;
    }
}

function reverseString(str) {
    const splitString = str.split("");
   const reverseArray= splitString.reverse();
   const newWord = reverseArray.join("");
   return newWord;
}

class calculator {

add(a,b){
return a + b;
}

  subtract(a,b){
    return a - b;
   }

   divide (a,b ){
    return a/b;
   }

   multiply(a,b){
        return a*b;
   }

}

function uperCase(string){
    const index=string.charAt(0).toUpperCase() + string.slice(1);
    return index;

}
module.exports = { stringLength, reverseString , calculator ,uperCase }