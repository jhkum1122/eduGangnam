import exp from "constants";

const { JSDOM } = require("jsdom");

// HTML document 생성
const dom = new JSDOM(`<!DOCTYPE html><html><body></body></html>`);

// document 객체 얻기
const document1 = dom.window.document;

let pPhysicalDOM = document1.createElement("p");
pPhysicalDOM.innerText = "Hello physicalDOM world!";

document.body.appendChild(pPhysicalDOM);

export {};

/*
// Import jsdom
const { JSDOM } = require("jsdom");

// Create a basic HTML document
const dom = new JSDOM(`<!DOCTYPE html><html><body></body></html>`);

// Get the document object from the DOM
const document = dom.window.document;

// Create a <p> element
const pPhysicalDOM = document.createElement("p");
pPhysicalDOM.textContent = "Hello, world!";

// Append the <p> element to the <body>
document.body.appendChild(pPhysicalDOM);

// Print the HTML content
console.log(document.body.innerHTML);


// Import jsdom
const { JSDOM } = require('jsdom');

// Create a basic HTML document
const dom = new JSDOM(`<!DOCTYPE html><html><body></body></html>`);

// Get the document object from the DOM
const document = dom.window.document;

// Create a <p> element
const pPhysicalDOM = document.createElement('p');
pPhysicalDOM.textContent = 'Hello, world!';

// Append the <p> element to the <body>
document.body.appendChild(pPhysicalDOM);

// Print the HTML content
console.log(document.body.innerHTML);
*/
