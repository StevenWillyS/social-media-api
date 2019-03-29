import React from 'react'
import SinglePost from './SinglePost'
import ViewComments from './ViewComments'
import UserCommentController from './UserCommentController'
import {Col} from './BootstrapComponent'

class ViewSinglePost extends React.Component{
	constructor(props){
		super(props)
		this.initialState = {
			postId: props.post.id,
			id: 0,
			name: '',
			email: '',
			body: ''
		}
		this.state = {
			comments: [],
			comment:JSON.parse(JSON.stringify(this.initialState))
		}
		this.handleChange = this.handleChange.bind(this)
		this.addNewComment = this.addNewComment.bind(this)
		this.deleteComment = this.deleteComment.bind(this)
		this.changeEdit = this.changeEdit.bind(this)
		this.editComment = this.editComment.bind(this)	
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
	handleChange(event){
		const {name,value} = event.target
		var comment = this.state.comment
		if(name==='name'){
			comment.name = value
		} else if(name==='email'){
			comment.email = value
		} else {
			comment.body= value
		}
		this.setState({
			comment: comment
		})
	}
	addNewComment(comment){
		var comments = this.state.comments.slice()
		comments.push(comment)
		this.setState({
			comments: comments
		})
		this.resetComment()
	
	}
	deleteComment(index){
		var comments = this.state.comments.slice()
		comments.splice(index,1)
		this.setState({comments: comments})
	}
	editComment(){
		var comments = this.state.comments.slice()
		var index = comments.findIndex(i => i.id === this.state.comment.id)
		comments[index] = this.state.comment
		this.setState({comments:comments})
		this.resetComment()
	}
	changeEdit(comment){
		this.setState({comment})
	}
	resetComment(){
		this.setState({
			comment: JSON.parse(JSON.stringify(this.initialState))
		})
	}
	render(){
		const {comments,comment} = this.state
		const {post} = this.props 
		return(
			<SinglePost post={post}>
				Comments:
				<ViewComments comments={comments} comment={comment} deleteComment={this.deleteComment} changeEdit={this.changeEdit}/>
				<Col>
				<UserCommentController 
				  postId={post.id}
				  comment={this.state.comment} 
				  handleChange={this.handleChange}
				  addNewComment={this.addNewComment}
				  editComment={this.editComment}/>
				 </Col>
			</SinglePost>
		)
	}
}

export default ViewSinglePost