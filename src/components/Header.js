import React from 'react'
import { Link,Route } from "react-router-dom"

class Header extends React.Component{
	render(){
		return(
			<nav className="header navbar fixed-top navbar-expand-sm navbar-light bg-light">
			 <span className="navbar-brand">My Social Media</span>
			  <Link to="/" className='text-black nav-item nav-link'>
			  	User List 
			  </Link>
			  <Route path="/:username" render={(props)=>(
			  	  <button className='nav-item nav-link btn-link btn'> 
			  	    {props.match.params.username}
			  	  </button>
			  	)} />
		   </nav>
		)
	}
}

export default Header