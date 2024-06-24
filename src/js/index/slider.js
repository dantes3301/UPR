import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'

export function slider(){
	
Swiper.use([Navigation, Pagination])

const swiper = new Swiper('.main-swiper', {
	pagination: {
		el: '.main-swiper-pagination',
	},
})

const swiperTwo = new Swiper('.rewiews-swiper', {
	slidesPerView: 4,
	spaceBetween: 20,

	pagination: {
		el: '.reviews-swiper-pagination',
	},
	navigation: {
		nextEl: '.reviews-btn-next',
		prevEl: '.reviews-btn-prev',
	},
})

}