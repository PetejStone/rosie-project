const myDropdownAbout = document.getElementById("myDropdownAbout");
const myDropdownContact = document.getElementById("myDropdownContact");

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
  if (!e.target.matches('.dropbtn')) {
      if (myDropdownAbout.classList.contains('showAbout') || myDropdownContact.classList.contains('showContact')) {
        myDropdownAbout.classList.remove('showAbout');
        myDropdownContact.classList.remove('showContact');

      }
  }
};



// Close the dropdown if the user clicks outside of it
document.body.addEventListener('touchstart', ()=>{
  if (!event.target.matches('.dropbtn')) {
    const myDropdownContact = document.getElementById("myDropdownContact");
      if (myDropdownContact.classList.contains('showContact') ||
          myDropdownAbout.classList.contains('showAbout')) {
        myDropdownContact.classList.remove('showContact');
        myDropdownAbout.classList.remove('showAbout');

      }
  }

})
