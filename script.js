/* JavaScript by Samantha Orr */

$('.bxslider').bxSlider({
    buildPager: function(slideIndex){
        switch(slideIndex){
        case 0:
            return '<img src="images/hero-image.jpg">';
        case 1:
            return '<img src="images/divyadarshi-acharya-xxl02mZNWI8-unsplash.jpg">';
        case 2:
            return '<img src="images/the-bus-frida-kahlo-1929.jpg">';
        }
    }
});