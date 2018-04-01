/**
 * Created by lingyangjiao
 * Date: 2018/1/6
 */

import React from 'react'
import PropTypes from 'prop-types'
class Header extends React.Component {
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
		this._updateThemeColor()
	}
	
	_updateThemeColor() {
		const { store } = this.context
		const state = store.getState()
		this.setState({
			themeColor: state.themeColor
		})
	}
	
	render() {
		return (
				<h3 style={{color: this.state.themeColor}}>更改主题</h3>
		)
	}
}
export default Header