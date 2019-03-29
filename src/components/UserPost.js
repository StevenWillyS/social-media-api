import React from 'react'
import ViewPosts from './ViewPosts'
import ViewSinglePost from './ViewSinglePost'
import UserPostController from './UserPostController'
import {Row,Col} from './BootstrapComponent'

const initialState = {
	userId: 1,
	id: 0,
	title: '',
	body: '',
	index: 0
}
class UserPost extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			posts: [],
			post: JSON.parse(JSON.stringify(initialState))
		}
		this.searchPost = this.searchPost.bind(this)
		this.addNewPost = this.addNewPost.bind(this)
		this.deletePost = this.deletePost.bind(this)
		this.changeEdit = this.changeEdit.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.resetPost = this.resetPost.bind(this)
		this.editPost = this.editPost.bind(this)
	}	
	componentDidMount(){
		const url = `https://jsonplaceholder.typicode.com/posts?userId=${this.props.userId}`
		fetch(url)
		  .then(response => response.json())
		  .then(posts => {
		  	this.setState({posts})
		  })
		  .catch(error => console.error('Error: ',error))
	}
	searchPost(postId){
		var {posts} = this.state
		posts = posts.filter((post)=>{
			return post.id === postId
		})
		return posts[0]	 
	}
	addNewPost(post){
		var posts = this.state.posts.slice()
		posts.push(post)
		this.setState({
			posts: posts
		})
		this.resetPost()
	}
	deletePost(index){
		var posts = this.state.posts.slice()
		posts.splice(index,1)
		this.setState({posts: posts})
	}
	editPost(){
		var posts = this.state.posts.slice()
		var index = posts.findIndex(i => i.id === this.state.post.id)
		posts[index] = this.state.post
		this.setState({posts:posts})
		this.resetPost()
	}
	changeEdit(post){
		this.setState({post})
	}
	handleChange(event){
		const {name,value} = event.target
		var post = this.state.post
		if(name==='title'){
			post.title = value
		} else {
			post.body = value
		}
		this.setState({
			post: post
		})
	}
	resetPost(){
		console.log(initialState)
		this.setState({
			post: JSON.parse(JSON.stringify(initialState))
		})
	}
	showPostController(posts){
		if(this.props.userId === 1) {
			return <UserPostController 
			   addNewPost={this.addNewPost} 
			   userId={this.props.userId}
			   post={this.state.post} 
			   handleChange={this.handleChange}
			   editPost={this.editPost}/>
		}
	}
	render(){
		const {posts} = this.state
		const {postId,changePostId} = this.props
		return(
			<Row>
			{!postId
				? <Col>
				    {this.showPostController()}
					<ViewPosts 
					   isCommandAvailable={this.props.userId === 1} 
					   posts={posts} 
					   changePostId={changePostId} 
					   deletePost={this.deletePost} 
					   changeEdit={this.changeEdit}/>    
				  </Col>					
				: <ViewSinglePost post={this.searchPost(postId)}/>
			}
			</Row>
		)
	}
}

export default UserPost