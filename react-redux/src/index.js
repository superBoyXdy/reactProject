import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import Header from './Header'
import Content from './Content'
import './index.css'
import $ from 'jquery'
import { connect } from '@wac/bridge-utils'


function createStore(reducer) {
	let state = null
	const listeners = []
	const subscribe = ((listener) => listeners.push(listener))
	const getState = () => state
	const dispatch = (action) => {
		state = reducer(state,action)
		listeners.forEach((listener) => listener())
	}
	dispatch({})
	return { getState, dispatch, subscribe }
}

const themeReducer = (state, action) => {
	if(!state){
		return {
			themeColor: '#41CC4A'
		}
	}
	switch (action.type) {
		case 'CHANGE_COLOR':
			return {
				...state,
				themeColor: action.themeColor
			}
		default:
			return state
	}
}

const store = createStore(themeReducer)

class Index extends React.Component {
	
	constructor() {
		super()
		this.alert1 = this.alert1.bind(this)
		this.alert2 = this.alert2.bind(this)
	}
	
	static childContextTypes = {
		store: PropTypes.object
	}
	
	
	
	componentDidMount() {
		connect(function (bridge) {
			bridge.addEventListener('onFinanceGoBack', ()=>{alert("goback")})
		})
	}
	
	getChildContext() {
		return { store }
	}
	alert1() {
		connect(function (bridge) {
			bridge.interceptGoBack({"intercept":true}).then(
				
						alert("11111")
			)
		})
	}
	alert2() {
		connect(function (bridge) {
			bridge.interceptGoBack({"intercept":false})
		})
	}
	
	render() {
		return (
				<div className="btn1">
					<button onClick={this.alert1}>register</button>
					<button onClick={this.alert2}>clear</button>
			{/*<Header/>*/}
			{/*<Content/>*/}
			<div>
				
			</div>
		</div>
		)
	}
}

ReactDOM.render(
		<Index/>,
		document.getElementById('root')
)

