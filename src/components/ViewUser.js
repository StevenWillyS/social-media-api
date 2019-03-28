import React from 'react'
import { Link } from "react-router-dom"

const SingleLineSpan = props => {
	return(
		<span>
			{props.children}
			<br />
		</span>
	)
}
const Col = props => {
	return(
		<div className={props.col ? `col-${props.col}` : 'col'}>
			{props.children}
		</div>
	)
}
const ViewUser = props => {
	const user = props.users.map((user,index)=>{
		return(
			<Link 
			  to={`/${user.username}`}
			  key={user.id} 
			  className='text-black'>
				<div className='border'>
					<h3>{user.username}</h3>
					<div className= 'row'>
						<Col col='2'>
							<SingleLineSpan>Name</SingleLineSpan>
							<SingleLineSpan>City</SingleLineSpan>
							<SingleLineSpan>Website</SingleLineSpan>
							<SingleLineSpan>Company</SingleLineSpan>
						</Col>
						<Col>
							<SingleLineSpan>:{user.name}</SingleLineSpan>
							<SingleLineSpan>:{user.address.city}</SingleLineSpan>
							<SingleLineSpan>:{user.website}</SingleLineSpan>
							<SingleLineSpan>:{user.company.name}</SingleLineSpan>
						</Col>
					</div>
				</div>
			</Link>
		)
	})
	return(
		<div>
			{user}
		</div>
	)
}

export default ViewUser