import React from 'react'
import { Link } from "react-router-dom"
import SinglePost from './SinglePost'

const ViewPosts = props =>{
	const posts = props.posts.map((post,index)=>{
		return(
			<Link 
			  to={`post/${post.id}`}
			  key={post.id}
			  className='text-black'
			  onClick={()=>props.changePostId(post.id)}>
				<SinglePost post={post}>
					<span className='ml-auto'>Comment(...)</span>
				</SinglePost>
			</Link>
		)
	})
	return(
		<div>
			{posts}
		</div>
	)
}

export default ViewPosts