import React from 'react'
import { Link } from "react-router-dom"
import SinglePost from './SinglePost'
import DeletePost from './DeletePost'
const ExtraButton = props =>{
	return(
		<div>
			<button 
			   onClick={()=>DeletePost(props.id,props.index,props.deletePost)}
			   className='btn btn-danger btn-sm'>
			     Delete
			</button>
			<button 
			   onClick={()=>props.editPost(JSON.parse(JSON.stringify(props.currentPost)))}
			   className='btn btn-secondary btn-sm'>
			     Edit
			</button>
		</div>
	)
}
const ViewPosts = props =>{
	const posts = props.posts.map((post,index)=>{
		return(
			<div key={post.id}>
				<Link 
				  to={`post/${post.id}`}
				  className='text-black'
				  onClick={()=>props.changePostId(post.id)}>
					<SinglePost post={post}>
						<span className='ml-auto'>Comment(...)</span>
					</SinglePost>
				</Link>
				{props.isCommandAvailable && 
					<ExtraButton  
					   id={post.id} 
					   index={index} 
					   deletePost={props.deletePost}
					   editPost={props.changeEdit}
					   currentPost={post}/>
				}
			</div>
		)
	})
	return(
		<div>
			{posts}
		</div>
	)
}

export default ViewPosts