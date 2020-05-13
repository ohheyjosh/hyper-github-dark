'use strict'

const foregroundColor = '#fafbfc'
const backgroundColor = '#24292e'
const red = '#f97583'
const green = '#85e89d'
const yellow = '#ffea7f'
const blue = '#79b8ff'
const pink = '#f692ce'
const orange = '#ffab70'

exports.decorateConfig = config => Object.assign({}, config, {
	backgroundColor,
	foregroundColor,
	borderColor: '#222430',
	cursorColor: '#97979b',
	cursorAccentColor: backgroundColor,
	selectionColor: 'rgba(33, 136, 255, 0.2)',
	colors: {
		black: backgroundColor,
		red,
		green,
		yellow,
		blue,
		magenta: pink,
		cyan: orange,
		white: '#ffffff',
		lightBlack: '#444d56',
		lightRed: red,
		lightGreen: green,
		lightYellow: yellow,
		lightBlue: blue,
		lightMagenta: pink,
		lightCyan: orange,
		lightWhite: foregroundColor
	},
	css: `
		/* Hide title when only one tab */
		.tabs_title {
			display: none !important
		}
		/* Add a highlight line below the active tab */
		.tab_tab::before {
			content: ''
			position: absolute
			bottom: 0
			left: 0
			right: 0
			height: 1px
			background-color: #f9826c
			transform: scaleX(0)
			will-change: transform
		}
		.tab_tab.tab_active::before {
			transform: scaleX(1)
			transition: all 200ms cubic-bezier(0, 0, 0.2, 1)
		}
		/* Fade the title of inactive tabs and the content of inactive panes */
		.tab_text,
		.term_term {
			opacity: 0.6
			will-change: opacity
		}
		.tab_active .tab_text,
		.term_active .term_term {
			opacity: 1
			transition: opacity 0.12s ease-in-out
		}
		/* Allow custom css / overrides */
		${config.css}
	`
})
