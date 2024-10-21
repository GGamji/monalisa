// ** Swiper

const mainSwiper = new Swiper('.main-swiper', {
	loop: true,
	autoplay: {
		delay: 3000,
	},
	navigation: {
		nextEl: '.swiper-next',
		prevEl: '.swiper-prev',
  }
})

const brandSwiper = new Swiper('.brand-swiper', {
	loop: true,
	autoplay: {
		delay: 3000,
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