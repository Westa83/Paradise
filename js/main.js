const burger = document.querySelector(".burger-btn");
const navItems = document.querySelector(".nav__items");
const allNavItems = document.querySelectorAll(".nav__item");
const navBtnBars = document.querySelector(".burger-btn__bars");
const allSections = document.querySelectorAll(".section");
const FooterYear = document.querySelector(".footer__year");
const body = document.querySelector('body');
// console.log(body);

const handleNav = () => {
	body.style.overflow = 'hidden'
	navItems.classList.toggle("nav--active");

	navBtnBars.classList.remove('black-bars-color');

	allNavItems.forEach((item) => {
		item.addEventListener("click", () => {
			navItems.classList.remove("nav--active");
			body.style.overflow = 'auto';
			// handleObserver();
		});
	});
	handleNavItemsAnimation();
	if(!navItems.classList.contains('nav--active')) {
		body.style.overflow = 'auto'
		// handleObserver();
	}
};

const handleNavItemsAnimation = () => {
	let delayTime = 0;

	allNavItems.forEach((item) => {
		item.classList.toggle("nav-items-animation");
		item.style.animationDelay = `.${delayTime++}s`;
	});
	
};

const deleteAnimation = () => {
	allNavItems.forEach((item) => {
		item.classList.remove("nav-items-animation");
	});
};

const handleObserver = () => {
	//pokazuje jak daleko przescrolowaliśmy stronę
	const currentSection = window.scrollY;
	// console.log(currentSection);

	allSections.forEach(section => {
		if(section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
			navBtnBars.classList.add('black-bars-color')
		} else if (!section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
			navBtnBars.classList.remove('black-bars-color')
		}
	})
}

window.addEventListener('scroll', handleObserver);

function handleCurrentYear() {
	const year = new Date().getFullYear();
	FooterYear.innerText = year;
}

handleCurrentYear()

burger.addEventListener("click", handleNav);

// albo nadać na każdy link zdarzenie onclick=deleteAnimation()
Array.from(allNavItems).forEach((item) => {
	item.addEventListener("click", deleteAnimation);
});


