import React from 'react'
import ViewPosts from './ViewPosts'
import ViewSinglePost from './ViewSinglePost'

class UserPost extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			posts: [],
		}
		this.searchPost = this.searchPost.bind(this)
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
	render(){
		const {posts} = this.state
		const {postId,changePostId} = this.props
		return(
			<div>
			{!postId
				? <ViewPosts posts={posts} changePostId={changePostId}/>
				: <ViewSinglePost post={this.searchPost(postId)}/>
			}
			</div>
		)
	}
}

export default UserPost