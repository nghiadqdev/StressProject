import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('screen');

function isEmptyObj(obj) {
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            return false;
        }
    }
    return JSON.stringify(obj) === JSON.stringify({});
}

const isEmptyArray = (array) => {
    return !Array.isArray(array) || !array.length;
};

function replaceSpace(str) {
    return str.replace(/\u0020/, "\u00a0");
}

// standar is iphone 12: 844 x 390  6.1 inch
const normalize = (fontSize, standardScreenHeight = 844): number => {
    const standarHeight = height;
    const standarWidth = width;
    const inch = Math.sqrt(standarHeight * standarHeight + standarWidth * standarWidth)
    const defaultInch = Math.sqrt(844 * 844 + 390 * 390)
    let resoultNum = Math.floor(fontSize * inch / defaultInch) * 100
    return parseFloat((resoultNum / 100).toFixed(2));
};

const scaleHeight = (number, standardLength = 844) => {
    let heightS = number * (height) / standardLength
    return Math.floor(heightS)
}

const scaleWidth = (number, standardLength = 390) => {
    let widthS = number * (width) / standardLength
    return Math.floor(widthS)
}

export {
    isEmptyArray,
    isEmptyObj,
    replaceSpace,
    normalize,
    scaleHeight,
    scaleWidth
}