$(document).ready(function() {

// hovers
// hover head_menu
	$('.request-a-call').hover(
	 function() {
	 	$(this).css("background", "#8fc2c5");
	},

	 function() {
 		$(this).css("background", "#4DA2F2");
	 });
// hover service-block-text button
	$('.service-block-text button').hover(
	 function() {
	 	$(this).css("background", "#F59546");
	},

	 function() {
 		$(this).css("background", "#FE4E01");
	 });

// hover form button
	$('.form button').hover(
	 function() {
	 	$(this).css("background", "#F59546");
	},

	 function() {
 		$(this).css("background", "#FE4E01");
	 });

		// footer button
	$('.service_bottom button').hover(
	 function() {
	 	$(this).css("background", "#F59546");
	},

	 function() {
 		$(this).css("background", "#FE4E01");
	 });

		// fancybox
		
	$('.fancybox').fancybox(); 

		// on_top

  var top_show = 100;//при каком положении кнопка появляется
  var delay = 1000; // Задержка прокрутки
  $(document).ready(function() {
    $(window).scroll(function () {
      if ($(this).scrollTop() > top_show) $('#top').fadeIn();
      else $('#top').fadeOut();
    });
    $('#top').click(function () {
      $('body, html').animate({
        scrollTop: 0
      }, delay);
    });
  });
       	// nav-menu-fixed
    var h_hght = 47; //высота шапки
    var h_mrg = 0; //отступ когда шапка не видна

    $(function() {
    	var elem = $('.head_menu');
    	var top = $(this).scrollTop();

    	if(top > h_hght) {
    		elem.css('top', h_mrg);
    	}

    	$(window).scroll(function() {
    		top = $(this).scrollTop();

    		if(top + h_mrg < h_hght) {
    			elem.css('top', (h_hght - top));
    		} else {
    			elem.css('top', h_mrg);
    		}
    	});
    });

    // anchor code
    var $page = $('html, body');
$('a[href*="#"]').click(function() {
	event.preventDefault();
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1250);
    return false;
});

$(".navigation").changeActiveNav();


// *********pop up window
 
$('.request-a-call').on('click', function() {
  $('#parent_popup, #popup').show();
});

  $('.popup-menu i, #parent_popup').on('click', function() {
    $('#parent_popup, #popup').hide();
});

// ***************************

$('.service-block-text button, .service_bottom button').on('click', function() {
  $('#parent_popup, #popup_service').show();
});

  $('.popup-menu i, #parent_popup').on('click', function() {
    $('#parent_popup, #popup_service').hide();
});



});