import React from 'react'
import SinglePost from './SinglePost'
import ViewComments from './ViewComments'

class ViewSinglePost extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			comments: []
		}
	}
	componentDidMount(){
		const url = `https://jsonplaceholder.typicode.com/comments?postId=${this.props.post.id}`
		fetch(url)
		  .then(response => response.json())
		  .then(comments => {
		  	this.setState({comments})
		  })
		  .catch(error => console.error('Error: ',error))
	}
	render(){
		const {comments} = this.state
		const {post} = this.props 
		return(
			<SinglePost post={post}>
				Comments
				<ViewComments comments={comments} />
			</SinglePost>
		)
	}
}

export default ViewSinglePost