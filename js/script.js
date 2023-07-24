const prevArrow = (className) => {
	return `<svg class="${className}" width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path d="M8.77789 0.562669L0.564298 8.71345C-0.188099 9.46459 -0.188099 10.6838 0.564298 11.4324L8.77789 19.5881C9.5366 20.3392 10.7646 20.3354 11.5233 19.5881C12.2744 18.8357 12.2744 17.6215 11.5233 16.8691L6.71818 12.1016H22.1324C23.2459 12.1016 24.1467 11.202 24.1467 10.0885C24.1467 8.97625 23.2459 8.07537 22.1324 8.07537H6.68919L11.5233 3.28282C12.2744 2.53168 12.2744 1.31623 11.5233 0.565085C10.7658 -0.187313 9.53783 -0.188569 8.77789 0.562568V0.562669Z" fill="white"/>
	</svg>`;
}
const nextArrow = (className) => {
	return `<svg class="${className}" width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path d="M15.8668 19.5874L24.0804 11.4366C24.8328 10.6854 24.8328 9.46621 24.0804 8.71758L15.8668 0.561968C15.1081 -0.189173 13.88 -0.185404 13.1214 0.561968C12.3702 1.31437 12.3702 2.52856 13.1214 3.28096L17.9265 8.04838L2.5123 8.04838C1.39879 8.04838 0.497906 8.94802 0.497906 10.0615C0.497906 11.1738 1.39879 12.0747 2.5123 12.0747L17.9555 12.0747L13.1214 16.8672C12.3702 17.6183 12.3702 18.8338 13.1214 19.5849C13.8788 20.3373 15.1068 20.3386 15.8668 19.5875V19.5874Z" fill="white"/>
	</svg>`;
}

window.onload = function(){
	$('.promo__slider').slick({
		autoplay: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		appendArrows: '.promo__arrows',
		prevArrow: prevArrow('promo__arrow'),
		nextArrow: nextArrow('promo__arrow'),
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
		 searchLink = document.querySelector('.nav__search .nav__item'),
		 promoTitleItem = document.querySelectorAll('.promo__title-item'),
		 surfDotsPath = document.querySelectorAll('.surf__dot path'),
		 surfDots = document.querySelectorAll('.surf__dot'),
		 surfDrops = [],
		 surfModals = document.querySelectorAll('.surf__modal');



	promoDotsList.style.display = 'flex';
	promoTitleItem.forEach(item => {
		item.style.display = 'flex';
	});
	
	searchLink.addEventListener('click', (e) => {
		e.preventDefault();
		searchForm.classList.toggle('search_visible');
	});

	for (let i = 0; i < surfDots.length; i++) {
		surfDrops[i] = document.createElement('img');
	}
	surfDrops.forEach((drop, index) => {
		drop.src = '../icons/surf/drop.svg';
		drop.alt = 'drop';
		drop.classList.add('surf__drop');
		drop.style.top = (+getComputedStyle(surfDots[index]).top.slice(0, -2) + 25) + 'px';
		drop.style.left = (+getComputedStyle(surfDots[index]).left.slice(0, -2) + 34.5) + 'px';
		surfDots[index].before(drop);
	});

	surfModals.forEach((modal, index) => {
		modal.style.top = (+getComputedStyle(surfDots[index]).top.slice(0, -2) - 200) + 'px';
		modal.style.left = (+getComputedStyle(surfDots[index]).left.slice(0, -2) - 100) + 'px';
	});

	surfModals[surfModals.length - 1].classList.add('modal_active');
	surfDrops[surfDrops.length - 1].classList.add('surf__drop_active');

	surfDotsPath.forEach((dot, index) => {
		dot.addEventListener('mouseover', () => {
			surfModals[index].classList.toggle('modal_active');
			surfDrops[index].classList.toggle('surf__drop_active');
		});
	});

	$("a").click(function() {
		const _href = $(this).attr("href");
		$("html, body").animate({
			scrollTop: $(_href).offset().top + "px"
		});
		return false;
	});

	$('.carousel__wrapper').slick({
		autoplay: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		appendArrows: '.carousel__arrows',
		prevArrow: prevArrow('carousel__arrow'),
		nextArrow: nextArrow('carousel__arrow'),
		draggable: false
	});

	$('.travel__slider').slick({
		autoplay: true,
		autoplaySpeed: 5000,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		appendArrows: '.travel__arrows',
		prevArrow: prevArrow('travel__arrow'),
		nextArrow: nextArrow('travel__arrow'),
		draggable: false,
		fade: true
	});
}