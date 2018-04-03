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
			x: 1000
			, y: 700
			, name: 'skills'
			, radius: 70
		})
		this._drawArc({
			x: 700
			, y: 700
			, name: 'js'
			, radius: 100
		})
		this._drawArc({
			x: 1270
			, y: 700
			, name: 'PHP'
			, radius: 70
		})
		this._drawArc({
			x: 800
			, y: 900
			, name: 'Csharp'
			, radius: 70
		})
		this._drawArc({
			x: 1200
			, y: 900
			, name: 'mobile'
			, radius: 95
		})
		this._drawArc({
			x: 800
			, y: 500
			, name: 'CSS'
			, radius: 90
		})
		this._drawArc({
			x: 1200
			, y: 500
			, name: 'SEO'
			, radius: 75
		})
		this._drawArc({
			x: 590
			, y: 900
			, name: 'unity'
			, radius: 60
		})
		this._drawArc({
			x: 1430
			, y: 900
			, name: 'java'
			, radius: 80
		})
		this._drawArc({
			x: 1450
			, y: 700
			, name: 'kotlin'
			, radius: 90
		})
		this._drawArc({
			x: 1460
			, y: 500
			, name: 'backlink'
			, radius: 80
		})
		this._drawArc({
			x: 510
			, y: 500
			, name: 'foundation'
			, radius: 90
		})
		// Texts
		this._drawText({
			opacity: 0
			, x: 1000
			, y: 700
			, text: 'SKILLS'
			, name: 'tSkills'
		})
		this._drawText({
			opacity: 0
			, x: 700
			, y: 700
			, text: 'JavaScript ES6'
			, name: 'tJs'
		})
		this._drawText({
			opacity: 0
			, x: 1270
			, y: 700
			, text: 'PHP7'
			, name: 'tPHP'
		})
		this._drawText({
			opacity: 0
			, x: 800
			, y: 900
			, text: 'C#'
			, name: 'tCsharp'
		})
		this._drawText({
			opacity: 0
			, x: 1200
			, y: 900
			, text: 'Mobile'
			, name: 'tMobile'
		})
		this._drawText({
			opacity: 0
			, x: 800
			, y: 500
			, text: 'CSS3'
			, name: 'tCSS'
		})
		this._drawText({
			opacity: 0
			, x: 1200
			, y: 500
			, text: 'SEO'
			, name: 'tSEO'
		})
		this._drawText({
			opacity: 0
			, x: 590
			, y: 900
			, text: 'Unity3D'
			, name: 'tUnity'
		})
		this._drawText({
			opacity: 0
			, x: 1430
			, y: 900
			, text: 'Java Android'
			, name: 'tJava'
		})
		this._drawText({
			opacity: 0
			, x: 1450
			, y: 700
			, text: 'Kotlin'
			, name: 'tKotlin'
		})
		this._drawText({
			opacity: 0
			, x: 1460
			, y: 500
			, text: 'Backlinking'
			, name: 'tBacklink'
		})
		this._drawText({
			opacity: 0
			, x: 510
			, y: 500
			, text: 'Foundation6'
			, name: 'tFoundation'
		})
			this._animateLayer({ name: 'skills', end: 360, duration: 600 }, () => {
					// text
					this._animateLayer({ name: 'tSkills', opacity: 1, duration: 300 }, () => {
						// line
						this._drawLine({ name: 'skillsToJS', x: 930, y: 700 })
							._animateLayer({ name: 'skillsToJS', x: 800, y: 700 })
						this._drawLine({ name: 'skillsToCSS', x: 950, y: 650 })
							._animateLayer({ name: 'skillsToCSS', x: 863, y: 563 })
						this._drawLine({ name: 'skillsToSEO', x: 1050, y: 650 })
							._animateLayer({ name: 'skillsToSEO', x: 1152, y: 556 })
						this._drawLine({ name: 'skillsToPHP', x: 1070, y: 700 })
							._animateLayer({ name: 'skillsToPHP', x: 1200, y: 700 })
						this._drawLine({ name: 'skillsToCsharp', x: 950, y: 750 })
							._animateLayer({ name: 'skillsToCsharp', x: 850, y: 850 })
						this._drawLine({ name: 'skillsToMobile', x: 1050, y: 750 })
							._animateLayer({ name: 'skillsToMobile', x: 1132, y: 832 })
						this._animateLayer({ name: 'js', end: 360, duration: 600 }, () => {
							this._animateLayer({ name: 'tJs', opacity: 1, duration: 300 })
						})
						this._animateLayer({ name: 'PHP', end: 360, duration: 600 }, () => {
							this._animateLayer({ name: 'tPHP', opacity: 1, duration: 300 })
						})
						this._animateLayer({ name: 'Csharp', end: 360, duration: 600 }, () => {
							this._animateLayer({ name: 'tCsharp', opacity: 1, duration: 300 })
							this._drawLine({ name: 'CsharpToUnity', x: 730, y: 900 })
								._animateLayer({ name: 'CsharpToUnity', x: 650, y: 900 })
							this._animateLayer({ name: 'unity', end: 360, duration: 600 }, () => {
								this._animateLayer({ name: 'tUnity', opacity: 1, duration: 300 })
							})
						})
						this._animateLayer({ name: 'mobile', end: 360, duration: 600 }, () => {
							this._animateLayer({ name: 'tMobile', opacity: 1, duration: 300 })
							this._drawLine({ name: 'mobileToJava', x: 1295, y: 900 })
								._animateLayer({ name: 'mobileToJava', x: 1350, y: 900 })
							this._animateLayer({ name: 'java', end: 360, duration: 600 }, () => {
								this._animateLayer({ name: 'tJava', opacity: 1, duration: 300 })
							})
							this._drawLine({ name: 'mobileToKotlin', x: 1280, y: 850 })
								._animateLayer({ name: 'mobileToKotlin', x: 1380, y: 755 })
							this._animateLayer({ name: 'kotlin', end: 360, duration: 600 }, () => {
								this._animateLayer({ name: 'tKotlin', opacity: 1, duration: 300 })
							})
						})
						this._animateLayer({ name: 'SEO', end: 360, duration: 600 }, () => {
							this._animateLayer({ name: 'tSEO', opacity: 1, duration: 300 })
							this._drawLine({ name: 'SEOtoBacklink', x: 1275, y: 500 })
								._animateLayer({ name: 'SEOtoBacklink', x: 1380, y: 500 })
							this._animateLayer({ name: 'backlink', end: 360, duration: 600 }, () => {
								this._animateLayer({ name: 'tBacklink', opacity: 1, duration: 300 })
							})
						})
						this._animateLayer({ name: 'CSS', end: 360, duration: 600 }, () => {
							this._animateLayer({ name: 'tCSS', opacity: 1, duration: 300 })
							this._drawLine({ name: 'CSStoFoundation', x: 710, y: 500 })
								._animateLayer({ name: 'CSStoFoundation', x: 600, y: 500 })
							this._animateLayer({ name: 'foundation', end: 360, duration: 600 }, () => {
								this._animateLayer({ name: 'tFoundation', opacity: 1, duration: 300 })
							})
						})
					})
			})
    }
    , methods: {
		getCoords(event) {
			const x = event.clientX
				, y = event.clientY
			console.log('X coords: ' + x + ", Y coords: " + y)
		}
		, _drawLine(options) {
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
			} = options
			this.$canvas.drawText({
				x
				, y
				, text
				, name
				, opacity
				, fillStyle: '#ffffff'
				, shadowBlur: 5
				, shadowColor: '#000000'
				, strokeWidth: 1
				, fontSize: 25
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
