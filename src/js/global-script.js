
// =================================
// ИНИЦИАЛИЗАЦИИ БИБЛИОТЕК И ПРОЧЕЕ
// =================================

// Если на проекте jQuery
$( document ).ready(function() {

    $("#news-carousel").owlCarousel({
      items: 1,
      nav: true,
      dots: false,
      loop: true,
      navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>']
    });

    $("#blank-carousel").owlCarousel({
      items: 3,
      nav: true,
      dots: false,
      loop: true,
      margin: 60,
      navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
      // center: true,
      responsive : {
        0 : {
          items: 1,
          nav: true,
          loop: true,
          center: true,
        },
        480 : {
          items: 3,
        },
        768 : {
          items: 3,
        },
        992 : {
          items: 3,
        },
        1200 : {
          items: 4,
        },
        1800 : {
          items: 4,
        }
      }
    });

});

/*START MENU JS*/
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
        $('.page-header').addClass('page-header--sticky');
    }
    if (scroll <= 0) {
        $('.page-header').removeClass('page-header--sticky');
    }
});
/*END MENU JS*/

jQuery(document).ready(function($){
	var contentSections = $('.page__section'),
		navigationItems = $('#cd-nav a');

	updateNavigation();
	$(window).on('scroll', function(){
		updateNavigation();
	});

	//smooth scroll to the section
	navigationItems.on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });
    //smooth scroll to second section
    $('.cd-scroll-down').on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });

	function updateNavigation() {
		contentSections.each(function(){
			$this = $(this);
			var activeSection = $('#cd-nav a[href="#'+$this.attr('id')+'"]').data('number') - 1;
			if ( ( $this.offset().top - $(window).height()/2 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height()/2 > $(window).scrollTop() ) ) {
				navigationItems.eq(activeSection).addClass('is-selected');
			}else {
				navigationItems.eq(activeSection).removeClass('is-selected');
			}
		});
	}

	function smoothScroll(target) {
    $('body,html').animate(
    	{'scrollTop':target.offset().top},
    	600
    );
	}


  // Добавление/удаление модификаторов при клике на переключение видимости
  var toggler = document.getElementById('main-nav-toggler');
  if(toggler){
    toggler.addEventListener('click', mainNavVisibleToggle);

    function mainNavVisibleToggle(e) {
      e.preventDefault();
      toggler.classList.toggle('burger--close'); // модификатор иконки (должен быть .burger)
      document.getElementById('cd-nav').classList.toggle('top-nav--open');
    }
  }

  //close navigation on touch devices when selectin an elemnt from the list
  $('#cd-nav a').on('click', function(){
    $('#cd-nav').removeClass('top-nav--open');
    toggler.classList.toggle('burger--close');
  });


});




// Изоляция без jQuery
// (function(){
//   // code
// }());

// На проекте нет jQuery, но хочется $( document ).ready...
// function ready(fn) {
//   if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
//     fn();
//   } else {
//     document.addEventListener('DOMContentLoaded', fn);
//   }
// }
//
// ready(function(){
//   // code
// });
