import ActiveClass from '../classes/ActiveClass.js'

addEventListener('DOMContentLoaded', () => {
	const btnsOpenPopup = document.querySelectorAll('.open-popup')
	const popup = document.querySelector('.popup')
	const btnsModalClose = document.querySelectorAll('.modal-close')
	const modals = document.querySelectorAll('.modal')

	btnsOpenPopup.forEach(elem => {
		elem.addEventListener('click', () => {
			modals.forEach(modal => {
				console.log(1);
				const removeModalActive = new ActiveClass({
					element: modal,
				})
				removeModalActive.setActive(false)
			})
			modals.forEach(modal =>{
				if(elem.getAttribute('id') === modal.getAttribute('data-id')){
					const activeModal = new ActiveClass ({
						element: modal
					})
					activeModal.setActive(true)
				}
			})
			const activePopup = new ActiveClass({
				element: popup,

			})
            activePopup.setActive(true)
		})
	})
	btnsModalClose.forEach(elem => {
		elem.addEventListener('click', ()=>{
			const RemovePopupActive = new ActiveClass ({
				element: popup
			})
			RemovePopupActive.setActive(false)
			modals.forEach(modal =>{
				const removeModalActive = new ActiveClass({
					element: modal,
				})
				removeModalActive.setActive(false)
			})
		})
	})
})
