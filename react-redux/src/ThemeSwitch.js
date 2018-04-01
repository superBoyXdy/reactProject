/**
 * Created by lingyangjiao
 * Date: 2018/1/6
 */

import React from 'react'
import PropTypes from 'prop-types'
class ThemeSwitch extends React.Component {
	
	static contextTypes = {
		store: PropTypes.object
	}
	
	constructor() {
		super()
		this.state = {
			themeColor: ''
		}
	}
	
	componentWillMount() {
		const { store } = this.context
		const state = store.getState()
		this.setState({
			themeColor: state.themeColor
		})
	}
	
	handleSwitchColor(color) {
		const { store } = this.context
		store.dispatch({
			type:'CHANGE_COLOR',
			themeColor: color
		})
	}
	
	render() {
		return (
				<div>
					<button style={{color: this.state.themeColor}}
							onClick={this.handleSwitchColor.bind(this, 'red')}
					>
						Red
					</button>
					<div>
					
					</div>
					<button style={{color: this.state.themeColor}} onClick={this.handleSwitchColor.bind(this, '#888')}>Blue</button>
				</div>
		)
	}
}
export default ThemeSwitch