import React from 'react'

class UserPostController extends React.Component{
	createPost(props){
		const url = `https://jsonplaceholder.typicode.com/posts`
		const {title,body,userId} = props.post
		fetch(url,{
		   method: 'POST',
		   body:JSON.stringify({
		   	  title: title,
		   	  body: body,
		   	  userId: userId
		   }),
		   headers: {
		   	  "Content-type": "application/json; charset=UTF-8"
		   }
		 })
		  .then(response => response.json())
		  .then(result => {
		  	if(result.id) {
		  		alert(result.title+" Input Success")
		  		props.addNewPost(result)
		  	}
		  })
		  .catch(error => console.error('Error: ',error))		
	}
	editPost(props){
		const {title,body,userId,id} = props.post
		const url = `https://jsonplaceholder.typicode.com/posts/${id}`
		fetch(url,{
		   method: 'PUT',
		   body:JSON.stringify({
		   	  id: id,
		   	  title: title,
		   	  body: body,
		   	  userId: userId
		   }),
		   headers: {
		   	  "Content-type": "application/json; charset=UTF-8"
		   }
		 })
		  .then(response => response.json())
		  .then(result => {
		  	if(result.id) {
		  		alert(result.title+" Edit Success")
		  		props.editPost(result)
		  	}
		  })
		  .catch(error => console.error('Error: ',error))	
	}
	clickSwitcher(props){
		if(props.post.id===0){
			return this.createPost(props)
		} else {
			return this.editPost(props)
		}
	}
	render(){
		const {title,body} = this.props.post
		return(
			<form>
				<div className='form-group'>
				  <label>Title</label>
				  <input 
					  type='text'
					  name='title'
					  className='form-control'
					  value={title}
					  onChange={this.props.handleChange}/>	
				</div>
				<div className='form-group'>
				  <label>Body</label>
				  <textarea 
					  name='body'
					  className='form-control'
					  value={body}
					  onChange={this.props.handleChange}/>	
				</div>
				<input 
				  type='button'
				  value='Submit'
				  className='btn btn-secondary'
				  onClick={()=>this.clickSwitcher(this.props)}/>
				  <hr/>
			</form>
		)
	}
}

export default UserPostController