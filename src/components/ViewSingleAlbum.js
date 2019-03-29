import React from 'react'
import {Row,Col,Container} from './BootstrapComponent'
import ViewPhotoList from './ViewPhotoList'

class ViewSingleAlbum extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			photos: []
		}
	}
	componentDidMount(){
		const url = `https://jsonplaceholder.typicode.com/photos?albumId=${this.props.album.id}`
		fetch(url)
		  .then(response => response.json())
		  .then(photos => {
		  	this.setState({photos})
		  })
		  .catch(error => console.error('Error: ',error))
	}
	render(){
		const {photos} = this.state
		const {album} = this.props 
		return(
			<Container>
				<Row className='text-center'>
					<Col col='12'>
						{album.title}
					</Col>
					{console.log(photos)}
				</Row>
				<Row>
					<ViewPhotoList photos={photos} />
				</Row>
			</Container>
		)
	}
}

export default ViewSingleAlbum