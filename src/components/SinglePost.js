import React from 'react'
import {Row} from './BootstrapComponent'

const SinglePost = props =>{
	return(
		<Row className='border'>
			<b>{props.post.title}</b>
			<span>{props.post.body}</span><br/>
			{props.children}
		</Row>
	)
}

export default SinglePost