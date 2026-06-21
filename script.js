// $(".img-slideshow").bxSlider({
//     infiniteLoop: true,
//     slideWidth: 1280,
// });

$('.bxslider').bxSlider({
    buildPager: function(slideIndex){
        switch(slideIndex){
        case 0:
            return '<img src="https://picsum.photos/id/22/73/73">';
        case 1:
            return '<img src="https://picsum.photos/id/23/73/73">';
        case 2:
            return '<img src="https://picsum.photos/id/24/73/73">';
        }
    }
});