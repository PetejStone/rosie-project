const myDropdownAbout = document.getElementById("myDropdownAbout");
const myDropdownContact = document.getElementById("myDropdownContact");
const myDropDownFilm = document.getElementById("myDropdownFilm").classList.toggle("showFilm");
const myDropDownBand = document.getElementById("myDropdownFilm").classList.toggle("showFilm");
const button = document.querySelectorAll('button');
const body = document.getElementsByTagName('body')[0];
const rosieFilm = document.getElementById('rosieFilm');
const rosieBand = document.getElementById('rosieBand');
const about = document.getElementById('about');
const contact = document.getElementById('contact');


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
about.addEventListener('click',()=> {
  myDropdownAbout.classList.toggle("showAbout");
  myDropdownContact.classList.remove('showContact');

});


contact.addEventListener('click',()=> {
  myDropdownContact.classList.toggle("showContact");
  myDropdownAbout.classList.remove('showAbout');
});

rosieFilm.addEventListener('click', ()=>{
  myDropdownBand.classList.remove('showBand');
  myDropdownFilm.classList.toggle("showFilm");
  myDropdownAbout.classList.toggle("showAbout");
  

});

rosieBand.addEventListener('click',()=>{
  myDropdownFilm.classList.remove('showFilm');
  myDropdownBand.classList.toggle("showBand");
  myDropdownAbout.classList.toggle("showAbout");
});













// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {

  if (event.target === body || event.target.parentElement === body || event.target.parentElement.parentElement === body ) {
        myDropdownAbout.classList.remove('showAbout');
        myDropdownContact.classList.remove('showContact');
        myDropdownBand.classList.remove('showBand');
        myDropdownFilm.classList.remove('showFilm');

      }

};



// Close the dropdown if the user clicks outside of it
document.body.addEventListener('touchstart', ()=>{
  if (event.target === body || event.target.parentElement === body || event.target.parentElement.parentElement === body ) {
        myDropdownContact.classList.remove('showContact');
        myDropdownAbout.classList.remove('showAbout');
        myDropdownBand.classList.remove('showBand');
        myDropdownFilm.classList.remove('showFilm');

      }

})
