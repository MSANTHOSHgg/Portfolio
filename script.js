var sidenav = document.querySelector(".side-navbar")
function shownav() {
    sidenav.style.left = "0%"
}
function closenav() {
    sidenav.style.left = "-60%"
}

var website = document.querySelector(".projects-website")
var academic = document.querySelector(".projects-academics")
var getWeb = document.getElementById("web")
var getAca = document.getElementById("aca")

function Webproject() {
    website.style.display = "flex"
    academic.style.display = "none"
}
function Acaproject() {
    website.style.display = "none"
    academic.style.display = "flex"
}

var typed = new Typed('#element', {
    strings: ['Java Developer', 'Front-end Developer'],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});

const links = document.querySelectorAll('.navbar-Link a');
links.forEach(link => {
    link.addEventListener('click', function () {
        links.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar-Link a");

const setActiveLink = (entry) => {
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${entry.target.id}`) {
      link.classList.add("active");
    }
  });
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveLink(entry);
      }
    });
  },
  { threshold: 0.6 } 
);

sections.forEach((section) => {
  observer.observe(section);
});