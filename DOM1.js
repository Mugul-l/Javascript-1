//  What is the DOM?
   
// DOM = Document Object Model--> browser’s representation of HTML.
// When a web page loads, the browser creates a tree-like structure of the page called the DOM.
// Each HTML element becomes an object (a node) inside this tree, which JavaScript can access and manipulate. Basically Works like a tree of nodes (document → html → head/body → elements).


//1. getElementBy...   -->  These are the old-school methods in JavaScript. They are specific and give you HTML elements directly

// getElementById → returns just one element. (cuz id is unique)
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

//querySelector → one element (first match).
//querySelectorAll → all elements (NodeList).  to do the dom manipulation in queryselectprall we need to pass the index as it returns the nodelist. like:- lists[0].style.bgcolor='red'
// For nodelist there is no map() function to iterate through the whole list but there is Foreach to do the same. But if you want to use map() we have to convert it to array first then we can use.
// Ex-          lists.forEach((lst)=>{
//              lst.style.backgroundColor='blue'
//                   }   )

//get attribute/SetAttribute
document.getElementById('Id-name').getAttribute('attribute-name')
document.getElementById('Id-name').setAttribute('attribute-name','set-new-name')

//To access inner contents---
id.innerText //Returns the visible text (what the user sees) .Ignores HTML tags and hidden elements (display:none, visibility:hidden).Triggers reflow (calculates CSS styles), so it’s slower than textContent.
id.innerHTML //Returns or sets the HTML content of an element (including tags).
id.textContent //Returns all text inside the element, regardless of CSS.Does not parse HTML, just gives raw text.Much faster than innerText (no reflow).