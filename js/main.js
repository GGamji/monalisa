// ** Swiper

const mainSwiper = new Swiper('.main-swiper', {
	loop: true,
	autoplay: {
		delay: 5000,
	},
	navigation: {
		nextEl: '.swiper-next',
		prevEl: '.swiper-prev',
  }
})

const brandSwiper = new Swiper('.brand-swiper', {
	loop: true,
	autoplay: {
		delay: 4000,
	},
	navigation: {
		nextEl: '.swiper-next',
		prevEl: '.swiper-prev',
  },
	breakpoints: {
		500: {
			slidesPerView: 1
		},
		501: {
			slidesPerView: 2
		},
		1025: {
			slidesPerView: 1
		}
	}
})

// $('.news_wrap .news_content .news_card').hover(function() {
// 	$('.news_wrap .news_content .news_card').not(this).removeClass('active');
// 	$(this).addClass('active');
// })


// header
$(window).scroll(function() {
if($(window).scrollTop() >= 10) {
	$('header').addClass('scroll')
} else {
	$('header').removeClass('scroll')
}
})


$('header').hover(function() {
	$('.dep2_wrap').show()
	$('header').addClass('on')
},function() {
	$('.dep2_wrap').hide()
	$('header').removeClass('on')
});

$('.lang_wrap button').click(function() {
	$('.lang_wrap ul').slideToggle()
	$('.lang_wrap li').addClass('on')
})

$('.search_wrap .btn_search_open').click(function() {
	$('.search_popup').css('display', 'flex')
})
$('.search_popup .close_btn').click(function() {
	$('.search_popup').css('display', 'none')
})

$('.allmenu_wrap .btn_allmenu_open').click(function() {
	$('.allmenu_popup').css('display', 'flex')
})
$('.allmenu_wrap .btn_allmenu_close').click(function() {
	$('.allmenu_popup').css('display', 'none')
})



// Main
$('.job_links>button').mouseenter(function() {
	$(this).addClass('active')
})
$('.job_links>button').mouseleave(function() {
	$(this).removeClass('active')
})