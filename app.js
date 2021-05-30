"use strict";
var select = function (el, all) {
    if (all === void 0) { all = false; }
    el = el.trim();
    var element;
    if (all) {
        element = Array.from(document.querySelectorAll(el));
    }
    else {
        element = document.querySelector(el);
    }
    if (element === null || element === undefined || element.length === 0) {
        console.log('no selection occured');
    }
    else {
        return element;
    }
};
var inputText = select('#inputText');
var outputText = select('#OutputText');
var inputChangeFunction = function () {
    var lowerCaseVal = inputText.value.toLowerCase();
    outputText.value = lowerCaseVal;
};
inputText.addEventListener('input', function () {
    inputChangeFunction();
});
