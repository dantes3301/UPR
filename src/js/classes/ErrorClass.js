export default class ErrorClass {
	_error = false
	constructor({ element, error = true, className = 'error' }) {
		this._className = className
		if (element.nodeType == 1) {
			this._element = element
		} else {
			this.element = document.querySelector(element)
		}
		if (error) {
			this.setError(error)
			this._setClass()
		}
	}
	setError(value) {
		this._error = value
		this._setClass()
	}
	_setClass() {
		if (this._error) {
			this._element.classList.add(this._className)
		} else {
			this._element.classList.remove(this._className)
		}
	}
	get error() {
		return this._error
	}
	get element() {
		return this._element
	}
}