var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];

const flavors = ['Kiwi', 'Sponge Bob', 'Orange Cream', 'Red Lips', 'Blue Lips', 'Strawberry', 'Grape', 'Blueberry'];
const submenuItems = document.querySelector('.submenu-items');

flavors.forEach(function(flavor) {
  const liEl = document.createElement('li');
  const aEl = document.createElement('a');

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
mainEl.style.color = 'red';
mainEl.style.textAlign ='center'; 

for (var i = 0; i < menuLinks.length; i++) {
    var link = menuLinks[i]; 
    
    //create an <a> element
var aEl = document.createElement('a');

//add href attribute w/it's value of the href property of the 'link' object
 aEl.href = link.href;

//set new element content to the value of the text property of the 'link' object
 aEl.textContent = link.text;

//append new element to the topMenuEl
 document.body.appendChild(aEl);

 }
//cache <nav id ="top-menu"> element to topMenuEl
mainEl.innerHTML = "<h1> DEEZ COLD ONES <br> SNOW CONES </h1>";
mainEl.style.textAlign = "center";
mainEl.classList.add("flex-ctr");

const topMenuEl = document.getElementById('top-menu');
console.log(topMenuEl);
topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = '#ffff00';
topMenuEl.classList.add('flex-around');

//iterate over menuLinks array and for each 'link' object
for (var i = 0; i < menuLinks.length; i++) {
    var link = menuLinks[i];
    
//create an <a> element
var aEl = document.createElement('a');

//add href attribute w/it's value of the href property of the 'link' object
aEl.href = link.href;

//set new element content to the value of the text property of the 'link' object
aEl.textContent = link.text;

//append new element to the topMenuEl
topMenuEl.prepend(aEl);  //had to google/append put the array to the side of pg/'PREPEND' puts at top
}

//  let mainEl = document.querySelector('main');
// console.log(mainEl);

// mainEl.innerHTML = "<h1> DEEZ COLD ONES SNOW CONES </h1>";
// mainEl.style.textAlign = "center";
// mainEl.classList.add("flex-ctr");



//const topMenuEl = document.getElementById('top-menu');
//console.log(topMenuEl);
//topMenuEl.style.height = '100%';
//topMenuEl.style.backgroundColor = '#0e9aa7';
//topMenuEl.classList.add('flex-around');


// const navEl = document.getElementById('.navbar');
// console.log(navEl);
// 

// navEl.style.height = '100%';
// navEl.style.backgroundColor = '#9ACD32';
// navEl.classList.add('flex-around');
// 
// for (var i = 0; i < menuLinks.length; i++) {
    // var link = menuLinks[i];
    
//create an <a> element
// var aEl = document.createElement('a');

//add href attribute w/it's value of the href prope
// aEl.href = link.href;

//set new element content to the value of the text 
// aEl.textContent = link.text;

//append new element to the topMenuEl
// navEl.prepend(aEl);  //had to google/append put
// }


//let aTag = document.createElement('a');
//aTag.textContent = "visit google"; 
//aTag.setAttribute('href', 'https://www.google.com');
//console.log(aTag);

//document.body.appendChild(h2El);


// const pQuery = document.querySelector('p');
// console.log(pQuery);
// 
// let listEl = document.querySelectorAll('li');
// console.log(listEl);
// 
// listEl = document.querySelectorAll('.comment');
// console.log(listEl);
// 
// listEl.forEach(listItem => {
// console.log(listItem);
// console.log(listItem.textContent);
// console.log(listItem.parentNode); 
// });
// 
// document.querySelector('ul')
// .addEventListener('click', handleBtnClick);
// 
// function handleBtnClick(evt) {
    // console.log(evt.target);
    // let evtColor = evt.target.style.color;
    // console.log(evtColor);
    // if (evt == 'red') {
        // evt.target.style.color = 'black';
    // } else {
        // evt.target.style.color ='red';
    // }
// }
// 
// 

