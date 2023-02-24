
let profile = document.getElementById('profile');
console.log(profile);

let bione = document.getElementById('bione');
console.log(bione);

let bitow = document.getElementById('bitow');
console.log(bitow);

let bithre = document.getElementById('bithre');
console.log(bithre);



bione.addEventListener('click',function()
{
  profile.style.backgroundImage='url("/Ammar/images/pexels-calebe-miranda-793166.jpg")';
})

bitow.addEventListener('click',function()
{
  profile.style.backgroundImage='url("/Ammar/images/pexels-francesco-ungaro-2325446.jpg")';
})

bithre.addEventListener('click',function()
{
  profile.style.backgroundImage='url("/Ammar/images/pexels-joão-vítor-heinrichs-5022456.jpg")';
})



const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));






let like = document.getElementById('like');
console.log(like)


let num = document.getElementById('num');
console.log(num)



like.addEventListener('click',function()
{

  like.style.color='#1b86f9'
ST.innerText=Number(ST.innerText)+1

})







// let Exit = document.getElementById('Exit');
// Exit.addEventListener('click',function()
// {
//   window.alert('mero')

// })