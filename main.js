
function toggleDropdown() {
  let navbarToggle = document.getElementById('navBar-toggle');

  if(navbarToggle.className === "topNav") {
    navbarToggle.className += " responsive";
  } else {
    navbarToggle.className = "topNav"
  }
}