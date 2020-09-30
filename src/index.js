const humanNumbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const tensNumbers = [' ', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 
                    'seventy', 'eighty', 'ninety', 'hundred', 'thousand', 'million'];

//number = 526;
module.exports = function toReadable(number) {
    let res = '';
   // function toReadable (number) {
    let str = number.toString();
    if(str.length==3){
        res=humanNumbers[str[0]]+' '+tensNumbers[10]+' '
            +tensNumbers[str[1]]+' '+humanNumbers[str[2]];
      //  console.log(res);
      //  console.log(str);
    }
    
    return res;
}

//toReadable(number)


