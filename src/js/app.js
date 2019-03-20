import $ from 'jquery';
import owlCarousel from 'owl.carousel';

$(document).ready(function() {
  	var hash = location.hash.slice(1);
	 console.log(hash);
	 if( hash == 'm_1') {
	 	$('a[href="#m_1"]').addClass('list__active');
	 }
	 else if(hash == 'm_2') {
	 	$('a[href="#m_2"]').addClass('list__active');
	 	else{
	 		return false;
	 	}
	 }
	 
  $('.listimg__left').on('click', 'a', function() {
  	$('.listimg__left .list__active').removeClass();
  	$(this).addClass('list__active');

  });
  $('.listimg__slider').owlCarousel({
  	items:1,
    loop:false,
    mouseDrag: false,
    touchDrag:false,
    dots: false,
    URLhashListener:true,
    autoplayHoverPause:true,
    startPosition: 'URLHash'
  });

  $('.stage-slider').owlCarousel({
  	items:1,
    loop:false,
    center:true,
    dots: false,
    mouseDrag: false,
    touchDrag:false,
    nav:true,
    URLhashListener:true,
    autoplayHoverPause:true,
    startPosition: 'URLHash'
  });

});
