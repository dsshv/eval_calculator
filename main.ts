export function spacesRemove(str: string){
    let newStr: string = '';
    for (let i = 0; i < str.length; i++){
        if (str[i] == ' ')
            continue;
        newStr += str[i];
    }
    return newStr;
}

function checkStringIsValid(checkedString: string){
    const ALLOWED_SYMBOLS: string = '1234567890-+*/() ';
    for (let currentChar of checkedString){
        if (ALLOWED_SYMBOLS.indexOf(currentChar) == -1) {
            return false;
        }
    }
    return true;
}

function evalFunc(mathExpression: string){
    while((mathExpression.indexOf("(") != -1) && (mathExpression.indexOf(")") != -1)) {
        let right: number = mathExpression.indexOf(')');
        let left: number = mathExpression.lastIndexOf('(', right) + 1;
        let newStr: string = mathExpression.substring(right, left);
        newStr = parseString(newStr);
        mathExpression = mathExpression.substring(0, left - 1) + evalFunc(newStr) + mathExpression.substring(right + 1);
    }
    mathExpression = parseString(mathExpression)
    return mathExpression
}

function parseString(newStr: string){
    while (parseNumber(newStr).length != newStr.length) {
        let argA: string = parseNumber(newStr);
        let argB: string = parseNumber(newStr.substring(argA.length + 1));
        let mathOperation: string = newStr[argA.length];
        let result = (mathOperation == '-') ? () => Number(argA) - Number(argB) :
            (mathOperation == '+') ? () => Number(argA) + Number(argB) :
                (mathOperation == '*') ? () => Number(argA) * Number(argB) :
                    () => Number(argA) / Number(argB);
        newStr = String(result()) + newStr.substring(argA.length + argB.length + 1);
    }
    return newStr
}

function parseNumber(str: string){
    const NUMBERS: string = '1234567890';
    let parsedNumber: string = str[0];
    if ((parsedNumber == '/') || (parsedNumber == '*')) return 'Error. Number cannot start with "/" or "*"';
    for (let i = 1; i < str.length; i++){
        if (NUMBERS.indexOf(str[i]) != -1){
            parsedNumber += str[i];
        } else break;
    }
    return parsedNumber
}

export function calculate(str: string){
    if (checkStringIsValid(str) == false) return `String "${str}" contains invalid symbols`;
    str = spacesRemove(str);
    return evalFunc(str);
}

console.log(calculate('5 + (25 - 15) * 3 - (7 * 3)'))

