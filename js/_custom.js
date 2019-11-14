document.addEventListener("DOMContentLoaded", function() {
	const buttons = document.querySelectorAll('.item__button');
	for (button of buttons){
		button.addEventListener('click',(e)=>{
			const rex = /(<([^>]+)>)/ig;
			const value = e.target.parentNode.children[1].innerHTML.replace(rex , "");
		})
	}
	// Custom JS

});
