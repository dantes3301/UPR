export default class MyMap {
	constructor({ element }) {
		if (element.nodeType == 1) {
			this._element = element
		} else {
			this._element = document.querySelector(element)
		}

		this._id = document.querySelector('.map__id')

		const callback = (entries, observer) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					this._loadMap()
					observer.unobserve(entry.target)
				}
			})
		}

		const options = {
			rootMargin: '0px 0px 300px 0px',
			threshold: 0,
		}

		const observer = new IntersectionObserver(callback, options)
		observer.observe(this._element)
	}

	_loadMap() {
		let script = document.createElement('script')
		script.src =
			'https://api-maps.yandex.ru/v3/?apikey=31395160-48e5-4f64-b599-488f67a744c4&lang=ru_RU'
		document.body.appendChild(script)
		const self = this
		script.onload = function () {
			self._initMap()
		}
	}

	async _initMap() {
		// Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты основного модуля API
		await ymaps3.ready

		const {
			YMap,
			YMapDefaultSchemeLayer,
			YMapDefaultFeaturesLayer,
			YMapMarker,
		} = ymaps3

		// Иницилиазируем карту
		const map = new YMap(
			// Передаём ссылку на HTMLElement контейнера
			this._id,

			// Передаём параметры инициализации карты
			{
				location: {
					// Координаты центра карты
					center: [56.006629, 54.717024],

					// Уровень масштабирования
					zoom: 15,
				},
			}
		)

		// Добавляем слой для отображения схематической карты
		map.addChild(new YMapDefaultSchemeLayer())

		// Добавьте слой для маркеров
		map.addChild(new YMapDefaultFeaturesLayer())

		const markerItems = [
			{
				name: 'firstMarker',
				coordinates: [56.006629, 54.717024],
			},
		]

		markerItems.forEach(markerItem => {
			const content = document.createElement('section')
			content.classList.add('map__marker')
			const img = document.createElement('img')
			img.setAttribute('src', 'img/mapMark.svg')
			content.appendChild(img)

			const marker = new YMapMarker(
				{
					coordinates: markerItem.coordinates,
				},
				content
			)

			map.addChild(marker)
		})
	}
}
