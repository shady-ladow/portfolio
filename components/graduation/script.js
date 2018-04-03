const $ = require('jquery')
require('jcanvas')($, window)

export default {
    name: 'home'
    , data() {
        return {
            $canvas: null
        }
    }
    , mounted() {
        this.$canvas = $(this.$refs.canvas)

        this._drawImage({ source: '/image/silhouette.png' })
            ._drawLine({ name: 'line', x: 280, y: 100 })
            ._drawText({
                opacity: 0
                , x: 400
                , y: 35
                , text: 'Hard-working'
                , name: 'text'
            })
            ._drawText({
                opacity: 0
                , x: 60
                , y: 75
                , text: 'Bac +3'
                , name: 'text2'
            })
            ._drawText({
                opacity: 0
                , x: 310
                , y: 445
                , text: 'Full Stack'
                , name: 'text3'
            })
            ._playAnimation()
    }
    , methods: {
        _drawImage(options) {
            const x = this.$canvas.width() / 2
                , y = this.$canvas.height() / 2
                , { source } = options
            this.$canvas.drawImage({
                source
                , x
                , y
                , scale: 0.5
                , layer: true
                , name: 'image'
            })
            return this
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
            } = options
                , animation = opacity ? { opacity } : { x2: x, y2: y }
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
                , strokeWidth: 1
                , fontSize: 30
                , layer: true
            })
            return this
        }
        , _playAnimation() {
            this._animateLayer({
                name: 'line'
                , x: 300
                , y: 50
                , duration: 300
            }, () => {
                this._drawLine({ name: 'line2', x: 300, y: 50 })
                    ._animateLayer({
                        name: 'line2'
                        , x: 500
                        , y: 50
                        , duration: 300
                    }, () => {
                        this._animateLayer({ name: 'text', opacity: 1, duration: 300 }, () => {
                            this._drawLine({ name: 'line3', x: 160, y: 140 })
                                ._animateLayer({
                                    name: 'line3'
                                    , x: 125
                                    , y: 90
                                    , duration: 300
                                }, () => {
                                    this._drawLine({ name: 'line4', x: 125, y: 90 })
                                        ._animateLayer({
                                            name: 'line4'
                                            , x: 0
                                            , y: 90
                                            , duration: 300
                                        }, () => {
                                            this._animateLayer({ name: 'text2', opacity: 1, duration: 300}, () => {
                                                this._drawLine({ name: 'line5', x: 190, y: 420 })
                                                    ._animateLayer({
                                                        name: 'line5'
                                                        , x: 220
                                                        , y: 460
                                                        , duration: 300
                                                    }, () => {
                                                        this._drawLine({ name: 'line6', x: 220, y: 460 })
                                                            ._animateLayer({
                                                                name: 'line6'
                                                                , x: 400
                                                                , y: 460
                                                                , duration: 300
                                                            }, () => {
                                                                this._animateLayer({
                                                                    name: 'text3'
                                                                    , opacity: 1
                                                                    , duration: 300
                                                                })
                                                            })
                                                    })
                                            })
                                        })
                                })
                        })
                    })
            })
        }
    }
}
