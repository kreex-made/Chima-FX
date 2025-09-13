(function() {
  'use strict';

  // header menu

  // $('.burger').on('click', function(e){
  //   e.preventDefault();

  //   $(this).toggleClass('active');
  //   $('.header-nav').slideToggle();
  // });

  // $(window).resize(function(){
	// 	var menu = $(".header-nav")
	// 	var wid = $(window).width();
	// 	if(wid > 568 && menu.is(":hidden")){
	// 		menu.removeAttr('style');
	// 	}
  // });
  
  // next btn

  // $('.next-btn').click(function(event) {
  //   var currentSlideHeight = $(this).parent().next().offset().top;

  //   console.log($('html, body').scrollTop(), currentSlideHeight)
  
	//   $('html, body').animate({
	// 	    scrollTop : currentSlideHeight,
	//   }, 1000);
	//   //Prevents the # from the link appearing in the url.
	//   event.preventDefault();
  // });

  // if($('#scene').length !== 0){
  //   var scene = document.getElementById('scene');
  //   var parallaxInstance = new Parallax(scene);
  // }
  
  // poppup

  $('.popup-frame').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});

	$('.popup-img').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}
		
  });

  $('.popup').magnificPopup({
		type: 'inline',
    preloader: false,
    closeOnContentClick: false,
  });

  $('.zoom-gallery').each(function(){
    $(this).magnificPopup({
      delegate: 'a',
      type: 'image',
      closeOnContentClick: false,
      closeBtnInside: false,
      mainClass: 'mfp-with-zoom mfp-img-mobile',
      image: {
        verticalFit: true,
      },
      gallery: {
        enabled: true
      },
      zoom: {
        enabled: true,
        duration: 300, // don't foget to change the duration also in CSS
        opener: function(element) {
          return element.find('img');
        }
      }
      
    });
  })

  

  svg4everybody();
  

  //table
  
  if($('table.responsive').length > 0){
    $('table.responsive').ngResponsiveTables();
  }
	
  //select styler

  $('select').styler();

  //datepicker

  // $( ".datepicker" ).datepicker();

  // $("#weeklyDatePicker").datetimepicker({
  //   format: 'DD-MM-YYYY'
  // });

  // //Get the value of Start and End of Week
  // $('#weeklyDatePicker').on('dp.change', function (e) {
  //     var value = $("#weeklyDatePicker").val();
  //     var firstDate = moment(value, "DD-MM-YYYY").day(0).format("DD-MM-YYYY");
  //     var lastDate =  moment(value, "DD-MM-YYYY").day(6).format("DD-MM-YYYY");
  //     $("#weeklyDatePicker").val(firstDate + " - " + lastDate);
  // });
   
  //tabs

  $('.tabs__wrap').each(function() {
    $(this).find('.tab').each(function(i) {
      $(this).parents('.tabs__wrap').find('.tab_content').children().not(':first').hide();
      $(this).click(function(){
        $(this).addClass('active').siblings().removeClass('active')
        $(this).parents('.tabs__wrap').find('.tab_content').children().eq(i).fadeIn(0).siblings('.tab_item').hide();
      
        if($('.stat-slider_withdraw').length !== 0){
          statDepositSlider.update();
          statWithdrawSlider.update();
        }
        if($('.invest-slider').length !== 0){
          standartSlider.update();
          advancedSlider.update();
          premiumSlider.update();
        }
      });
    });
  });

  //tabs
  $('[data-tabs-btn]').click(function() {
    let tabsName = $(this).parent().attr('data-tabs-btns');
    let tabNo = $(this).attr('data-tabs-btn');
    let tabsWrapper = $('[data-tabs-wrapper='+tabsName+']');

    $(this).siblings().removeClass('active');
    $(this).addClass('active');

    console.log(tabsName)
    tabsWrapper.children().each(function(i, item) {
      $(item).hide();
      if ($(item).attr('data-tabs-item') === tabNo) {
        $(item).show();
      }
    });
  });

  function tabsInitialization() {
    let btns = $('[data-tabs-btns]');
    let wrapper = $('[data-tabs-wrapper]');

    $(wrapper).children().not(function() {
      if ($(this).attr('data-tabs-item') === '1') {
        return true;
      }
    }).hide();

    $(btns).children().not(function() {
      if ($(this).attr('data-tabs-btn') === '1') {
        return false;
      } else {
        return true;
      }
    }).addClass('active');
  }
  
  tabsInitialization();

  //accordion

  var Accordion = function(el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    // Variables privadas
    var links = this.el.find('.accordion__head');
    // Evento
    links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
  }

  Accordion.prototype.dropdown = function(e) {
    var $el = e.data.el,
        $this = $(this),
        $next = $this.next();

    $next.slideToggle();
    $this.parent().toggleClass('active');

    if (!e.data.multiple) {
      $el.find('.accordion__body').not($next).slideUp().parent().removeClass('active');
    };
  }	

  var accordion = new Accordion($('.accordion'), false);
  
  //nicescroll

  $(".nicescroll-box").niceScroll(".wrap",{
    cursorcolor:"#7455c5",
    cursorwidth:"3px",
    zindex: 20,
    emulatetouch: true,
    autohidemode: false,
  });

  $( "#amount" ).spinner({
    step: 0.01,
    numberFormat: "n"
  });

  $( "#spinner" ).spinner();
  
  // aos

  AOS.init(
    {
      // Global settings
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      // Settings that can be overriden on per-element basis, by `data-aos-*` attributes:
      offset: 0, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 700, // values from 0 to 3000, with step 50ms
      easing: 'ease-in-out', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    }
  );

	setTimeout(AOS.refreshHard, 1000);
	
	//clipboard

  var affil1 = new Clipboard('#affil');
  var banners = new Clipboard('.cabinet-banner__copy');

  function affiliatelink(id) {
    id.on('success', function (e) {
      // swal({
      //   title: "Your referral link copied!",
      //   text: "You can paste text that has been copied by pressing Ctrl + V. The text that was copied last will be pasted.",
      //   type: "success",
      //   showCancelButton: false,
      //   confirmButtonClass: "btn-success",
      //   confirmButtonText: "OK!",
      //   closeOnConfirm: false,
      //   closeOnCancel: false
      // });

      Lobibox.notify('success', {
        // delay: 1000000000000,
        title: true,
        size: 'normal',
        icon: false,
        sound: false,
        iconSource: "bootstrap",
        msg: 'Your referral link copied!'
      });
    });
  }

  affiliatelink(affil1);
  affiliatelink(banners);

  // sliders

  var statDepositSlider = new Swiper('.stat-slider_deposit .swiper-container', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    },
    navigation: {
      nextEl: '.stat-slider_deposit .swiper-button-next',
      prevEl: '.stat-slider_deposit .swiper-button-prev',
    },

    breakpoints: {
      1200: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 2,
      },
      560: {
        slidesPerView: 1,
      },
    }
  });

  var statWithdrawSlider = new Swiper('.stat-slider_withdraw .swiper-container', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    },
    navigation: {
      nextEl: '.stat-slider_withdraw .swiper-button-next',
      prevEl: '.stat-slider_withdraw .swiper-button-prev',
    },

    breakpoints: {
      1200: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 2,
      },
      560: {
        slidesPerView: 1,
      },
    }
  });

  var standartSlider = new Swiper('#standart .swiper-container', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 0,
    direction: 'vertical',
    slideToClickedSlide: true,
    navigation: {
      nextEl: '#standart .swiper-button-next',
      prevEl: '#standart .swiper-button-prev',
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    }
  });

  var advancedSlider = new Swiper('#advanced .swiper-container', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 0,
    direction: 'vertical',
    slideToClickedSlide: true,
    navigation: {
      nextEl: '#advanced .swiper-button-next',
      prevEl: '#advanced .swiper-button-prev',
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    },
  });

  var premiumSlider = new Swiper('#premium .swiper-container', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 0,
    direction: 'vertical',
    slideToClickedSlide: true,
    navigation: {
      nextEl: '#premium .swiper-button-next',
      prevEl: '#premium .swiper-button-prev',
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    },
  });

  var walletsSlider = new Swiper('.wallets-slider .swiper-container', {
    loop: true,
    slidesPerView: 5,
    spaceBetween: 10,
    navigation: {
      nextEl: '.wallets-slider .swiper-button-next',
      prevEl: '.wallets-slider .swiper-button-prev',
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    },

    breakpoints: {
      1200: {
        slidesPerView: 4,
      },
    }
  });

  var certSlider = new Swiper('.cert-slider .swiper-container', {
    loop: true,
    spaceBetween: 70,
    slidesPerView: 5,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    breakpoints: {
      1860: {
        slidesPerView: 4,
      },
      1500: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      560: {
        slidesPerView: 2,
      },
      480: {
        slidesPerView: 1,
      },
    }
  });

  var roadmapSlider = new Swiper('.roadmap-slider .swiper-container', {
    loop: true,
    slidesPerView: 1,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    navigation: {
      nextEl: '.roadmap-slider .swiper-button-next',
      prevEl: '.roadmap-slider .swiper-button-prev',
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    },
    pagination: {
      el: '.roadmap-slider .swiper-pagination',
      type: 'bullets',
      clickable: true,
      renderBullet: function (index, className) {
        if((index + 1) < 10){
          return '<span class="' + className + '">0' + (index + 1) + '</span>';
        }else{
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        }
        
      },
    },
  });

  if($('.roadmap-nav').length !== 0){
    var roadmapItem = $('.roadmap-nav__item');
  
    roadmapItem.on('click', function(){
      $(this).addClass('active');
      $(this).siblings().removeClass('active');
      roadmapSlider.slideTo($(this).index() + 1)
    })
  
    roadmapSlider.on('slideChange', function(){
      roadmapItem.eq(roadmapSlider.realIndex).addClass('active');
      roadmapItem.eq(roadmapSlider.realIndex).siblings().removeClass('active');
    })
  }

  var cabBalance = new Swiper('.cabinet-balance__wallets .swiper-container', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 8,
    direction: 'vertical',
    slideToClickedSlide: true,
    navigation: {
      nextEl: '.cabinet-balance__nav .swiper-button-next',
      prevEl: '.cabinet-balance__nav .swiper-button-prev',
    },
  });

  var cabBalanceContent = new Swiper('.cabinet-balance__content .swiper-container', {
    loop: true,
    slidesPerView: 1,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
  });

  cabBalance.on('slideChange', function(){
    cabBalanceContent.slideTo(cabBalance.realIndex + 1);
  })


  setTimeout(() => {
    $('.marquee').marquee({
      //speed in milliseconds of the marquee
      duration: 13000,
      //gap in pixels between the tickers
      gap: 0,
      //time in milliseconds before the marquee will start animating
      delayBeforeStart: 0,
      //'left' or 'right'
      direction: 'left',
      //true or false - should the marquee be duplicated to show an effect of continues flow
      duplicated: true
    });
  }, 1000);

  //cabinet-settings

  // $('.cabinet-table__settings-btn').on('click', function(e){
  //   e.preventDefault();
  
    
  
  //   $(this).siblings('.cabinet-table__settings-hide').fadeIn(300);
  //   $(this).parent().addClass('active');
  //   let trueH = ($(document).outerHeight(true) - $(this).siblings('.cabinet-table__settings-hide').offset().top - $(this).siblings('.cabinet-table__settings-hide').outerHeight(true));
  
  //   if(trueH <= 0){
  //     $(this).siblings('.cabinet-table__settings-hide').addClass('top');
  //   }
  // });
  
  // $(document).mouseup(function (e){ 
  //   var block = $(".cabinet-table__settings.active .cabinet-table__settings-hide"); 
  //   if (!block.is(e.target) 
  //       && block.has(e.target).length === 0) { 
  //       block.hide(); 
  
  //       block.parent().removeClass('active');
  
  //       if( block.hasClass('top')){
  //         block.removeClass('top');
  //       }
  //   }
  // });



  // //chart profit

  // if($("#trade").length !== 0){
  //   var ctx = document.getElementById('trade').getContext('2d');
  //   var gradientFill = ctx.createLinearGradient(0, 0, 0, 300);
  //   gradientFill.addColorStop(0, "rgba(100, 221, 249, 1)");
  //   gradientFill.addColorStop(1, "rgba(100, 221, 249, 0)");
  //   var chart = new Chart(ctx, {
  //     // The type of chart we want to create
  //     type: 'line',
  //     data: {
  //       labels: ['Mon', 'Tues', 'Wed', 'Thurs','Fri','Sat','Sun'],
  //       datasets: [{
  //         data: [{
  //           x: 'Mon',
  //           y: 250
  //         }, {
  //           x: 'Tues',
  //           y: 105
  //         },
  //         {
  //           x: 'Wed',
  //           y: 90
  //         },
  //         {
  //           x: 'Thurs',
  //           y: 175
  //         },
  //         {
  //           x: 'Fri',
  //           y: 125
  //         },
  //         {
  //           x: 'Sat',
  //           y: 145
  //         },
  //         {
  //           x: 'Sun',
  //           y: 275
  //         }],
  //         backgroundColor: gradientFill,
  //         borderColor: '#64ddf9',
  //         borderWidth: 4,
  //       }]
  //     },

      
  
  //     // Configuration options go here
  //     options: {
  //       cutoutPercentage: 70,
  //       responsive: true,
  //       maintainAspectRatio: false,
  //       legend: {
  //         display: false
  //       },
  //       scales: {
  //         yAxes: [{
  //             ticks: {
  //                 fontColor: "white",
  //             }
  //         }],
  //         xAxes: [{
  //             ticks: {
  //                 fontColor: "white",
  //             }
  //         }]
  //     }
        
  //     }
  //   });
  // }


})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKSB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAvLyBoZWFkZXIgbWVudVxyXG5cclxuICAvLyAkKCcuYnVyZ2VyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbiAgLy8gICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gIC8vICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgLy8gICAkKCcuaGVhZGVyLW5hdicpLnNsaWRlVG9nZ2xlKCk7XHJcbiAgLy8gfSk7XHJcblxyXG4gIC8vICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKXtcclxuXHQvLyBcdHZhciBtZW51ID0gJChcIi5oZWFkZXItbmF2XCIpXHJcblx0Ly8gXHR2YXIgd2lkID0gJCh3aW5kb3cpLndpZHRoKCk7XHJcblx0Ly8gXHRpZih3aWQgPiA1NjggJiYgbWVudS5pcyhcIjpoaWRkZW5cIikpe1xyXG5cdC8vIFx0XHRtZW51LnJlbW92ZUF0dHIoJ3N0eWxlJyk7XHJcblx0Ly8gXHR9XHJcbiAgLy8gfSk7XHJcbiAgXHJcbiAgLy8gbmV4dCBidG5cclxuXHJcbiAgLy8gJCgnLm5leHQtYnRuJykuY2xpY2soZnVuY3Rpb24oZXZlbnQpIHtcclxuICAvLyAgIHZhciBjdXJyZW50U2xpZGVIZWlnaHQgPSAkKHRoaXMpLnBhcmVudCgpLm5leHQoKS5vZmZzZXQoKS50b3A7XHJcblxyXG4gIC8vICAgY29uc29sZS5sb2coJCgnaHRtbCwgYm9keScpLnNjcm9sbFRvcCgpLCBjdXJyZW50U2xpZGVIZWlnaHQpXHJcbiAgXHJcblx0Ly8gICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcblx0Ly8gXHQgICAgc2Nyb2xsVG9wIDogY3VycmVudFNsaWRlSGVpZ2h0LFxyXG5cdC8vICAgfSwgMTAwMCk7XHJcblx0Ly8gICAvL1ByZXZlbnRzIHRoZSAjIGZyb20gdGhlIGxpbmsgYXBwZWFyaW5nIGluIHRoZSB1cmwuXHJcblx0Ly8gICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIC8vIH0pO1xyXG5cclxuICAvLyBpZigkKCcjc2NlbmUnKS5sZW5ndGggIT09IDApe1xyXG4gIC8vICAgdmFyIHNjZW5lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NjZW5lJyk7XHJcbiAgLy8gICB2YXIgcGFyYWxsYXhJbnN0YW5jZSA9IG5ldyBQYXJhbGxheChzY2VuZSk7XHJcbiAgLy8gfVxyXG4gIFxyXG4gIC8vIHBvcHB1cFxyXG5cclxuICAkKCcucG9wdXAtZnJhbWUnKS5tYWduaWZpY1BvcHVwKHtcclxuXHRcdGRpc2FibGVPbjogNzAwLFxyXG5cdFx0dHlwZTogJ2lmcmFtZScsXHJcblx0XHRtYWluQ2xhc3M6ICdtZnAtZmFkZScsXHJcblx0XHRyZW1vdmFsRGVsYXk6IDE2MCxcclxuXHRcdHByZWxvYWRlcjogZmFsc2UsXHJcblx0XHRmaXhlZENvbnRlbnRQb3M6IGZhbHNlXHJcblx0fSk7XHJcblxyXG5cdCQoJy5wb3B1cC1pbWcnKS5tYWduaWZpY1BvcHVwKHtcclxuXHRcdHR5cGU6ICdpbWFnZScsXHJcblx0XHRjbG9zZU9uQ29udGVudENsaWNrOiB0cnVlLFxyXG5cdFx0bWFpbkNsYXNzOiAnbWZwLWltZy1tb2JpbGUnLFxyXG5cdFx0aW1hZ2U6IHtcclxuXHRcdFx0dmVydGljYWxGaXQ6IHRydWVcclxuXHRcdH1cclxuXHRcdFxyXG4gIH0pO1xyXG5cclxuICAkKCcucG9wdXAnKS5tYWduaWZpY1BvcHVwKHtcclxuXHRcdHR5cGU6ICdpbmxpbmUnLFxyXG4gICAgcHJlbG9hZGVyOiBmYWxzZSxcclxuICAgIGNsb3NlT25Db250ZW50Q2xpY2s6IGZhbHNlLFxyXG4gIH0pO1xyXG5cclxuICAkKCcuem9vbS1nYWxsZXJ5JykuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgJCh0aGlzKS5tYWduaWZpY1BvcHVwKHtcclxuICAgICAgZGVsZWdhdGU6ICdhJyxcclxuICAgICAgdHlwZTogJ2ltYWdlJyxcclxuICAgICAgY2xvc2VPbkNvbnRlbnRDbGljazogZmFsc2UsXHJcbiAgICAgIGNsb3NlQnRuSW5zaWRlOiBmYWxzZSxcclxuICAgICAgbWFpbkNsYXNzOiAnbWZwLXdpdGgtem9vbSBtZnAtaW1nLW1vYmlsZScsXHJcbiAgICAgIGltYWdlOiB7XHJcbiAgICAgICAgdmVydGljYWxGaXQ6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIGdhbGxlcnk6IHtcclxuICAgICAgICBlbmFibGVkOiB0cnVlXHJcbiAgICAgIH0sXHJcbiAgICAgIHpvb206IHtcclxuICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgIGR1cmF0aW9uOiAzMDAsIC8vIGRvbid0IGZvZ2V0IHRvIGNoYW5nZSB0aGUgZHVyYXRpb24gYWxzbyBpbiBDU1NcclxuICAgICAgICBvcGVuZXI6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgICAgIHJldHVybiBlbGVtZW50LmZpbmQoJ2ltZycpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgIH0pO1xyXG4gIH0pXHJcblxyXG4gIFxyXG5cclxuICBzdmc0ZXZlcnlib2R5KCk7XHJcbiAgXHJcblxyXG4gIC8vdGFibGVcclxuICBcclxuICBpZigkKCd0YWJsZS5yZXNwb25zaXZlJykubGVuZ3RoID4gMCl7XHJcbiAgICAkKCd0YWJsZS5yZXNwb25zaXZlJykubmdSZXNwb25zaXZlVGFibGVzKCk7XHJcbiAgfVxyXG5cdFxyXG4gIC8vc2VsZWN0IHN0eWxlclxyXG5cclxuICAkKCdzZWxlY3QnKS5zdHlsZXIoKTtcclxuXHJcbiAgLy9kYXRlcGlja2VyXHJcblxyXG4gIC8vICQoIFwiLmRhdGVwaWNrZXJcIiApLmRhdGVwaWNrZXIoKTtcclxuXHJcbiAgLy8gJChcIiN3ZWVrbHlEYXRlUGlja2VyXCIpLmRhdGV0aW1lcGlja2VyKHtcclxuICAvLyAgIGZvcm1hdDogJ0RELU1NLVlZWVknXHJcbiAgLy8gfSk7XHJcblxyXG4gIC8vIC8vR2V0IHRoZSB2YWx1ZSBvZiBTdGFydCBhbmQgRW5kIG9mIFdlZWtcclxuICAvLyAkKCcjd2Vla2x5RGF0ZVBpY2tlcicpLm9uKCdkcC5jaGFuZ2UnLCBmdW5jdGlvbiAoZSkge1xyXG4gIC8vICAgICB2YXIgdmFsdWUgPSAkKFwiI3dlZWtseURhdGVQaWNrZXJcIikudmFsKCk7XHJcbiAgLy8gICAgIHZhciBmaXJzdERhdGUgPSBtb21lbnQodmFsdWUsIFwiREQtTU0tWVlZWVwiKS5kYXkoMCkuZm9ybWF0KFwiREQtTU0tWVlZWVwiKTtcclxuICAvLyAgICAgdmFyIGxhc3REYXRlID0gIG1vbWVudCh2YWx1ZSwgXCJERC1NTS1ZWVlZXCIpLmRheSg2KS5mb3JtYXQoXCJERC1NTS1ZWVlZXCIpO1xyXG4gIC8vICAgICAkKFwiI3dlZWtseURhdGVQaWNrZXJcIikudmFsKGZpcnN0RGF0ZSArIFwiIC0gXCIgKyBsYXN0RGF0ZSk7XHJcbiAgLy8gfSk7XHJcbiAgIFxyXG4gIC8vdGFic1xyXG5cclxuICAkKCcudGFic19fd3JhcCcpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAkKHRoaXMpLmZpbmQoJy50YWInKS5lYWNoKGZ1bmN0aW9uKGkpIHtcclxuICAgICAgJCh0aGlzKS5wYXJlbnRzKCcudGFic19fd3JhcCcpLmZpbmQoJy50YWJfY29udGVudCcpLmNoaWxkcmVuKCkubm90KCc6Zmlyc3QnKS5oaWRlKCk7XHJcbiAgICAgICQodGhpcykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxyXG4gICAgICAgICQodGhpcykucGFyZW50cygnLnRhYnNfX3dyYXAnKS5maW5kKCcudGFiX2NvbnRlbnQnKS5jaGlsZHJlbigpLmVxKGkpLmZhZGVJbigwKS5zaWJsaW5ncygnLnRhYl9pdGVtJykuaGlkZSgpO1xyXG4gICAgICBcclxuICAgICAgICBpZigkKCcuc3RhdC1zbGlkZXJfd2l0aGRyYXcnKS5sZW5ndGggIT09IDApe1xyXG4gICAgICAgICAgc3RhdERlcG9zaXRTbGlkZXIudXBkYXRlKCk7XHJcbiAgICAgICAgICBzdGF0V2l0aGRyYXdTbGlkZXIudXBkYXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCQoJy5pbnZlc3Qtc2xpZGVyJykubGVuZ3RoICE9PSAwKXtcclxuICAgICAgICAgIHN0YW5kYXJ0U2xpZGVyLnVwZGF0ZSgpO1xyXG4gICAgICAgICAgYWR2YW5jZWRTbGlkZXIudXBkYXRlKCk7XHJcbiAgICAgICAgICBwcmVtaXVtU2xpZGVyLnVwZGF0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgLy90YWJzXHJcbiAgJCgnW2RhdGEtdGFicy1idG5dJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICBsZXQgdGFic05hbWUgPSAkKHRoaXMpLnBhcmVudCgpLmF0dHIoJ2RhdGEtdGFicy1idG5zJyk7XHJcbiAgICBsZXQgdGFiTm8gPSAkKHRoaXMpLmF0dHIoJ2RhdGEtdGFicy1idG4nKTtcclxuICAgIGxldCB0YWJzV3JhcHBlciA9ICQoJ1tkYXRhLXRhYnMtd3JhcHBlcj0nK3RhYnNOYW1lKyddJyk7XHJcblxyXG4gICAgJCh0aGlzKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKHRhYnNOYW1lKVxyXG4gICAgdGFic1dyYXBwZXIuY2hpbGRyZW4oKS5lYWNoKGZ1bmN0aW9uKGksIGl0ZW0pIHtcclxuICAgICAgJChpdGVtKS5oaWRlKCk7XHJcbiAgICAgIGlmICgkKGl0ZW0pLmF0dHIoJ2RhdGEtdGFicy1pdGVtJykgPT09IHRhYk5vKSB7XHJcbiAgICAgICAgJChpdGVtKS5zaG93KCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiB0YWJzSW5pdGlhbGl6YXRpb24oKSB7XHJcbiAgICBsZXQgYnRucyA9ICQoJ1tkYXRhLXRhYnMtYnRuc10nKTtcclxuICAgIGxldCB3cmFwcGVyID0gJCgnW2RhdGEtdGFicy13cmFwcGVyXScpO1xyXG5cclxuICAgICQod3JhcHBlcikuY2hpbGRyZW4oKS5ub3QoZnVuY3Rpb24oKSB7XHJcbiAgICAgIGlmICgkKHRoaXMpLmF0dHIoJ2RhdGEtdGFicy1pdGVtJykgPT09ICcxJykge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9KS5oaWRlKCk7XHJcblxyXG4gICAgJChidG5zKS5jaGlsZHJlbigpLm5vdChmdW5jdGlvbigpIHtcclxuICAgICAgaWYgKCQodGhpcykuYXR0cignZGF0YS10YWJzLWJ0bicpID09PSAnMScpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0pLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICB9XHJcbiAgXHJcbiAgdGFic0luaXRpYWxpemF0aW9uKCk7XHJcblxyXG4gIC8vYWNjb3JkaW9uXHJcblxyXG4gIHZhciBBY2NvcmRpb24gPSBmdW5jdGlvbihlbCwgbXVsdGlwbGUpIHtcclxuICAgIHRoaXMuZWwgPSBlbCB8fCB7fTtcclxuICAgIHRoaXMubXVsdGlwbGUgPSBtdWx0aXBsZSB8fCBmYWxzZTtcclxuXHJcbiAgICAvLyBWYXJpYWJsZXMgcHJpdmFkYXNcclxuICAgIHZhciBsaW5rcyA9IHRoaXMuZWwuZmluZCgnLmFjY29yZGlvbl9faGVhZCcpO1xyXG4gICAgLy8gRXZlbnRvXHJcbiAgICBsaW5rcy5vbignY2xpY2snLCB7ZWw6IHRoaXMuZWwsIG11bHRpcGxlOiB0aGlzLm11bHRpcGxlfSwgdGhpcy5kcm9wZG93bilcclxuICB9XHJcblxyXG4gIEFjY29yZGlvbi5wcm90b3R5cGUuZHJvcGRvd24gPSBmdW5jdGlvbihlKSB7XHJcbiAgICB2YXIgJGVsID0gZS5kYXRhLmVsLFxyXG4gICAgICAgICR0aGlzID0gJCh0aGlzKSxcclxuICAgICAgICAkbmV4dCA9ICR0aGlzLm5leHQoKTtcclxuXHJcbiAgICAkbmV4dC5zbGlkZVRvZ2dsZSgpO1xyXG4gICAgJHRoaXMucGFyZW50KCkudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuICAgIGlmICghZS5kYXRhLm11bHRpcGxlKSB7XHJcbiAgICAgICRlbC5maW5kKCcuYWNjb3JkaW9uX19ib2R5Jykubm90KCRuZXh0KS5zbGlkZVVwKCkucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgfTtcclxuICB9XHRcclxuXHJcbiAgdmFyIGFjY29yZGlvbiA9IG5ldyBBY2NvcmRpb24oJCgnLmFjY29yZGlvbicpLCBmYWxzZSk7XHJcbiAgXHJcbiAgLy9uaWNlc2Nyb2xsXHJcblxyXG4gICQoXCIubmljZXNjcm9sbC1ib3hcIikubmljZVNjcm9sbChcIi53cmFwXCIse1xyXG4gICAgY3Vyc29yY29sb3I6XCIjNzQ1NWM1XCIsXHJcbiAgICBjdXJzb3J3aWR0aDpcIjNweFwiLFxyXG4gICAgemluZGV4OiAyMCxcclxuICAgIGVtdWxhdGV0b3VjaDogdHJ1ZSxcclxuICAgIGF1dG9oaWRlbW9kZTogZmFsc2UsXHJcbiAgfSk7XHJcblxyXG4gICQoIFwiI2Ftb3VudFwiICkuc3Bpbm5lcih7XHJcbiAgICBzdGVwOiAwLjAxLFxyXG4gICAgbnVtYmVyRm9ybWF0OiBcIm5cIlxyXG4gIH0pO1xyXG5cclxuICAkKCBcIiNzcGlubmVyXCIgKS5zcGlubmVyKCk7XHJcbiAgXHJcbiAgLy8gYW9zXHJcblxyXG4gIEFPUy5pbml0KFxyXG4gICAge1xyXG4gICAgICAvLyBHbG9iYWwgc2V0dGluZ3NcclxuICAgICAgZGlzYWJsZTogZmFsc2UsIC8vIGFjY2VwdHMgZm9sbG93aW5nIHZhbHVlczogJ3Bob25lJywgJ3RhYmxldCcsICdtb2JpbGUnLCBib29sZWFuLCBleHByZXNzaW9uIG9yIGZ1bmN0aW9uXHJcbiAgICAgIHN0YXJ0RXZlbnQ6ICdET01Db250ZW50TG9hZGVkJywgLy8gbmFtZSBvZiB0aGUgZXZlbnQgZGlzcGF0Y2hlZCBvbiB0aGUgZG9jdW1lbnQsIHRoYXQgQU9TIHNob3VsZCBpbml0aWFsaXplIG9uXHJcbiAgICAgIGluaXRDbGFzc05hbWU6ICdhb3MtaW5pdCcsIC8vIGNsYXNzIGFwcGxpZWQgYWZ0ZXIgaW5pdGlhbGl6YXRpb25cclxuICAgICAgYW5pbWF0ZWRDbGFzc05hbWU6ICdhb3MtYW5pbWF0ZScsIC8vIGNsYXNzIGFwcGxpZWQgb24gYW5pbWF0aW9uXHJcbiAgICAgIHVzZUNsYXNzTmFtZXM6IGZhbHNlLCAvLyBpZiB0cnVlLCB3aWxsIGFkZCBjb250ZW50IG9mIGBkYXRhLWFvc2AgYXMgY2xhc3NlcyBvbiBzY3JvbGxcclxuICAgICAgLy8gU2V0dGluZ3MgdGhhdCBjYW4gYmUgb3ZlcnJpZGVuIG9uIHBlci1lbGVtZW50IGJhc2lzLCBieSBgZGF0YS1hb3MtKmAgYXR0cmlidXRlczpcclxuICAgICAgb2Zmc2V0OiAwLCAvLyBvZmZzZXQgKGluIHB4KSBmcm9tIHRoZSBvcmlnaW5hbCB0cmlnZ2VyIHBvaW50XHJcbiAgICAgIGRlbGF5OiAwLCAvLyB2YWx1ZXMgZnJvbSAwIHRvIDMwMDAsIHdpdGggc3RlcCA1MG1zXHJcbiAgICAgIGR1cmF0aW9uOiA3MDAsIC8vIHZhbHVlcyBmcm9tIDAgdG8gMzAwMCwgd2l0aCBzdGVwIDUwbXNcclxuICAgICAgZWFzaW5nOiAnZWFzZS1pbi1vdXQnLCAvLyBkZWZhdWx0IGVhc2luZyBmb3IgQU9TIGFuaW1hdGlvbnNcclxuICAgICAgb25jZTogZmFsc2UsIC8vIHdoZXRoZXIgYW5pbWF0aW9uIHNob3VsZCBoYXBwZW4gb25seSBvbmNlIC0gd2hpbGUgc2Nyb2xsaW5nIGRvd25cclxuICAgICAgbWlycm9yOiBmYWxzZSwgLy8gd2hldGhlciBlbGVtZW50cyBzaG91bGQgYW5pbWF0ZSBvdXQgd2hpbGUgc2Nyb2xsaW5nIHBhc3QgdGhlbVxyXG4gICAgICBhbmNob3JQbGFjZW1lbnQ6ICd0b3AtYm90dG9tJywgLy8gZGVmaW5lcyB3aGljaCBwb3NpdGlvbiBvZiB0aGUgZWxlbWVudCByZWdhcmRpbmcgdG8gd2luZG93IHNob3VsZCB0cmlnZ2VyIHRoZSBhbmltYXRpb25cclxuICAgIH1cclxuICApO1xyXG5cclxuXHRzZXRUaW1lb3V0KEFPUy5yZWZyZXNoSGFyZCwgMTAwMCk7XHJcblx0XHJcblx0Ly9jbGlwYm9hcmRcclxuXHJcbiAgdmFyIGFmZmlsMSA9IG5ldyBDbGlwYm9hcmQoJyNhZmZpbCcpO1xyXG4gIHZhciBiYW5uZXJzID0gbmV3IENsaXBib2FyZCgnLmNhYmluZXQtYmFubmVyX19jb3B5Jyk7XHJcblxyXG4gIGZ1bmN0aW9uIGFmZmlsaWF0ZWxpbmsoaWQpIHtcclxuICAgIGlkLm9uKCdzdWNjZXNzJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgLy8gc3dhbCh7XHJcbiAgICAgIC8vICAgdGl0bGU6IFwiWW91ciByZWZlcnJhbCBsaW5rIGNvcGllZCFcIixcclxuICAgICAgLy8gICB0ZXh0OiBcIllvdSBjYW4gcGFzdGUgdGV4dCB0aGF0IGhhcyBiZWVuIGNvcGllZCBieSBwcmVzc2luZyBDdHJsICsgVi4gVGhlIHRleHQgdGhhdCB3YXMgY29waWVkIGxhc3Qgd2lsbCBiZSBwYXN0ZWQuXCIsXHJcbiAgICAgIC8vICAgdHlwZTogXCJzdWNjZXNzXCIsXHJcbiAgICAgIC8vICAgc2hvd0NhbmNlbEJ1dHRvbjogZmFsc2UsXHJcbiAgICAgIC8vICAgY29uZmlybUJ1dHRvbkNsYXNzOiBcImJ0bi1zdWNjZXNzXCIsXHJcbiAgICAgIC8vICAgY29uZmlybUJ1dHRvblRleHQ6IFwiT0shXCIsXHJcbiAgICAgIC8vICAgY2xvc2VPbkNvbmZpcm06IGZhbHNlLFxyXG4gICAgICAvLyAgIGNsb3NlT25DYW5jZWw6IGZhbHNlXHJcbiAgICAgIC8vIH0pO1xyXG5cclxuICAgICAgTG9iaWJveC5ub3RpZnkoJ3N1Y2Nlc3MnLCB7XHJcbiAgICAgICAgLy8gZGVsYXk6IDEwMDAwMDAwMDAwMDAsXHJcbiAgICAgICAgdGl0bGU6IHRydWUsXHJcbiAgICAgICAgc2l6ZTogJ25vcm1hbCcsXHJcbiAgICAgICAgaWNvbjogZmFsc2UsXHJcbiAgICAgICAgc291bmQ6IGZhbHNlLFxyXG4gICAgICAgIGljb25Tb3VyY2U6IFwiYm9vdHN0cmFwXCIsXHJcbiAgICAgICAgbXNnOiAnWW91ciByZWZlcnJhbCBsaW5rIGNvcGllZCEnXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBhZmZpbGlhdGVsaW5rKGFmZmlsMSk7XHJcbiAgYWZmaWxpYXRlbGluayhiYW5uZXJzKTtcclxuXHJcbiAgLy8gc2xpZGVyc1xyXG5cclxuICB2YXIgc3RhdERlcG9zaXRTbGlkZXIgPSBuZXcgU3dpcGVyKCcuc3RhdC1zbGlkZXJfZGVwb3NpdCAuc3dpcGVyLWNvbnRhaW5lcicsIHtcclxuICAgIGxvb3A6IHRydWUsXHJcbiAgICBzbGlkZXNQZXJWaWV3OiA0LFxyXG4gICAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICAgIGF1dG9wbGF5OiB7XHJcbiAgICAgIGRlbGF5OiAzMDAwLFxyXG4gICAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgIG5leHRFbDogJy5zdGF0LXNsaWRlcl9kZXBvc2l0IC5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG4gICAgICBwcmV2RWw6ICcuc3RhdC1zbGlkZXJfZGVwb3NpdCAuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgIH0sXHJcblxyXG4gICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgMTIwMDoge1xyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgIH0sXHJcbiAgICAgIDk5Mjoge1xyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgIH0sXHJcbiAgICAgIDU2MDoge1xyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHZhciBzdGF0V2l0aGRyYXdTbGlkZXIgPSBuZXcgU3dpcGVyKCcuc3RhdC1zbGlkZXJfd2l0aGRyYXcgLnN3aXBlci1jb250YWluZXInLCB7XHJcbiAgICBsb29wOiB0cnVlLFxyXG4gICAgc2xpZGVzUGVyVmlldzogNCxcclxuICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICBhdXRvcGxheToge1xyXG4gICAgICBkZWxheTogMzAwMCxcclxuICAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IHRydWUsXHJcbiAgICB9LFxyXG4gICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICBuZXh0RWw6ICcuc3RhdC1zbGlkZXJfd2l0aGRyYXcgLnN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICAgIHByZXZFbDogJy5zdGF0LXNsaWRlcl93aXRoZHJhdyAuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgIH0sXHJcblxyXG4gICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgMTIwMDoge1xyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgIH0sXHJcbiAgICAgIDk5Mjoge1xyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgIH0sXHJcbiAgICAgIDU2MDoge1xyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHZhciBzdGFuZGFydFNsaWRlciA9IG5ldyBTd2lwZXIoJyNzdGFuZGFydCAuc3dpcGVyLWNvbnRhaW5lcicsIHtcclxuICAgIGxvb3A6IHRydWUsXHJcbiAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgc3BhY2VCZXR3ZWVuOiAwLFxyXG4gICAgZGlyZWN0aW9uOiAndmVydGljYWwnLFxyXG4gICAgc2xpZGVUb0NsaWNrZWRTbGlkZTogdHJ1ZSxcclxuICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgbmV4dEVsOiAnI3N0YW5kYXJ0IC5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG4gICAgICBwcmV2RWw6ICcjc3RhbmRhcnQgLnN3aXBlci1idXR0b24tcHJldicsXHJcbiAgICB9LFxyXG4gICAgYXV0b3BsYXk6IHtcclxuICAgICAgZGVsYXk6IDMwMDAsXHJcbiAgICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiB0cnVlLFxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICB2YXIgYWR2YW5jZWRTbGlkZXIgPSBuZXcgU3dpcGVyKCcjYWR2YW5jZWQgLnN3aXBlci1jb250YWluZXInLCB7XHJcbiAgICBsb29wOiB0cnVlLFxyXG4gICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgIHNwYWNlQmV0d2VlbjogMCxcclxuICAgIGRpcmVjdGlvbjogJ3ZlcnRpY2FsJyxcclxuICAgIHNsaWRlVG9DbGlja2VkU2xpZGU6IHRydWUsXHJcbiAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgIG5leHRFbDogJyNhZHZhbmNlZCAuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgICAgcHJldkVsOiAnI2FkdmFuY2VkIC5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG4gICAgfSxcclxuICAgIGF1dG9wbGF5OiB7XHJcbiAgICAgIGRlbGF5OiAzMDAwLFxyXG4gICAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIHZhciBwcmVtaXVtU2xpZGVyID0gbmV3IFN3aXBlcignI3ByZW1pdW0gLnN3aXBlci1jb250YWluZXInLCB7XHJcbiAgICBsb29wOiB0cnVlLFxyXG4gICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgIHNwYWNlQmV0d2VlbjogMCxcclxuICAgIGRpcmVjdGlvbjogJ3ZlcnRpY2FsJyxcclxuICAgIHNsaWRlVG9DbGlja2VkU2xpZGU6IHRydWUsXHJcbiAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgIG5leHRFbDogJyNwcmVtaXVtIC5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG4gICAgICBwcmV2RWw6ICcjcHJlbWl1bSAuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgIH0sXHJcbiAgICBhdXRvcGxheToge1xyXG4gICAgICBkZWxheTogMzAwMCxcclxuICAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IHRydWUsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICB2YXIgd2FsbGV0c1NsaWRlciA9IG5ldyBTd2lwZXIoJy53YWxsZXRzLXNsaWRlciAuc3dpcGVyLWNvbnRhaW5lcicsIHtcclxuICAgIGxvb3A6IHRydWUsXHJcbiAgICBzbGlkZXNQZXJWaWV3OiA1LFxyXG4gICAgc3BhY2VCZXR3ZWVuOiAxMCxcclxuICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgbmV4dEVsOiAnLndhbGxldHMtc2xpZGVyIC5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG4gICAgICBwcmV2RWw6ICcud2FsbGV0cy1zbGlkZXIgLnN3aXBlci1idXR0b24tcHJldicsXHJcbiAgICB9LFxyXG4gICAgYXV0b3BsYXk6IHtcclxuICAgICAgZGVsYXk6IDMwMDAsXHJcbiAgICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiB0cnVlLFxyXG4gICAgfSxcclxuXHJcbiAgICBicmVha3BvaW50czoge1xyXG4gICAgICAxMjAwOiB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogNCxcclxuICAgICAgfSxcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgdmFyIGNlcnRTbGlkZXIgPSBuZXcgU3dpcGVyKCcuY2VydC1zbGlkZXIgLnN3aXBlci1jb250YWluZXInLCB7XHJcbiAgICBsb29wOiB0cnVlLFxyXG4gICAgc3BhY2VCZXR3ZWVuOiA3MCxcclxuICAgIHNsaWRlc1BlclZpZXc6IDUsXHJcbiAgICBhdXRvcGxheToge1xyXG4gICAgICBkZWxheTogMzAwMCxcclxuICAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlLFxyXG4gICAgfSxcclxuXHJcbiAgICBicmVha3BvaW50czoge1xyXG4gICAgICAxODYwOiB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogNCxcclxuICAgICAgfSxcclxuICAgICAgMTUwMDoge1xyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgIH0sXHJcbiAgICAgIDEyMDA6IHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICB9LFxyXG4gICAgICA5OTI6IHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgICB9LFxyXG4gICAgICA1NjA6IHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICB9LFxyXG4gICAgICA0ODA6IHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICB2YXIgcm9hZG1hcFNsaWRlciA9IG5ldyBTd2lwZXIoJy5yb2FkbWFwLXNsaWRlciAuc3dpcGVyLWNvbnRhaW5lcicsIHtcclxuICAgIGxvb3A6IHRydWUsXHJcbiAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgZWZmZWN0OiAnZmFkZScsXHJcbiAgICBmYWRlRWZmZWN0OiB7XHJcbiAgICAgIGNyb3NzRmFkZTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgbmV4dEVsOiAnLnJvYWRtYXAtc2xpZGVyIC5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG4gICAgICBwcmV2RWw6ICcucm9hZG1hcC1zbGlkZXIgLnN3aXBlci1idXR0b24tcHJldicsXHJcbiAgICB9LFxyXG4gICAgYXV0b3BsYXk6IHtcclxuICAgICAgZGVsYXk6IDMwMDAsXHJcbiAgICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgZWw6ICcucm9hZG1hcC1zbGlkZXIgLnN3aXBlci1wYWdpbmF0aW9uJyxcclxuICAgICAgdHlwZTogJ2J1bGxldHMnLFxyXG4gICAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgICAgIHJlbmRlckJ1bGxldDogZnVuY3Rpb24gKGluZGV4LCBjbGFzc05hbWUpIHtcclxuICAgICAgICBpZigoaW5kZXggKyAxKSA8IDEwKXtcclxuICAgICAgICAgIHJldHVybiAnPHNwYW4gY2xhc3M9XCInICsgY2xhc3NOYW1lICsgJ1wiPjAnICsgKGluZGV4ICsgMSkgKyAnPC9zcGFuPic7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICByZXR1cm4gJzxzcGFuIGNsYXNzPVwiJyArIGNsYXNzTmFtZSArICdcIj4nICsgKGluZGV4ICsgMSkgKyAnPC9zcGFuPic7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgaWYoJCgnLnJvYWRtYXAtbmF2JykubGVuZ3RoICE9PSAwKXtcclxuICAgIHZhciByb2FkbWFwSXRlbSA9ICQoJy5yb2FkbWFwLW5hdl9faXRlbScpO1xyXG4gIFxyXG4gICAgcm9hZG1hcEl0ZW0ub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICQodGhpcykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgIHJvYWRtYXBTbGlkZXIuc2xpZGVUbygkKHRoaXMpLmluZGV4KCkgKyAxKVxyXG4gICAgfSlcclxuICBcclxuICAgIHJvYWRtYXBTbGlkZXIub24oJ3NsaWRlQ2hhbmdlJywgZnVuY3Rpb24oKXtcclxuICAgICAgcm9hZG1hcEl0ZW0uZXEocm9hZG1hcFNsaWRlci5yZWFsSW5kZXgpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgcm9hZG1hcEl0ZW0uZXEocm9hZG1hcFNsaWRlci5yZWFsSW5kZXgpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHZhciBjYWJCYWxhbmNlID0gbmV3IFN3aXBlcignLmNhYmluZXQtYmFsYW5jZV9fd2FsbGV0cyAuc3dpcGVyLWNvbnRhaW5lcicsIHtcclxuICAgIGxvb3A6IHRydWUsXHJcbiAgICBzbGlkZXNQZXJWaWV3OiA0LFxyXG4gICAgc3BhY2VCZXR3ZWVuOiA4LFxyXG4gICAgZGlyZWN0aW9uOiAndmVydGljYWwnLFxyXG4gICAgc2xpZGVUb0NsaWNrZWRTbGlkZTogdHJ1ZSxcclxuICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgbmV4dEVsOiAnLmNhYmluZXQtYmFsYW5jZV9fbmF2IC5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG4gICAgICBwcmV2RWw6ICcuY2FiaW5ldC1iYWxhbmNlX19uYXYgLnN3aXBlci1idXR0b24tcHJldicsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICB2YXIgY2FiQmFsYW5jZUNvbnRlbnQgPSBuZXcgU3dpcGVyKCcuY2FiaW5ldC1iYWxhbmNlX19jb250ZW50IC5zd2lwZXItY29udGFpbmVyJywge1xyXG4gICAgbG9vcDogdHJ1ZSxcclxuICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICBlZmZlY3Q6ICdmYWRlJyxcclxuICAgIGZhZGVFZmZlY3Q6IHtcclxuICAgICAgY3Jvc3NGYWRlOiB0cnVlXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICBjYWJCYWxhbmNlLm9uKCdzbGlkZUNoYW5nZScsIGZ1bmN0aW9uKCl7XHJcbiAgICBjYWJCYWxhbmNlQ29udGVudC5zbGlkZVRvKGNhYkJhbGFuY2UucmVhbEluZGV4ICsgMSk7XHJcbiAgfSlcclxuXHJcblxyXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgJCgnLm1hcnF1ZWUnKS5tYXJxdWVlKHtcclxuICAgICAgLy9zcGVlZCBpbiBtaWxsaXNlY29uZHMgb2YgdGhlIG1hcnF1ZWVcclxuICAgICAgZHVyYXRpb246IDEzMDAwLFxyXG4gICAgICAvL2dhcCBpbiBwaXhlbHMgYmV0d2VlbiB0aGUgdGlja2Vyc1xyXG4gICAgICBnYXA6IDAsXHJcbiAgICAgIC8vdGltZSBpbiBtaWxsaXNlY29uZHMgYmVmb3JlIHRoZSBtYXJxdWVlIHdpbGwgc3RhcnQgYW5pbWF0aW5nXHJcbiAgICAgIGRlbGF5QmVmb3JlU3RhcnQ6IDAsXHJcbiAgICAgIC8vJ2xlZnQnIG9yICdyaWdodCdcclxuICAgICAgZGlyZWN0aW9uOiAnbGVmdCcsXHJcbiAgICAgIC8vdHJ1ZSBvciBmYWxzZSAtIHNob3VsZCB0aGUgbWFycXVlZSBiZSBkdXBsaWNhdGVkIHRvIHNob3cgYW4gZWZmZWN0IG9mIGNvbnRpbnVlcyBmbG93XHJcbiAgICAgIGR1cGxpY2F0ZWQ6IHRydWVcclxuICAgIH0pO1xyXG4gIH0sIDEwMDApO1xyXG5cclxuICAvL2NhYmluZXQtc2V0dGluZ3NcclxuXHJcbiAgLy8gJCgnLmNhYmluZXQtdGFibGVfX3NldHRpbmdzLWJ0bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gIC8vICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIFxyXG4gICAgXHJcbiAgXHJcbiAgLy8gICAkKHRoaXMpLnNpYmxpbmdzKCcuY2FiaW5ldC10YWJsZV9fc2V0dGluZ3MtaGlkZScpLmZhZGVJbigzMDApO1xyXG4gIC8vICAgJCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgLy8gICBsZXQgdHJ1ZUggPSAoJChkb2N1bWVudCkub3V0ZXJIZWlnaHQodHJ1ZSkgLSAkKHRoaXMpLnNpYmxpbmdzKCcuY2FiaW5ldC10YWJsZV9fc2V0dGluZ3MtaGlkZScpLm9mZnNldCgpLnRvcCAtICQodGhpcykuc2libGluZ3MoJy5jYWJpbmV0LXRhYmxlX19zZXR0aW5ncy1oaWRlJykub3V0ZXJIZWlnaHQodHJ1ZSkpO1xyXG4gIFxyXG4gIC8vICAgaWYodHJ1ZUggPD0gMCl7XHJcbiAgLy8gICAgICQodGhpcykuc2libGluZ3MoJy5jYWJpbmV0LXRhYmxlX19zZXR0aW5ncy1oaWRlJykuYWRkQ2xhc3MoJ3RvcCcpO1xyXG4gIC8vICAgfVxyXG4gIC8vIH0pO1xyXG4gIFxyXG4gIC8vICQoZG9jdW1lbnQpLm1vdXNldXAoZnVuY3Rpb24gKGUpeyBcclxuICAvLyAgIHZhciBibG9jayA9ICQoXCIuY2FiaW5ldC10YWJsZV9fc2V0dGluZ3MuYWN0aXZlIC5jYWJpbmV0LXRhYmxlX19zZXR0aW5ncy1oaWRlXCIpOyBcclxuICAvLyAgIGlmICghYmxvY2suaXMoZS50YXJnZXQpIFxyXG4gIC8vICAgICAgICYmIGJsb2NrLmhhcyhlLnRhcmdldCkubGVuZ3RoID09PSAwKSB7IFxyXG4gIC8vICAgICAgIGJsb2NrLmhpZGUoKTsgXHJcbiAgXHJcbiAgLy8gICAgICAgYmxvY2sucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gIFxyXG4gIC8vICAgICAgIGlmKCBibG9jay5oYXNDbGFzcygndG9wJykpe1xyXG4gIC8vICAgICAgICAgYmxvY2sucmVtb3ZlQ2xhc3MoJ3RvcCcpO1xyXG4gIC8vICAgICAgIH1cclxuICAvLyAgIH1cclxuICAvLyB9KTtcclxuXHJcblxyXG5cclxuICAvLyAvL2NoYXJ0IHByb2ZpdFxyXG5cclxuICAvLyBpZigkKFwiI3RyYWRlXCIpLmxlbmd0aCAhPT0gMCl7XHJcbiAgLy8gICB2YXIgY3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RyYWRlJykuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAvLyAgIHZhciBncmFkaWVudEZpbGwgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgMCwgMCwgMzAwKTtcclxuICAvLyAgIGdyYWRpZW50RmlsbC5hZGRDb2xvclN0b3AoMCwgXCJyZ2JhKDEwMCwgMjIxLCAyNDksIDEpXCIpO1xyXG4gIC8vICAgZ3JhZGllbnRGaWxsLmFkZENvbG9yU3RvcCgxLCBcInJnYmEoMTAwLCAyMjEsIDI0OSwgMClcIik7XHJcbiAgLy8gICB2YXIgY2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCB7XHJcbiAgLy8gICAgIC8vIFRoZSB0eXBlIG9mIGNoYXJ0IHdlIHdhbnQgdG8gY3JlYXRlXHJcbiAgLy8gICAgIHR5cGU6ICdsaW5lJyxcclxuICAvLyAgICAgZGF0YToge1xyXG4gIC8vICAgICAgIGxhYmVsczogWydNb24nLCAnVHVlcycsICdXZWQnLCAnVGh1cnMnLCdGcmknLCdTYXQnLCdTdW4nXSxcclxuICAvLyAgICAgICBkYXRhc2V0czogW3tcclxuICAvLyAgICAgICAgIGRhdGE6IFt7XHJcbiAgLy8gICAgICAgICAgIHg6ICdNb24nLFxyXG4gIC8vICAgICAgICAgICB5OiAyNTBcclxuICAvLyAgICAgICAgIH0sIHtcclxuICAvLyAgICAgICAgICAgeDogJ1R1ZXMnLFxyXG4gIC8vICAgICAgICAgICB5OiAxMDVcclxuICAvLyAgICAgICAgIH0sXHJcbiAgLy8gICAgICAgICB7XHJcbiAgLy8gICAgICAgICAgIHg6ICdXZWQnLFxyXG4gIC8vICAgICAgICAgICB5OiA5MFxyXG4gIC8vICAgICAgICAgfSxcclxuICAvLyAgICAgICAgIHtcclxuICAvLyAgICAgICAgICAgeDogJ1RodXJzJyxcclxuICAvLyAgICAgICAgICAgeTogMTc1XHJcbiAgLy8gICAgICAgICB9LFxyXG4gIC8vICAgICAgICAge1xyXG4gIC8vICAgICAgICAgICB4OiAnRnJpJyxcclxuICAvLyAgICAgICAgICAgeTogMTI1XHJcbiAgLy8gICAgICAgICB9LFxyXG4gIC8vICAgICAgICAge1xyXG4gIC8vICAgICAgICAgICB4OiAnU2F0JyxcclxuICAvLyAgICAgICAgICAgeTogMTQ1XHJcbiAgLy8gICAgICAgICB9LFxyXG4gIC8vICAgICAgICAge1xyXG4gIC8vICAgICAgICAgICB4OiAnU3VuJyxcclxuICAvLyAgICAgICAgICAgeTogMjc1XHJcbiAgLy8gICAgICAgICB9XSxcclxuICAvLyAgICAgICAgIGJhY2tncm91bmRDb2xvcjogZ3JhZGllbnRGaWxsLFxyXG4gIC8vICAgICAgICAgYm9yZGVyQ29sb3I6ICcjNjRkZGY5JyxcclxuICAvLyAgICAgICAgIGJvcmRlcldpZHRoOiA0LFxyXG4gIC8vICAgICAgIH1dXHJcbiAgLy8gICAgIH0sXHJcblxyXG4gICAgICBcclxuICBcclxuICAvLyAgICAgLy8gQ29uZmlndXJhdGlvbiBvcHRpb25zIGdvIGhlcmVcclxuICAvLyAgICAgb3B0aW9uczoge1xyXG4gIC8vICAgICAgIGN1dG91dFBlcmNlbnRhZ2U6IDcwLFxyXG4gIC8vICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgLy8gICAgICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogZmFsc2UsXHJcbiAgLy8gICAgICAgbGVnZW5kOiB7XHJcbiAgLy8gICAgICAgICBkaXNwbGF5OiBmYWxzZVxyXG4gIC8vICAgICAgIH0sXHJcbiAgLy8gICAgICAgc2NhbGVzOiB7XHJcbiAgLy8gICAgICAgICB5QXhlczogW3tcclxuICAvLyAgICAgICAgICAgICB0aWNrczoge1xyXG4gIC8vICAgICAgICAgICAgICAgICBmb250Q29sb3I6IFwid2hpdGVcIixcclxuICAvLyAgICAgICAgICAgICB9XHJcbiAgLy8gICAgICAgICB9XSxcclxuICAvLyAgICAgICAgIHhBeGVzOiBbe1xyXG4gIC8vICAgICAgICAgICAgIHRpY2tzOiB7XHJcbiAgLy8gICAgICAgICAgICAgICAgIGZvbnRDb2xvcjogXCJ3aGl0ZVwiLFxyXG4gIC8vICAgICAgICAgICAgIH1cclxuICAvLyAgICAgICAgIH1dXHJcbiAgLy8gICAgIH1cclxuICAgICAgICBcclxuICAvLyAgICAgfVxyXG4gIC8vICAgfSk7XHJcbiAgLy8gfVxyXG5cclxuXHJcbn0pKCk7Il19
