import React from 'react'
import {Row,Col,Container} from './BootstrapComponent'
import ViewPhotoList from './ViewPhotoList'
import ViewSinglePhoto from './ViewSinglePhoto'

class ViewSingleAlbum extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			photos: [],
			photoId: 0,
		}
		this.searchPhoto = this.searchPhoto.bind(this)
		this.changePhotoId = this.changePhotoId.bind(this)
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
	searchPhoto(photoId){
		var {photos} = this.state
		photos = photos.filter((photo)=>{
			return photo.id === photoId
		})
		return photos[0]	 
	}
	changePhotoId(photoId){
		this.setState({photoId})
	}
	render(){
		const {photos,photoId} = this.state
		const {album} = this.props 
		return(
			<Container>
				<Row className='text-center'>
					<Col col='12'>
						<button 
						  className='btn btn-link text-black' 
						  onClick={()=>this.changePhotoId(0)}>
							<h2>
								Album <br/>
								{album.title}
							</h2>
						</button>
					</Col>
				</Row>
				<hr />
				<Row className='text-center'>
					{photoId
						? <ViewSinglePhoto 
							photo={this.searchPhoto(photoId)} />
						: <ViewPhotoList 
							changeSelectPhoto={this.changePhotoId} 
							photos={photos} />
					}
				</Row>
			</Container>
		)
	}
}

export default ViewSingleAlbum