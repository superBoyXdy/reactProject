/**
 * Created by lingyangjiao
 * Date: 2018/2/28
 */

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
