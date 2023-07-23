$(document).ready(function(){
	$('.promo__slider').slick({
		autoplay: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		appendArrows: '.promo__arrows',
		prevArrow: `<svg class="promo__arrow" width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M8.77789 0.562669L0.564298 8.71345C-0.188099 9.46459 -0.188099 10.6838 0.564298 11.4324L8.77789 19.5881C9.5366 20.3392 10.7646 20.3354 11.5233 19.5881C12.2744 18.8357 12.2744 17.6215 11.5233 16.8691L6.71818 12.1016H22.1324C23.2459 12.1016 24.1467 11.202 24.1467 10.0885C24.1467 8.97625 23.2459 8.07537 22.1324 8.07537H6.68919L11.5233 3.28282C12.2744 2.53168 12.2744 1.31623 11.5233 0.565085C10.7658 -0.187313 9.53783 -0.188569 8.77789 0.562568V0.562669Z" fill="white"/>
		</svg>`,
		nextArrow: `<svg class="promo__arrow" width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M15.8668 19.5874L24.0804 11.4366C24.8328 10.6854 24.8328 9.46621 24.0804 8.71758L15.8668 0.561968C15.1081 -0.189173 13.88 -0.185404 13.1214 0.561968C12.3702 1.31437 12.3702 2.52856 13.1214 3.28096L17.9265 8.04838L2.5123 8.04838C1.39879 8.04838 0.497906 8.94802 0.497906 10.0615C0.497906 11.1738 1.39879 12.0747 2.5123 12.0747L17.9555 12.0747L13.1214 16.8672C12.3702 17.6183 12.3702 18.8338 13.1214 19.5849C13.8788 20.3373 15.1068 20.3386 15.8668 19.5875V19.5874Z" fill="white"/>
		</svg>`,
		initialSlide: 2,
		asNavFor: '.promo__title-wrapper',
		dots: true,
		appendDots: '.promo__slider-dots'
	});

	$('.promo__title-wrapper').slick({
		autoplay: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		respondTo: 'slider',
		initialSlide: 2,
		fade: true
	});

	const promoDotsList = document.querySelector('.promo__slider-dots .slick-dots'),
		 searchForm = document.querySelector('.search'),
		 searchLink = document.querySelector('.nav__search .nav__item');

	promoDotsList.computedStyleMap.display = 'flex';
	
	searchLink.addEventListener('click', (e) => {
		e.preventDefault();
		searchForm.classList.toggle('search_visible');
	});
});