import React from 'react'
import {Row,Container,Col} from './BootstrapComponent'

const ViewComments = props => {
	const comments = props.comments.map((comment,index)=>{
		return(
			<Row key={comment.id} className='border'>
				<b>{comment.name}</b>
				<p>{comment.body}</p>
				<Col>
				  by:{comment.email}
				</Col>
			</Row>
		)
	})
	return(
		<Container>
			<Row className='justify-content-center'>
				<Col col='11'>
				{comments}
				</Col>
			</Row>
		</Container>		
	)
}

export default ViewComments