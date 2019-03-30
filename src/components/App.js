import React from 'react'
import Header from './Header'
import ListUser from './ListUser'
import UserPage from './UserPage'
import {Container} from './BootstrapComponent'
import {Route} from "react-router-dom"

import '../styles/custom.css'

class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			userId: ''
		}
		this.setID = this.setID.bind(this)
	}
	setID(userId){
		this.setState({userId})
	}
	render(){
		return(
			<Container>
				<Header />
				<div className='main'>
					<Route 
						path="/" exact 
					    render={()=>
					    	<ListUser setID={this.setID} />} />
					<Route 
						path="/:username" 
						render={(props)=>
							<UserPage {...props} userId={this.state.userId}/>} />
				</div>
			</Container>
		)
	}
}

export default App