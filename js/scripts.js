/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

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

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
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

let slideIndex = 
{
    "photographySlide": 1,
    "characterSlide": 1,
    "traditionalSlide": 1
};
showSlides(slideIndex["photographySlide"], "photographySlide");
showSlides(slideIndex["characterSlide"], "characterSlide");
showSlides(slideIndex["traditionalSlide"], "traditionalSlide");

function cycleSlides(n, slideID) 
{
    showSlides(slideIndex[slideID] += n, slideID);
}

function showSlides(n, slideID) 
{
    let i;
    let slides = document.getElementsByClassName(slideID);

    if (n > slides.length)
    {
        slideIndex[slideID] = 1; 
    }
    if (n < 1)
    {
        slideIndex[slideID] = slides.length;
    }

    for (i = 0; i < slides.length; i++)
    {
      slides[i].style.display = "none";
      slides[i].style.visibility = "hidden";
    }

    slides[slideIndex[slideID]-1].style.display = "flex";  
    slides[slideIndex[slideID]-1].style.visibility = "visible";
}
