'use strict';

var dic = [
    ['A', '.-'],
    ['B', '-...'],
    ['C', '-.-.'],
    ['D', '-..'],
    ['E', '.'],
    ['F', '..-.'],
    ['G', '--.'],
    ['H', '....'],
    ['I', '..'],
    ['J', '.---'],
    ['K', '-.-'],
    ['L', '.-..'],
    ['M', '--'],
    ['N', '-.'],
    ['O', '---'],
    ['P', '.--.'],
    ['Q', '--.-'],
    ['R', '.-.'],
    ['S', '...'],
    ['T', '-'],
    ['U', '..-'],
    ['V', '...-'],
    ['W', '.--'],
    ['X', '-..-'],
    ['Y', '-.--'],
    ['Z', '--..'],
    ['?', '..--..'],
    ['/', '-..-.'],
    ['[', '-.-..'],
    [']', '.---.'],
    ['-', '-....-'],
    ['.', '.-.-.-'],
    ['@', '--.-.'],
    ['*', '----'],
    ['$', '...-.'],
    ['#', '..--'],
    ['!', '..--.'],
    ['"', '.-..-.'],
    ['1', '.----'],
    ['2', '..---'],
    ['3', '...--'],
    ['4', '....-'],
    ['5', '.....'],
    ['6', '-....'],
    ['7', '--...'],
    ['8', '---..'],
    ['9', '----.'],
    ['0', '-----'],
];

/**
 * trim blank
 * @param str {string}
 * @returns {string}
 * @author yong.wei
 */
var trimEmpty = function (str) {
    var strList = str.split('');
    for (var i = 0; i < strList.length; i++) {
        if (strList[0] === ' ') {
            strList.shift();
        } else if (strList[strList.length - 1] === ' ') {
            strList.pop();
        } else {
            break;
        }
    }
    return strList.join('');
};

/**
 * verify character can be encode or not
 * @param str {string}
 * @returns {boolean}
 * @author yong.wei
 */
var isSpecialCharacter = function (str) {
    var isSpecial = true;
    dic.forEach(function (item) {
        if (item[0] === str) {
            isSpecial = false;
        }
    });
    return isSpecial;
};

/**
 * check input value and type
 * @param str
 * @returns {string}
 * @author yong.wei
 */
var verifyInputString = function (str) {
    if (str === null || str === '' || str === undefined) {
        return;
    }

    if (typeof str !== 'string') {
        return 'only string allowed';
    }
};

/**
 * check morse code is valid
 * @param str
 * @returns {boolean}
 * @author yong.wei
 */
var isValidMorseCode = function (str) {
    var isValid = false;
    dic.forEach(function (item) {
        if (item[1] === str) {
            isValid = true;
        }
    });
    return isValid;
};

/**
 * encode or decode with morse code
 * @type {{decode: morse.decode, encode: morse.encode}}
 * @author yong.wei
 */
var morse = {
    decode: function (str) {
        verifyInputString(str);
        var trimStrList = trimEmpty(str).split(' ');
        var len = trimStrList.length;
        var result = [];
        for (var i = 0; i < len; i++) {
            if (!isValidMorseCode(trimStrList[i])) {
                return 'some error in your morse code, please recheck it';
            } else {
                dic.forEach(function (dicItem) {
                    if (dicItem[1] === trimStrList[i]) {
                        result.push(dicItem[0]);
                    }
                });
            }
        }
        return result.join('');
    },

    encode: function (str) {
        verifyInputString(str);
        var trimStrList = trimEmpty(str).split('');
        var len = trimStrList.length;
        var result = [];

        if (trimStrList.indexOf(' ') > -1) {
            return 'do not include blank in encode string';
        }

        for (var i = 0; i < len; i++) {
            trimStrList[i] = trimStrList[i].toUpperCase();
            if (isSpecialCharacter(trimStrList[i]) === true) {
                return 'do not include special character in encode string';
            } else {
                dic.forEach(function (dicItem) {
                    if (dicItem[0] === trimStrList[i]) {
                        result.push(dicItem[1]);
                    }
                });
            }
        }
        return result.join(' ');
    },
};
export default morse;