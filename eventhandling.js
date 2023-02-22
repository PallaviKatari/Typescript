"use strict";
exports.__esModule = true;
exports.initFunction = void 0;
//Event Handling
function initFunction() {
    var element = document.getElementById("sample");
    element === null || element === void 0 ? void 0 : element.addEventListener("click", listenerFunction);
    //element?.addEventListener("mouseenter", listenerFunction);
    element === null || element === void 0 ? void 0 : element.addEventListener("mouseleave", listenerFunction1);
}
exports.initFunction = initFunction;
//click & mouseenter
function listenerFunction(ev) {
    ev.preventDefault(); //prevent the default action
    this.style.backgroundColor = "red";
    this.style.marginLeft = '800px';
    this.style.borderRadius = '10px';
    this.style.height = '100px';
    this.style.width = '100px';
}
//mouseleave
function listenerFunction1(ev) {
    ev.preventDefault(); //prevent the default action
    this.style.backgroundColor = "pink";
    this.style.marginLeft = '400px';
    this.style.borderRadius = '40px';
    this.style.height = '150px';
    this.style.width = '150px';
}
