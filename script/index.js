console.log('this is working');


var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];

const flavors = ['Kiwi', 'Sponge Bob', 'Orange Cream', 'Red Lips', 'Blue Lips', 'Strawberry', 'Grape', 'Blueberry', 'Chocolate', 'Coffee', 'Cotton Candy', 'cherry'];
const submenuItems = document.querySelector('.submenu-items');
console.log(submenuItems);
console.log(submenuItems.parentElement);

const flavorsMenuEl = document.querySelector('.submenu-items');
console.log(flavorsMenuEl);

//class list & i con't get this to work :(
flavorsMenuEl.addEventListener('click', () => {
    submenuItems.classList.toggle('visible');
    
  });

flavors.forEach(function(flavor) {
  const liEl = document.createElement('li');
  console.log(liEl);

  const aEl = document.createElement('a');
  console.log(aEl);

  aEl.href = `#${flavor.toLowerCase().replace(/ /g, '-')}`;
  aEl.textContent = flavor;

  liEl.appendChild(aEl);
  submenuItems.appendChild(liEl);

  aEl.addEventListener('click', function() {
    submenuItems.classList.toggle('active');
  });
});


const mainEl = document.getElementById('h-1');
console.log(mainEl);
mainEl.style.color = 'black';
mainEl.style.textAlign ='center'; 

let pEl = document.querySelector('p'); 
console.log(pEl);
console.log(NodeList);

//modify the HTML content
pEl.innerHTML = '<strong>A Cool Treat <br> Fit For Any Day</strong>';


for (let i = 0; i < menuLinks.length; i++) {
    var link = menuLinks[i]; 
    
    //create an <a> element
var aEl = document.createElement('a');

//add href attribute w/it's value of the href property of the 'link' object
 aEl.href = link.href;

//append new element to the topMenuEl
 document.body.appendChild(aEl);

 }
//cache <nav id ="top-menu"> element to topMenuEl
mainEl.innerHTML = "<h1> DEEZ COLD ONES <br> SNOW CONES </h1>";
mainEl.style.textAlign = "center";
mainEl.classList.add("flex-ctr");

//getElementById & parent element
const topMenuEl = document.getElementById('top-menu');
const parentEl = topMenuEl.parentEl;
console.log(topMenuEl);

topMenuEl.style.height = '60px';
topMenuEl.style.backgroundColor = '#faf0dc';
topMenuEl.classList.add('flex-around');

//iterate over menuLinks array and for each 'link' object
for (let i = 0; i < menuLinks.length; i++) {
    var link = menuLinks[i];
    
//create an <a> element
let aEl = document.createElement('a');
console.log(aEl);

//append new element to the topMenuEl
topMenuEl.prepend(aEl);  //had to google/append put the array to the side of pg/'PREPEND' puts at top
}

document.addEventListener("DOMContentLoaded", function() {
    let input = document.querySelector("input[type='text']");
    let button = document.querySelector("button");
  
    button.addEventListener("click", function() {
      const value = input.value;
      processInput(value);
    });
  
    //event listener with associated event handler function & input
    input.addEventListener("keydown", function(event) {
      if (event.keyCode === 13) {
        const value = input.value;
        processInput(value);
      }
    });
  
    function processInput(value) {
      // Do something with the input value, e.g. display it on the page
      alert("You entered: " + value);
      console.log(processInput);
    }
  });
