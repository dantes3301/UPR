import ActiveClass from '../classes/ActiveClass.js'
import { lockBody, unlockBody } from '../modules/toggleBody.js'

addEventListener('DOMContentLoaded', ()=>{
    const btnBurger = document.querySelector('.header__burger')
    const headerLink = document.querySelectorAll('.header__link')
    
    const toggleActive = new ActiveClass({
			element: document.querySelector('.header__menu-mobil'),
			active: false
		})
    
    headerLink.forEach(elem => {
            elem.addEventListener('click', () => {
                toggleActive.setActive(false)
            })
    })
    btnBurger.addEventListener('click', () => {
			toggleActive.setToggleActive()
            btnBurger.classList.toggle('active')
			if (document.querySelector('.header__menu-mobil').classList.contains('active')) {
				lockBody()
			} else {
				unlockBody()
			}
		})
})