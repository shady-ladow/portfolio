const $ = require('jquery')

export default {
    name: 'navigation'
    , data() {
        return {
            $menu: null
            , open: false
			, $mask: null
			, $aboutSpan: null
            , $aboutIcon: null
            , $aboutLink: null
			, $graduationSpan: null
			, $graduationIcon: null
			, $graduationLink: null
			, $portfolioSpan: null
			, $portfolioIcon: null
			, $portfolioLink: null
        }
    }
    , mounted() {
		this.$menu = $(this.$refs.menu)
		this.$mask = $(this.$refs.mask)
		// about
		this.$aboutSpan = $(this.$refs.aboutSpan)
		this.$aboutIcon = $(this.$refs.aboutIcon)
        this.$aboutLink = $(this.$refs.aboutLink)
		this.$aboutSpan.attr('title', 'About')
		this.$aboutLink.attr('href', '/about/')
		// graduation
		this.$graduationSpan = $(this.$refs.graduationSpan)
		this.$graduationIcon = $(this.$refs.graduationIcon)
		this.$graduationLink = $(this.$refs.graduationLink)
		this.$graduationSpan.attr('title', 'Graduation')
		this.$graduationLink.attr('href', '/graduation/')
		// portfolio
		this.$portfolioSpan = $(this.$refs.portfolioSpan)
		this.$portfolioIcon = $(this.$refs.portfolioIcon)
		this.$portfolioLink = $(this.$refs.portfolioLink)
		this.$portfolioSpan.attr('title', 'Portfolio')
		this.$portfolioLink.attr('href', '/portfolio/')
        this.$menu.on('mousedown touchstart', () => {
            this.open = !this.open
        })
		if (/about/.test(window.location.href)) {
			this.$aboutIcon.removeClass('fa-user')
			this.$aboutIcon.addClass('fa-home')
			this.$mask.removeClass('fa-home')
			this.$mask.addClass('fa-user')
			this.$aboutSpan.attr('title', 'Home')
			this.$aboutLink.attr('href', '/')
		} else if (/graduation/.test(window.location.href)) {
			this.$graduationIcon.removeClass('fa-graduation-cap')
			this.$graduationIcon.addClass('fa-home')
			this.$mask.removeClass('fa-home')
			this.$mask.addClass('fa-graduation-cap')
			this.$graduationSpan.attr('title', 'Home')
			this.$graduationLink.attr('href', '/')
		} else if (/portfolio/.test(window.location.href)) {
			this.$portfolioIcon.removeClass('fa-code')
			this.$portfolioIcon.addClass('fa-home')
			this.$mask.removeClass('fa-home')
			this.$mask.addClass('fa-code')
			this.$portfolioSpan.attr('title', 'Home')
			this.$portfolioLink.attr('href', '/')
        }
    }
}
