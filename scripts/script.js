particlesJS.load('particles-header', 'scripts/particlesjsDefault.json');
particlesJS.load('particles-colorWizard', 'scripts/particles2.json');
particlesJS.load('particles-night', 'scripts/particlesjs-night.json');
particlesJS.load('particles-snow', 'scripts/particlesjs-snow.json');
particlesJS.load('particles-apples', 'scripts/particlesjs-apples.json');
particlesJS.load('particles-portfolio', 'scripts/particlesjs-portfolio.json');
particlesJS.load('particles-absolute', 'scripts/particlesjsDefault2.json');
particlesJS.load('particles-cat', 'scripts/particlesjs-cat.json');

$(function () {

    $('.next').on('click', function () {
        $.smoothScroll('+=' + $(window).height());
    });    
});