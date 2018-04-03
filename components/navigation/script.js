const $ = require('jquery')

export default {
    name: 'navigation'
    , data() {
        return {
            $menu: null
            , open: false
        }
    }
    , mounted() {
        this.$menu = $(this.$refs.menu)
        this.$menu.on('mousedown touchstart', () => {
            this.open = !this.open
        })
    }
}
