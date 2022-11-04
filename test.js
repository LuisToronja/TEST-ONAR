function invertDigits(){
    for (let i = 0; i < dataArray.length; i++) {
        dataArray[i] = dataArray[i].replaceAll('0','2');
        dataArray[i] = dataArray[i].replaceAll('1','0');
        dataArray[i] = dataArray[i].replaceAll('2','1');
        console.log(dataArray[i]);
    }
}

function binaryToDecimal(){
    for (let i = 0; i < dataArray.length; i++) {
        dataArray[i] = parseInt(dataArray[i], 2);
        console.log(dataArray[i]);
    }
}

function decimalToASCII(){

}

var dataArray = ['0100110', '0010000', '0001010', '011111', '0010111', '0011110', '0001001', '0011010', '011111', 
    '0001111', '0011110', '0001100', '0001100', '0011010', '0011011', '011111', '0001011', '0010111', '0011010', 
    '011111', '0001011', '0011010', '0001100', '0001011', '010011', '011111', '0011000', '0001101', '0011010', 
    '0011110', '0001011', '011111', '0010101', '0010000', '0011101', '011110'];

invertDigits();
binaryToDecimal();