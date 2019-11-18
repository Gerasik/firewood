document.addEventListener("DOMContentLoaded", function() {
	// const buttons = document.querySelectorAll('.item__button');
	// const modal = document.querySelector('.modal-from');
	// for (button of buttons){e
	// 	button.addEventListener('click',(e)=>{
	// 		const rex = /(<([^>]+)>)/ig;
	// 		const value = e.target.parentNode.children[1].innerHTML.replace(rex , "");
	// 		modal.classList.toggle('modal-from--hidden');
	// 		modal.style.opacity = 0;
	// 		modal.style.transition = 'all 0.5s cubic-bezier(0.53, -0.02, 0.95, 0.46) 0s'
	// 		setTimeout(()=>modal.style.opacity = 1, 10)
	// 		modal.getElementsByTagName('textarea')[0].value = value
	// 	})
	// }
	// const closeModal = document.querySelector('.modal-from__close');
	// closeModal.addEventListener('click',(e)=>{
	// 	e.preventDefault();
	// 	modal.classList.toggle('modal-from--hidden')
	// })
	// Custom JS

	const headerMenu = document.querySelector('.header-menu')
	const headerButton = document.querySelector('.header-button')
	document.addEventListener('scroll',()=>{
		const scrollHeight = document.documentElement.scrollTop;
		if (scrollHeight > 0) {
			headerMenu.classList.add('header-menu--black');
		} else {
			headerMenu.classList.remove('header-menu--black');
		}
	});
	headerMenu.querySelector('.navigation').addEventListener('click',()=>{
		headerButton.classList.remove('header-button--active');
		headerMenu.classList.remove('header-menu--active');
	})

	headerButton.addEventListener('click',()=>{
			headerButton.classList.toggle('header-button--active');
			headerMenu.classList.toggle('header-menu--active');	
	});
});
