import React from 'react'
import {Row} from './BootstrapComponent'

const SinglePost = props =>{
	return(
		<Row className='border'>
			<p><b>{props.post.title}</b></p>
			<span>{props.post.body}</span><br/>
			{props.children}
		</Row>
	)
}

export default SinglePost