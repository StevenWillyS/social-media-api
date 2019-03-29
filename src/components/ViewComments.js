import React from 'react'
import {Row,Container,Col} from './BootstrapComponent'
import DeleteData from './DeleteData'

const ExtraButton = props =>{
	return(
		<div>
			<button 
			   onClick={()=>DeleteData('comments',props.id,props.index,props.deleteComment)}
			   className='btn btn-danger btn-sm'>
			     Delete
			</button>
			<button 
			   onClick={()=>props.editComment(JSON.parse(JSON.stringify(props.currentComment)))}
			   className='btn btn-secondary btn-sm'>
			     Edit
			</button>
		</div>
	)
}
const ViewComments = props => {
	const comments = props.comments.map((comment,index)=>{
		return(
			<Container key={comment.id} className='border'>
				<Row>
					<b>{comment.name}</b>
				</Row>
				<Row>
					<p>{comment.body}</p>
				</Row>
				<Row>
					<Col>
					  by:{comment.email}
					</Col>
					<ExtraButton
					   id={comment.id} 
					   index={index} 
					   deleteComment={props.deleteComment}
					   editComment={props.changeEdit}
					   currentComment={comment} />
					</Row>
			</Container>
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