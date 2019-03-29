import React from 'react'
import ViewAlbums from './ViewAlbums'
import ViewSingleAlbum from './ViewSingleAlbum'

class UserAlbum extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			albums: [],
		}
		this.searchAlbum = this.searchAlbum.bind(this)
	}	
	componentDidMount(){
		const url = `https://jsonplaceholder.typicode.com/albums?userId=${this.props.userId}`
		fetch(url)
		  .then(response => response.json())
		  .then(albums => {
		  	this.setState({albums})
		  })
		  .catch(error => console.error('Error: ',error))
	}
	searchAlbum(albumId){
		var {albums} = this.state
		albums = albums.filter((album)=>{
			return album.id === albumId
		})
		return albums[0]	 
	}
	render(){
		const {albums} = this.state
		const {albumId,changeAlbumId} = this.props
		return(
			<div>
			{!albumId
				? <ViewAlbums albums={albums} changeAlbumId={changeAlbumId}/>
				: <ViewSingleAlbum album={this.searchAlbum(albumId)}/>
			}
			</div>
		)
	}
}

export default UserAlbum