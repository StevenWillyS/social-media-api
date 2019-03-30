import React from 'react'
import { Link } from "react-router-dom"
import {Col,Row} from './BootstrapComponent'

const SingleLineSpan = props => {
	return(
		<span>
			{props.children}
			<br />
		</span>
	)
}

const ViewUser = props => {
	const user = props.users.map((user,index)=>{
		return(
			<Link 
			  to={`/${user.username}`}
			  key={user.id} 
			  className='text-black'
			  onClick={()=>props.setID(user.id)}>
				<div className='border'>
					<h3>{user.username}</h3>
					<Row>
						<Col col='2'>
							<SingleLineSpan>Name</SingleLineSpan>
							<SingleLineSpan>City</SingleLineSpan>
							<SingleLineSpan>Website</SingleLineSpan>
							<SingleLineSpan>Company</SingleLineSpan>
							<SingleLineSpan>Email</SingleLineSpan>
						</Col>
						<Col>
							<SingleLineSpan>:{user.name}</SingleLineSpan>
							<SingleLineSpan>:{user.address.city}</SingleLineSpan>
							<SingleLineSpan>:{user.website}</SingleLineSpan>
							<SingleLineSpan>:{user.company.name}</SingleLineSpan>
							<SingleLineSpan>:{user.email}</SingleLineSpan>
						</Col>
					</Row>
				</div>
			</Link>
		)
	})
	return(
		<div>
			<div className='text-center'>
				<h1 className='h1-config'>User List</h1>
			</div>
			{user}
		</div>
	)
}

export default ViewUser