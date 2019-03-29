import React from 'react'
import {Row,Col,Container} from './BootstrapComponent'

const SinglePost = props =>{
	return(
		<Container className='border'>
			<Row>
				<b>{props.post.title}</b>
			</Row>
			<Row>
				<Col>
					<span>{props.post.body}</span><br/>
				</Col>
			</Row>
			<Row>
				{props.children}
			</Row>
		</Container>
	)
}

export default SinglePost