const h1El = document.getElementById('h-1');
console.log(h1El);
h1El.style.color = 'red';
h1El.style.textAlign ='center'; 

const h2El = document.getElementById('h-2');
console.log(h2El);


//const topMenuEl = document.getElementById('top-menu');
//console.log(topMenuEl);
//topMenuEl.style.height = '100%';
//topMenuEl.style.backgroundColor = '#0e9aa7';
//topMenuEl.classList.add('flex-around');
//h2El.style.

const flavors = ['Kiwi', 'Sponge Bob', 'Orange Cream', 'Red Lips', 'Blue Lips', 'Strawberry', 'Grape', 'Blueberry'];
const choseEl = document.querySelector('select');

flavors.forEach(function(flavor) {
    const optionEl = document.createElement('option');

    optionEl.textContent = flavor;

    optionEl.value = flavor;

    choseEl.appendChild(optionEl)
})


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

