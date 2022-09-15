/*const arrayToFlap = [
  [1, 2, 3, 4],
  [77, 8, [12, 1, 66, [7,100,101,120,[121,215]]]],
];

function flap(arr) {
  let toFlap = [];
  arr.forEach(element => {
    if(Array.isArray(element))
      toFlap = toFlap.concat(flap(element));
    else 
      toFlap.push(element)
  });
  return toFlap;
}
 
const array = flap(arrayToFlap);

array.forEach(item => console.log(item))*/

const $ = element => document.querySelector(element);
const openMenu =  $('.open');
const closeMenu = $('.close');
const menu = $('.nav-list');

openMenu.addEventListener("click", ()=>{
    openMenu.classList.add('close')
    closeMenu.classList.add('show');
    menu.classList.add('showMenu')
})

closeMenu.addEventListener("click", ()=>{
    openMenu.classList.remove('close')
    closeMenu.classList.remove('show');
    menu.classList.remove('showMenu')
})


