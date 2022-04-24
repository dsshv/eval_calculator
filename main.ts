function spacesRemove(str){
    let newStr = '';
    for (let i = 0; i < str.length; i++){
        if (str[i] == ' ')
            continue;
        newStr += str[i];
    }
    return newStr;
}

function checkStringIsValid(checkedString){
    const ALLOWED_SYMBOLS = '1234567890-+*/=()'
    for (let currentChar of checkedString){
        if (ALLOWED_SYMBOLS.indexOf(currentChar) == -1) {
            return false;
        }
    }
    return true;
}

function evalFunc(mathExpression){
    while((mathExpression.indexOf("(") != -1) && (mathExpression.indexOf(")") != -1)) {
        let right = mathExpression.indexOf(')');
        let left = mathExpression.lastIndexOf('(', right) + 1;
        let newStr = mathExpression.substring(right, left);
        newStr = parseString(newStr);
        mathExpression = mathExpression.substring(0, left - 1) + evalFunc(newStr) + mathExpression.substring(right + 1);
    }
    mathExpression = parseString(mathExpression)
    return mathExpression
}

function parseString(newStr){
    while (parseNumber(newStr).length != newStr.length) {
        let argA = parseNumber(newStr);
        let argB = parseNumber(newStr.substring(argA.length + 1));
        let mathOperation = newStr[argA.length];
        let result = (mathOperation == '-') ? () => Number(argA) - Number(argB) :
            (mathOperation == '+') ? () => Number(argA) + Number(argB) :
                (mathOperation == '*') ? () => Number(argA) * Number(argB) :
                    () => Number(argA) / Number(argB);
        newStr = String(result()) + newStr.substring(argA.length + argB.length + 1);
    }
    return newStr
}

function parseNumber(str){
    const NUMBERS = '1234567890';
    let number = str[0];
    if ((number == '/') || (number == '*')) return 'Error. Number cannot start with "/" or "*"';
    for (let i = 1; i < str.length; i++){
        if (NUMBERS.indexOf(str[i]) != -1){
            number += str[i];
        } else break;
    }
    return number
}

function calculate(str){
    if (!checkStringIsValid(str)) return `String "${str}" contains invalid symbols`;
    str = spacesRemove(str);
    return evalFunc(str);
}

