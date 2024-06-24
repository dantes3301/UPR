import * as flsFunctions from './modules/functions.js'

flsFunctions.isWebp()

// import Swiper from 'swiper'
// import { Navigation, Pagination } from 'swiper/modules'

// Swiper.use([Navigation, Pagination])

// const swiper = new Swiper('.main-swiper', {
// 	pagination: {
// 		el: '.main-swiper-pagination',
// 	},
// })

import * as slider from './index/slider.js'

slider.slider()

import { Fancybox } from '@fancyapps/ui'


Fancybox.bind('[data-fancybox]', {
	// Your custom options
})