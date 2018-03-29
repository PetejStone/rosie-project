const myDropdownAbout = document.getElementById("myDropdownAbout");
const myDropdownContact = document.getElementById("myDropdownContact");
const button = document.querySelectorAll('button');
const body = document.getElementsByTagName('body')[0];

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function showAbout() {
    document.getElementById("myDropdownAbout").classList.toggle("showAbout");
    myDropdownContact.classList.remove('showContact');
}
function showContact() {
    document.getElementById("myDropdownContact").classList.toggle("showContact");
    myDropdownAbout.classList.remove('showAbout');
}




// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  console.log(event.target.parentElement)
  if (event.target === body || event.target.parentElement === body || event.target.parentElement.parentElement === body ) {
        myDropdownAbout.classList.remove('showAbout');
        myDropdownContact.classList.remove('showContact');

      }

};



// Close the dropdown if the user clicks outside of it
document.body.addEventListener('touchstart', ()=>{
  if (event.target === body || event.target.parentElement === body || event.target.parentElement.parentElement === body ) {
        myDropdownContact.classList.remove('showContact');
        myDropdownAbout.classList.remove('showAbout');

      }

})
