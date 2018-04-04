const $ = require('jquery')
require('jcanvas')($, window)

export default {
    name: 'about'
    , data() {
        return {
            $canvas: null
        }
    }
    , mounted() {
		this.$canvas = $(this.$refs.canvas)
		// Arcs
		this._drawArc({
			x: 500
			, y: 350
			, name: 'skills'
			, radius: 30
		})
		this._drawArc({
			x: 350
			, y: 350
			, name: 'CSS'
			, radius: 70
		})
		this._drawArc({
			x: 650
			, y: 350
			, name: 'PHP'
			, radius: 70
		})
		this._drawArc({
			x: 500
			, y: 500
			, name: 'mobile'
			, radius: 70
		})
		this._drawArc({
			x: 500
			, y: 200
			, name: 'js'
			, radius: 70
		})
		this._drawArc({
			x: 300
			, y: 500
			, name: 'java'
			, radius: 50
		})
		this._drawArc({
			x: 700
			, y: 500
			, name: 'kotlin'
			, radius: 50
		})
		this._drawArc({
			x: 150
			, y: 350
			, name: 'foundation'
			, radius: 50
		})
		this._drawArc({
			x: 850
			, y: 350
			, name: 'symfony'
			, radius: 50
		})
		this._drawArc({
			x: 300
			, y: 200
			, name: 'node'
			, radius: 50
		})
		this._drawArc({
			x: 700
			, y: 200
			, name: 'vue'
			, radius: 50
		})
		this._drawArc({
			x: 500
			, y: 60
			, name: 'socket'
			, radius: 50
		})
		// Texts
		this._drawText({
			opacity: 0
			, x: 500
			, y: 350
			, text: 'Skills'
			, name: 'tSkills'
			, fontSize: 15
		})
		this._drawText({
			opacity: 0
			, x: 500
			, y: 200
			, text: 'JavaScript ES6'
			, name: 'tJs'
			, fontSize: 20
		})
		this._drawText({
			opacity: 0
			, x: 650
			, y: 350
			, text: 'PHP 7'
			, name: 'tPHP'
			, fontSize: 20
		})
		this._drawText({
			opacity: 0
			, x: 500
			, y: 500
			, text: 'Mobile'
			, name: 'tMobile'
			, fontSize: 20
		})
		this._drawText({
			opacity: 0
			, x: 350
			, y: 350
			, text: 'CSS 3'
			, name: 'tCSS'
			, fontSize: 20
		})
		this._drawText({
			opacity: 0
			, x: 300
			, y: 500
			, text: 'Java Android'
			, name: 'tJava'
			, fontSize: 15
		})
		this._drawText({
			opacity: 0
			, x: 700
			, y: 500
			, text: 'Kotlin'
			, name: 'tKotlin'
			, fontSize: 20
		})
		this._drawText({
			opacity: 0
			, x: 150
			, y: 350
			, text: 'Foundation 6'
			, name: 'tFoundation'
			, fontSize: 15
		})
		this._drawText({
			opacity: 0
			, x: 850
			, y: 350
			, text: 'Symfony 3'
			, name: 'tSymfony'
			, fontSize: 20
		})
		this._drawText({
			opacity: 0
			, x: 300
			, y: 200
			, text: 'Node.js'
			, name: 'tNode'
			, fontSize: 20
		})
		this._drawText({
			opacity: 0
			, x: 700
			, y: 200
			, text: 'Vue.js'
			, name: 'tVue'
			, fontSize: 20
		})
		this._drawText({
			opacity: 0
			, x: 500
			, y: 60
			, text: 'Socket.io'
			, name: 'tSocket'
			, fontSize: 20
		})
			this._animateLayer({ name: 'skills', end: 360, duration: 600 }, () => {
					this._animateLayer({ name: 'tSkills', opacity: 1, duration: 300 }, () => {
						this._animateLayer({ name: 'js', end: 360, duration: 600 }, () => {
							this._animateLayer({ name: 'tJs', opacity: 1, duration: 300 })
							this._drawLine({ name: 'skillsToJS', x: 500, y: 320 })
								._animateLayer({ name: 'skillsToJS', x: 500, y: 270 })
							this._animateLayer({ name: 'node', end: 360, duration: 600 }, () => {
								this._animateLayer({ name: 'tNode', opacity: 1, duration: 300 })
								this._drawLine({ name: 'JStoNode', x: 430, y: 200 })
									._animateLayer({ name: 'JStoNode', x: 350, y: 200 })
							})
							this._animateLayer({ name: 'vue', end: 360, duration: 600 }, () => {
								this._animateLayer({ name: 'tVue', opacity: 1, duration: 300 })
								this._drawLine({ name: 'JStoVue', x: 570, y: 200 })
									._animateLayer({ name: 'JStoVue', x: 650, y: 200 })
							})
							this._animateLayer({ name: 'socket', end: 360, duration: 600 }, () => {
								this._animateLayer({ name: 'tSocket', opacity: 1, duration: 300 })
								this._drawLine({ name: 'JStoSocket', x: 500, y: 130 })
									._animateLayer({ name: 'JStoSocket', x: 500, y: 110 })
							})
						})
						this._animateLayer({ name: 'PHP', end: 360, duration: 600 }, () => {
							this._animateLayer({ name: 'tPHP', opacity: 1, duration: 300 })
							this._drawLine({ name: 'skillsToPHP', x: 530, y: 350 })
								._animateLayer({ name: 'skillsToPHP', x: 580, y: 350 })
							this._animateLayer({ name: 'symfony', end: 360, duration: 600 }, () => {
								this._animateLayer({ name: 'tSymfony', opacity: 1, duration: 300 })
								this._drawLine({ name: 'PHPtoSymfony', x: 720, y: 350 })
									._animateLayer({ name: 'PHPtoSymfony', x: 800, y: 350 })
							})
						})
						// mobile
						this._animateLayer({ name: 'mobile', end: 360, duration: 600 }, () => {
							this._animateLayer({ name: 'tMobile', opacity: 1, duration: 300 })
							this._drawLine({ name: 'skillsToMobile', x: 500, y: 380 })
								._animateLayer({ name: 'skillsToMobile', x: 500, y: 430 })
							// java android
							this._animateLayer({ name: 'java', end: 360, duration: 600 }, () => {
								this._animateLayer({ name: 'tJava', opacity: 1, duration: 300 })
								this._drawLine({ name: 'mobileToJava', x: 430, y: 500 })
									._animateLayer({ name: 'mobileToJava', x: 350, y: 500 })
							})
							// kotlin
							this._animateLayer({ name: 'kotlin', end: 360, duration: 600 }, () => {
								this._animateLayer({ name: 'tKotlin', opacity: 1, duration: 300 })
								this._drawLine({ name: 'mobileToKotlin', x: 570, y: 500 })
									._animateLayer({ name: 'mobileToKotlin', x: 650, y: 500 })
							})
						})
						this._animateLayer({ name: 'CSS', end: 360, duration: 600 }, () => {
							this._animateLayer({ name: 'tCSS', opacity: 1, duration: 300 })
							this._drawLine({ name: 'skillsToCSS', x: 470, y: 350 })
								._animateLayer({ name: 'skillsToCSS', x: 420, y: 350 })
							this._animateLayer({ name: 'foundation', end: 360, duration: 600 }, () => {
								this._animateLayer({ name: 'tFoundation', opacity: 1, duration: 300 })
								this._drawLine({ name: 'CSStoFoundation', x: 280, y: 350 })
									._animateLayer({ name: 'CSStoFoundation', x: 200, y: 350 })
							})
						})
					})
			})
    }
    , methods: {
		_drawLine(options) {
			const { name, x, y } = options
			this.$canvas.drawLine({
				name
				, strokeStyle: '#ffffff'
				, strokeWidth: 1
				, x1: x
				, y1: y
				, x2: x
				, y2: y
				, layer: true
			})
			return this
		}
		, _animateLayer(options, callback = null) {
			const {
					name
					, x
					, y
					, opacity
					, duration
					, end
				} = options

				, animation = opacity ? { opacity } : end ? { end } : {
					x2: x
					, y2: y
				}
			this.$canvas.animateLayer(name, animation, duration, (layer) => {
				if (callback) return callback(layer)
			})
		}
		, _drawText(options) {
			const {
				opacity
				, x
				, y
				, text
				, name
				, fontSize
			} = options
			this.$canvas.drawText({
				x
				, y
				, text
				, name
				, opacity
				, fontSize
				, fillStyle: '#ffffff'
				, shadowBlur: 5
				, shadowColor: '#000000'
				, strokeWidth: 1
				, fontFamily: 'the brooklyn'
				, layer: true
			})
			return this
		}
		, _drawArc(options) {
			const {
				opacity
				, x
				, y
				, name
				, radius
			} = options
			this.$canvas.drawArc({
				opacity
				, x
				, y
				, name
				, radius
				, start: 0
				, end : 0
				, strokeStyle: '#ffffff'
				, strokeWidth: 2
				, layer: true
			})
			return this
		}
	}
}
