import $ from 'jquery';
import owlCarousel from 'owl.carousel';

$(document).ready(function() {
  	var hash = location.hash.slice(1);
	 if( hash === 'm_1') {
	 	$('a[href="#m_1"]').addClass('list__active');
	 }
	 else if(hash === 'm_2') {
	 	$('a[href="#m_2"]').addClass('list__active');
	 }
	 else {
	 	$('a[href="#m_1"]').addClass('list__active');
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
    navText: ['<span class="stage__nav-prev stage__nav">&larr;</span>',
      				'<span class="stage__nav-next stage__nav">&rarr;</span>'],
    nav:true,
    URLhashListener:true,
    autoplayHoverPause:true,
    startPosition: 'URLHash'
  });

  $('span.stage__nav-next').parent().after('<span class="stage__nav-text">i этап</span>');

	 	 if( hash === 'floor-1') {
	 	$('span.stage__nav-text').text('i этаж');
	 	$('.stage__floor').find('li > a').removeClass();
	 	$("a[href='#" + hash + "']").addClass('stage__floor-active');
	 }
	 else if(hash === 'floor-2') {
	 	$('span.stage__nav-text').text('ii этаж');
	 	$('.stage__floor').find('li > a').removeClass();
	 	$("a[href='#" + hash + "']").addClass('stage__floor-active');
	 }
	 	 else if(hash === 'floor-3') {
	 	$('span.stage__nav-text').text('iii этаж');
	 	$('.stage__floor').find('li > a').removeClass();
	 	$("a[href='#" + hash + "']").addClass('stage__floor-active');
  }
  else if(hash === 'floor-4') {
	 	$('span.stage__nav-text').text('iv этаж');
	 	$('.stage__floor').find('li > a').removeClass();
	 	$("a[href='#" + hash + "']").addClass('stage__floor-active');
  }

  $('.stage__floor > li, .stage__nav-prev, .stage__nav-next').on('click', function() {
  	setTimeout (function() {
  		var hash = location.hash.slice(1);
  		var link = $("a[href='#" + hash + "']");
      $('.stage__floor').find('li > a').removeClass();
      link.addClass('stage__floor-active');
  		if( hash === 'floor-1') {

	 	$('span.stage__nav-text').text('i этаж');
	 }
	 else if(hash === 'floor-2') {
	 	$('span.stage__nav-text').text('ii этаж');
	 }
	 else if(hash === 'floor-3') {
	 	$('span.stage__nav-text').text('iii этаж');
      }
      else if(hash === 'floor-4') {
	 	$('span.stage__nav-text').text('iv этаж');
      }
  	},200);		
  	
  	
    
  });
});
