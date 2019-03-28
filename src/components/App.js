import React from 'react'
import Header from './Header'
import ListUser from './ListUser'
import { BrowserRouter as Router,Route} from "react-router-dom"

import '../styles/custom.css'

class App extends React.Component{
	render(){
		return(
			<Router>
				<div className='container'>
					<Header />
					<div className='main'>
						<Route path="/" exact component={ListUser}/>
					</div>
				</div>
			</Router>
		)
	}
}

export default App