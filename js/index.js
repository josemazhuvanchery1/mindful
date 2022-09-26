const affirmation_b = document.querySelector('#bottom')
const orange_line = document.querySelector('#orange-line')

const getAffirmation = () => {
fetch("https://dulce-affirmations-api.herokuapp.com/affirmation/index")
    .then((response) => response.json())
    .then((json) => {
        console.log(json[0].phrase)
        affirmation_b.innerText = `${json[Math.floor(Math.random()*json.length)].phrase}`
      })
    }
getAffirmation();

// const openingCrawl = () => {
//     var i = 0;
//     var txt = `${json[Math.floor(Math.random()*json.length)].phrase}`; /* The text */
//     var speed = 50;
//     fetch("https://dulce-affirmations-api.herokuapp.com/affirmation/index")
//           .then((response) => response.json())
//           .then((json) => {
//             function typeWriter() {
//            var text= `${json[Math.floor(Math.random()*json.length)].phrase}`
//             if (i < text.length) {
//                 affirmation_b.innerHTML += text.charAt(i);
//                 i++;
//                 setTimeout(typeWriter, speed)
//                 }
//              }
//              typeWriter()
//           })
//         }
    // openingCrawl();

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };
navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
    });