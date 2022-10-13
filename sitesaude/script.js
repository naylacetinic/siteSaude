function menuShow() {
	let menuMobile = document.querySelector('.menumobile');
	if (menuMobile.classList.contains('open')) {
		menuMobile.classList.remove('open');
		document.querySelector('.icon').src = "menuwhite.svg";
	} else {
		menuMobile.classList.add('open');
	}
}