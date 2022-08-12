
module.exports = function toReadable(number) {

    let n = {
            0 : '',
            1 : 'one',
            2 : 'two',
            3 : 'three',
            4 : 'four',
            5 : 'five',
            6 : 'six',
            7 : 'seven',
            8 : 'eight',
            9 : 'nine',
            10 : 'ten',
            11 : 'eleven',
            12 : 'twelve',
            13 : 'thirteen',
            14 : 'fourteen',
            15 : 'fifteen',
            16 : 'sixteen',
            17 : 'seventeen',
            18 : 'eighteen',
            19 : 'nineteen',
            20 : 'twenty',
            30 : 'thirty',
            40 : 'forty',
            50 : 'fifty',
            60 : 'sixty',
            70 : 'seventy',
            80 : 'eighty',
            90 : 'ninety',
            },
            answer = '';
        
        if (number == 0) { return 'zero'} // 0
        
    if (number > 0 && number < 20 || number > 19 && number < 100 && number.toString()[1] == '0') {// for 1-10 and all the -0 numbers till 99
        return n[number]
    }
    
    else if (number > 19 && number < 100 && number.toString()[1] != '0') { // for all the other numbers 20-99
        return n[number.toString()[0]*10] + ' ' + n[number.toString()[1]];
        }
        
        else if (number > 99) { // numbers from 100
            if (number.toString()[1] == '0' && number.toString()[2] == '0') { // all the hundreds -00
                return n[number.toString()[0]] + ' hundred';
            }
            else if (number.toString()[1] == '0') { // -0- numbers
                return n[number.toString()[0]] + ' hundred ' + n[number.toString()[2]];
            }

            else if (number.toString()[2] == '0') {  // --0 numbers
                return n[number.toString()[0]] + ' hundred ' + n[number.toString()[1]*10];
            }

            else if (number.toString()[1] == '1') { // -1- numbers
                return n[number.toString()[0]] + ' hundred ' + n[Number(number.toString()[1]) + number.toString()[2]];
            }
            else {
                return n[number.toString()[0]] + ' hundred ' + n[number.toString()[1]*10] + ' ' + n[number.toString()[2]];
                
            }
        }
        return(answer);
}
