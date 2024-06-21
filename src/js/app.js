import * as flsFunctions from './modules/functions.js'

flsFunctions.isWebp()

import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'

Swiper.use([Navigation, Pagination])

const swiper = new Swiper('.main-swiper', {
	pagination: {
		el: '.main-swiper-pagination',
	},
})
