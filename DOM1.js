//  What is the DOM?
   
// DOM = Document Object Model--> browser’s representation of HTML.
// When a web page loads, the browser creates a tree-like structure of the page called the DOM.
// Each HTML element becomes an object (a node) inside this tree, which JavaScript can access and manipulate. Basically Works like a tree of nodes (document → html → head/body → elements).


//1. getElementBy...   -->  These are the old-school methods in JavaScript. They are specific and give you HTML elements directly.

// getElementById → returns just one element.
// getElementsByClassName / getElementsByTagName → return a list of elements (not a single one).

document.getElementById('Id-name')
document.getElementsByClassName('Class-name')
document. getElementsByTagName('Tag-name')

//These are the newer, modern ways. They use CSS selectors (the same thing you use in CSS styling).
//query selector will give only one recent one in return o/p 

document.querySelector('#Id-name')
document.querySelector('.class-name')
document.querySelector('tag-name') 

//for all the ids/classes/tags use- querySlectorAll
document.querySelectorAll('#Id-name')
document.querySelectorAll('.class-name')
document.querySelectorAll('tag-name') 