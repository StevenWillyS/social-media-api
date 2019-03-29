import React from 'react'
import {Container,Row,Col} from './BootstrapComponent'
import { Link } from "react-router-dom"
import UserPost from './UserPost'
import UserAlbum from './UserAlbum'

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
			albumId: '',
		}
		this.changeToPost = this.changeToPost.bind(this)
		this.changeToAlbum = this.changeToAlbum.bind(this)
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
			albumId: ''
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
				  changeToAlbum={this.changeToAlbum}
				  pathname={this.props.match.url} />
				<hr />
				{isPost
				   ? this.IsUrlContainsPost() 
				      ? <UserPost userId={this.props.userId} changePostId={this.changeId} postId={postId} /> 
				      : 'Click Posts/Albums' 
				   : <UserAlbum userId={this.props.userId} changeAlbumId={this.changeId} albumId={albumId} />
				}
			</Container>
		)
	}
}

export default UserPage