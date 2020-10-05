const humanNumbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const tensNumbers = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 
                    'seventy', 'eighty', 'ninety', 'hundred', 'thousand', 'million'];
const elevenToNinteen = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']

module.exports = function toReadable(number) {
    let res = '';
    let str = number.toString();
    let twoDigitNumber, oneDigitNumger;
    if (number<10) {
        res = humanNumbers[number];
    }
    
    if (number>=100){
            twoDigitNumber = parseFloat(str.slice(1,3)); 
            oneDigitNumger = parseFloat(str.slice(2,3));
        if (twoDigitNumber<20 && twoDigitNumber>10) {
            res=humanNumbers[str[0]]+' '+tensNumbers[10]+' '
            +(elevenToNinteen[twoDigitNumber-10]); 
        } else {
            res=humanNumbers[str[0]]+' '+tensNumbers[10]+
            (tensNumbers[str[1]]=='' ? '' : ' '+tensNumbers[str[1]])+
            (oneDigitNumger!=0 ? ' '+humanNumbers[str[2]] : '');
        } 
    } else if (number>=10){
        twoDigitNumber = parseFloat(str.slice(0,2)); 
        oneDigitNumger = parseFloat(str.slice(1,2));
        if (twoDigitNumber<20 && twoDigitNumber>10) {
            res=(elevenToNinteen[twoDigitNumber-10]); 
        } else {
            res=tensNumbers[str[0]]+(oneDigitNumger!=0 ? ' '+humanNumbers[str[1]] : '');
        } 
    }
    
    return res;
}
