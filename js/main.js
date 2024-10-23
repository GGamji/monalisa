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


$('header #gnb').mouseover(function() {
	$('.dep2_wrap').show()
	$('header').addClass('on')
	$(this).addClass('over')
});
$('header #gnb').mouseout(function() {
	$('.dep2_wrap').hide()
	$('header').removeClass('on')
	$('header #gnb>li').removeClass('over')
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

$('allmenu_wrap .btn_allmenu_open').click(function() {
	$('.allmenu_popup').css('display', 'flex')
})