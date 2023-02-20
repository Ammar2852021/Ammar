
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
  profile.style.backgroundImage='url("https://images.pexels.com/photos/845242/pexels-photo-845242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")';
})

bitow.addEventListener('click',function()
{
  profile.style.backgroundImage='url("https://images.pexels.com/photos/2923595/pexels-photo-2923595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")';
})

bithre.addEventListener('click',function()
{
  profile.style.backgroundImage='url("https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")';
})
