import React from 'react'
import {Container,Row,Col} from './BootstrapComponent'
import { Link } from "react-router-dom"
import UserPost from './UserPost'

const ButtonLink = props => {
	return(
		<Link 
		  to={`${props.pathname}/${props.children}`} 
		  className='btn btn-secondary btn-block'
		  onClick={()=>props.changeView()}>
			{props.children}
		</Link> 
	)
}
const ButtonGroup = props => {
	return(
		<Row>
			<Col>
				<ButtonLink 
				  pathname={props.pathname}
				  changeView = {props.changeToPost}>
				    Posts
				</ButtonLink>
			</Col>
			<Col>
				<ButtonLink 
				  pathname={props.pathname}
				  changeView = {props.changeToAlbum}>
				    Albums
				</ButtonLink>
			</Col>
		</Row>
	)
}
class UserPage extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			isPost: true,
			postId: '',
		}
		this.changeToPost = this.changeToPost.bind(this)
		this.changeId = this.changeId.bind(this)
	}	
	changeToPost(){
		this.setState({
			isPost: true,
			postId: ''
		})
	}
	changeToAlbum(){
		this.setState({
			isPost: false,
		})	
	}
	changeId(id,name='postId'){
		this.setState({
			[name] : id,
		})
	}
	IsUrlContainsPost(){
		if(window.location.href.indexOf('Posts')>-1 || window.location.href.indexOf('post')>-1 )
			return true
		else
			return false
	}
	render(){
		const {isPost,postId,albumId} = this.state
		return(
			<Container>
				<ButtonGroup 
				  changeToPost={this.changeToPost}
				  pathname={this.props.match.url} />
				{isPost
				   ? this.IsUrlContainsPost() 
				      ? <UserPost userId={this.props.userId} changePostId={this.changeId} postId={postId} /> 
				      : 'Welcome' 
				   : 'Album'
				}
			</Container>
		)
	}
}

export default UserPage