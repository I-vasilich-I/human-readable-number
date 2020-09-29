const humanNumbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const tensNumbers = ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 
                    'seventy', 'eighty', 'ninety', 'hundred', 'thousand', 'million'];
let res = '';

module.exports = function toReadable (number) {
    
    if (number%1000000 >= 1){
        res += humanNumbers[number[0]] + tensNumbers[12];
        
    } 
    
}


