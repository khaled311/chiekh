$(window).on("load", function () {
  $(".loader").fadeOut(1000);
  $("html").css("overflow-y", "auto");
});

$(function () {
    
    var home_slider = new Swiper('.home_slider .swiper-container', {
        spaceBetween: 16,
        slidesPerView: 3,
        navigation: {
            nextEl: '.home_slider .swiper-button-next',
            prevEl: '.home_slider .swiper-button-prev',
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        loop: true,
        breakpoints: {
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 16,
            },
        }
    })

    $("#home_tabs li").on("click", function() {
        let target = $(this).data("div");
        $(this).addClass("active").siblings().removeClass("active");
        $(`.divs .${target}`).addClass("active");
        $(`.divs .${target}`).siblings().removeClass("active");
    })

    $("#home_tabs_left li").on("click", function() {
        let target = $(this).data("div");
        $(this).addClass("active").siblings().removeClass("active");
        $(`.cat-left_divs .${target}`).addClass("active");
        $(`.cat-left_divs .${target}`).siblings().removeClass("active");
    })

    $("#bottom_tabs_left li").on("click", function() {
      let target = $(this).data("div");
      $(this).addClass("active").siblings().removeClass("active");
      $(`.kh-left_divs .${target}`).addClass("active");
      $(`.kh-left_divs .${target}`).siblings().removeClass("active");
  })

    var home_books_slider = new Swiper('.books_newsletters .swiper-container', {
        spaceBetween: 16,
        slidesPerView: 5,
        navigation: {
            nextEl: '.books_newsletters .swiper-button-next',
            prevEl: '.books_newsletters .swiper-button-prev',
        },
        pagination: {
            el: '.books_newsletters .swiper-pagination',
            clickable: true
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        loop: true,
        breakpoints: {
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 3,
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 16,
            },
        }
    })

    var home_khawater_slider = new Swiper('.khawater .swiper-container', {
      spaceBetween: 16,
      slidesPerView: 5,
      navigation: {
          nextEl: '.khawater .swiper-button-next',
          prevEl: '.khawater .swiper-button-prev',
      },
      pagination: {
          el: '.khawater .swiper-pagination',
          clickable: true
      },
      autoplay: {
          delay: 2500,
          disableOnInteraction: false,
      },
      loop: true,
      breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 3,
            spaceBetween: 16,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 16,
          },
      }
    })

    // Side Menu

    $(".menuTrigger").on("click", function() {
      $(".overlay_main").addClass("open");
      $(".sideMenu").addClass("open");
    })

    $(".overlay_main").on("click", function() {
      $(".overlay_main").removeClass("open");
      $(".sideMenu").removeClass("open");
    })

    // Side Menu

    $(".cat .right-categories li").hover(
      function(){
        $(this).find("ul.in").slideDown()
      },
      function() {
        $(this).find("ul.in").slideUp()
      }
    )

    try{
      const player = new Plyr('#player');
    }catch(err){}

    try{
      new GreenAudioPlayer('.audio_Embed', { stopOthersOnPlay: true, showDownloadButton: true });
      PDFObject.embed($('#example1').data("src"), "#example1");
      $('[data-fancybox="data-fancybox"]').fancybox({
          // Options will go here
      });
    }catch(err){}
});
