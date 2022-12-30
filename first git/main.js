var header =document.querySelector("#main-header");
header.getElementsByClassName.borderBottom="solid 4px #CCC"
var items = document.querySelector(".list-group-item:nth-child(1)")

console.log(items)
items.style.color="green";
var itemList=document.querySelector("#items");
itemList.parentNode.style.backgroundColor="#f4f4f4"

itemList.lastElementChild.textContent="Hello1";
console.log(itemList.lastChild);
itemList.firstElementChild.textContent="Hello2"
console.log(itemList.firstChild)
console.log(itemList.nextSibling);
console.log(itemList.nextElementSibling);
console.log(itemList.previousSibling)

console.log(itemList.previousElementSibling)


var newDiv =document.createElement('div')
newDiv.className='hello'
newDiv.id="hello"
newDiv.setAttribute('title','Hello Div');
var newDivText=document.createTextNode('Hello');
newDiv.appendChild(newDivText)
console.log(newDiv);
var container =document.querySelector('header .container')
var h1 =document.querySelector('header h1')
container.insertBefore(newDiv,h1)
let item =document.createElement("li")
item.textContent="Hello"
var newcontainer =document.getElementById("items")
var h1 =newcontainer.firstElementChild
newcontainer.insertBefore(item,h1)


