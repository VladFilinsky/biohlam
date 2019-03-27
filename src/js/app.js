import $ from 'jquery';
import owlCarousel from 'owl.carousel';
import magnificPopup from 'magnific-popup';

$(document).ready(function() {
// Изменения для мобильной версии
  $(window).on('load resize', function() {
    if ($(window).width() <= 600) {
      // Отключаем owlCarousel
      $('.listimg__slider.owl-carousel').removeClass('js-sl-method owl-carousel');
      // Переносим nav за footer,добавляем классы
      $('nav').insertAfter('footer');
      $('nav').find('ul > li > a').removeClass();
      $('nav').addClass('menu');


    }
  });
  // MENU OPEN
  $('.mobile__nav').click(function() {
    $('.menu').toggleClass('menu-open');
  });
  $('.close').click(function() {
    $('.menu').removeClass('menu-open');
  });
  // MODALS
  $('a[href="#text"], a[href="#callback"], a[href="#thanks"], a[href="#slider"]').magnificPopup({
    type: 'inline',
    removalDelay: 500,
    closeMarkup: '<button title="%title%" type="button" class="modal-close mfp-close">&times;</button>',
    callbacks: {
      beforeOpen: function() {
        this.st.mainClass = this.st.el.attr('data-effect');
      },
      open: function() {
      }
    },
    midClick: true
  });

  // MODAL "GALERY"
  $('#slider').owlCarousel({
    items:1,
    loop:true,
    dots: false,
    nav: true,
    navText: ['<span class="popup__nav-prev popup__nav"></span>',
      '<span class="popup__nav-next popup__nav"></span>']
  });

  /* MODAL "VIDEO" */
  $('.js-video').magnificPopup({
    type: 'iframe',
    removalDelay: 500,
    iframe: {
      markup: '<div class="modal modal-video mfp-with-anim">'+
              '<div class="mfp-iframe-scaler">'+
              '<div class="mfp-close modal-close"></div>'+
              '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
              '</div>'+
              '</div>', 
      patterns: {
        youtube: {
          index: 'youtube.com/',
          id: 'v=', 
          src: '//www.youtube.com/embed/%id%?autoplay=1'
        },
        vimeo: {
          index: 'vimeo.com/',
          id: '/',
          src: '//player.vimeo.com/video/%id%?autoplay=1'
        },
        gmaps: {
          index: '//maps.google.',
          src: '%id%&output=embed'
        }
      },
      srcAction: 'iframe_src',
    },
    callbacks: {
      beforeOpen: function() {
        this.st.mainClass = this.st.el.attr('data-effect');
      },
      open: function() {
      }
    }
  });

  // Активация элементов в блоке Method
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
  // при клике
  $('.listimg__left-box').on('click', function() {
    $('.listimg__left-box.list__active').removeClass('list__active');
    $(this).addClass('list__active');
  });

  // METHOD SLIDER
  $('.js-sl-method').owlCarousel({
  	items:1,
    loop:false,
    mouseDrag: false,
    touchDrag:false,
    dots: false,
    URLhashListener:true,
    autoplayHoverPause:true,
    startPosition: 'URLHash'
  });
  // STAGE SLIDER
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
    autoplayHoverPause:false,
    startPosition: 'URLHash'
  });
  // добавляем блок span рядом с кнопкой слайдера
  $('span.stage__nav-next').parent().after('<span class="stage__nav-text">i этап</span>');
  // отслеживаем хеш и делаем нужную ссылку активной
	 	 if( hash === 'floor-1') {
	 	$('span.stage__nav-text').text('i этап');
	 	$('.stage__floor').find('li > a').removeClass();
	 	$("a[href='#" + hash + "']").addClass('stage__floor-active');
	 }
	 else if(hash === 'floor-2') {
	 	$('span.stage__nav-text').text('ii этап');
	 	$('.stage__floor').find('li > a').removeClass();
	 	$("a[href='#" + hash + "']").addClass('stage__floor-active');
	 }
	 	 else if(hash === 'floor-3') {
	 	$('span.stage__nav-text').text('iii этап');
	 	$('.stage__floor').find('li > a').removeClass();
	 	$("a[href='#" + hash + "']").addClass('stage__floor-active');
  }
  else if(hash === 'floor-4') {
	 	$('span.stage__nav-text').text('iv этап');
	 	$('.stage__floor').find('li > a').removeClass();
	 	$("a[href='#" + hash + "']").addClass('stage__floor-active');
  }
  // изменяем текст при переключении слайдера,отслеживая хеш 
  $('.stage__floor > li, .stage__nav-prev, .stage__nav-next').on('click', function() {
  	setTimeout (function() {
  		var hash = location.hash.slice(1);
  		var link = $("a[href='#" + hash + "']");
      $('.stage__floor').find('li > a').removeClass();
      link.addClass('stage__floor-active');
  		if( hash === 'floor-1') {
	 	$('span.stage__nav-text').text('i этап');
	 }
	 else if(hash === 'floor-2') {
	 	$('span.stage__nav-text').text('ii этап');
	 }
	 else if(hash === 'floor-3') {
	 	$('span.stage__nav-text').text('iii этап');
      }
      else if(hash === 'floor-4') {
	 	$('span.stage__nav-text').text('iv этап');
      }
  	},200);		
  });

});
