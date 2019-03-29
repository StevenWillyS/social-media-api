import React from 'react'
import ViewUser from './ViewUser'

class ListUser extends React.Component{
	state = {
		users: []
	}
	componentDidMount(){
		const url = 'https://jsonplaceholder.typicode.com/users'
		fetch(url)
		  .then(response => response.json())
		  .then(users => {
		  	this.setState({users})
		  })
		  .catch(error => console.error('Error: ',error))
	}
	render(){
		const {users} = this.state;
		const {setID} = this.props;
		return(
			<ViewUser users={users} setID={setID} />			
		)
	}
}

export default ListUser