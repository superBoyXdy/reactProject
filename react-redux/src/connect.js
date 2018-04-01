

import React from 'react'


export connect = (WrappedComponent) => {
	class Connect extends React.Component {
		static contextTypes = {
			store: PropTypes.object
		}
		
		render() {
			return <WrappedComponent/>
		}
	}
	
	return Connect
}
