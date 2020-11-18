document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});

function showHideDropdown() {
  var x = document.getElementById("navbarDropdown");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}



function openCloseFilterAccordionContent() {
  var x = document.getElementById("filter-accordion-hidden");
  var y = document.getElementById("filter-accordion-chevron");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.transform = "rotate(180deg)";
  } else {
    x.style.display = "none";
    y.style.transform = "rotate(0deg)";
  }
}

function openCloseFilterAccordionContentMobile() {
  var x = document.getElementById("filter-accordion-hidden-mobile");
  var y = document.getElementById("filter-accordion-chevron-mobile");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.transform = "rotate(180deg)";
  } else {
    x.style.display = "none";
    y.style.transform = "rotate(0deg)";
  }
}

function openCloseAccordionContent() {
  var x = document.getElementById("dropdown-faq-content");
  var y = document.getElementById("dropdown-chevron");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.transform = "rotate(180deg)";
  } else {
    x.style.display = "none";
    y.style.transform = "rotate(0deg)";
  }
}
