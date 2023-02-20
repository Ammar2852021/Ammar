// const toggleButton = document.querySelector('.dark-light');
// const colors = document.querySelectorAll('.color');



// colors.forEach(color => {
//   color.addEventListener('click', (e) => {
//     colors.forEach(c => c.classList.remove('selected'));
//     const theme = color.getAttribute('data-color');
//     document.body.setAttribute('data-theme', theme);
//     color.classList.add('selected');
//   });
// });

// toggleButton.addEventListener('click', () => {
//   document.body.classList.toggle('dark-mode');
// });



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
  profile.style.backgroundImage='url("/Ammar/images/pexels-joão-vítor-heinrichs-5022456.jpg")';
})

bitow.addEventListener('click',function()
{
  profile.style.backgroundImage='url("/images/pexels-jeremy-bishop-2923595.jpg")';
})

bithre.addEventListener('click',function()
{
  profile.style.backgroundImage='url("/images/pexels-francesco-ungaro-2325446.jpg")';
})
