import React from 'react'

class UserCommentController extends React.Component{
	createComment(props){
		const url = `https://jsonplaceholder.typicode.com/comments`
		const {postId,name,email,body} = props.comment
		fetch(url,{
		   method: 'POST',
		   body:JSON.stringify({
		   	  email: email,
		   	  name: name,
		   	  body: body,
		   	  postId: postId
		   }),
		   headers: {
		   	  "Content-type": "application/json; charset=UTF-8"
		   }
		 })
		  .then(response => response.json())
		  .then(result => {
		  	if(result.id) {
		  		alert(result.name+" Input Success")
		  		props.addNewComment(result)
		  	}
		  })
		  .catch(error => console.error('Error: ',error))		
	}
	editComment(props){
		const {postId,name,email,body,id} = props.comment
		const url = `https://jsonplaceholder.typicode.com/comments/${id}`
		fetch(url,{
		   method: 'PUT',
		   body:JSON.stringify({
		   	  id: id,
		   	  email: email,
		   	  name: name,
		   	  body: body,
		   	  postId: postId
		   }),
		   headers: {
		   	  "Content-type": "application/json; charset=UTF-8"
		   }
		 })
		  .then(response => response.json())
		  .then(result => {
		  	if(result.id) {
		  		alert(result.name+" Edit Success")
		  		props.editComment(result)
		  	}
		  })
		  .catch(error => console.error('Error: ',error))	
	}
	clickSwitcher(props){
		if(props.comment.id===0){
			return this.createComment(props)
		} else {
			return this.editComment(props)
		}
	}
	render(){
		const {name,email,body} = this.props.comment
		return(
			<form>
				New Comments:
				<div className='form-group'>
				  <label>name</label>
				  <input 
					  type='text'
					  name='name'
					  className='form-control'
					  value={name}
					  onChange={this.props.handleChange}/>	
				</div>
				<div className='form-group'>
				  <label>email</label>
				  <input 
					  type='text'
					  name='email'
					  className='form-control'
					  value={email}
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

export default UserCommentController