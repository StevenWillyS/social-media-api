import React from 'react'
import {Col} from './BootstrapComponent'

class ViewSinglePhoto extends React.Component{
	render(){
		const {photo} = this.props
		return(
			<Col col='12'>
				<h4>{photo.title}</h4>
				<img src={photo.url} alt='MyPict'/>
			</Col>
		)
	}
}

export default ViewSinglePhoto