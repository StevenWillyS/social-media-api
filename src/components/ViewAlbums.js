import React from 'react'
import { Link } from "react-router-dom"
import {Container,Row,Col} from './BootstrapComponent'

const ViewAlbums = props =>{
	const albums = props.albums.map((album,index)=>{
		return(
			<Col 
			  key={album.id}
			  col='4'
			  className='text-center border'>
				<Link 
				  to={`album/${album.id}`}
				  className='text-black'
				  onClick={()=>props.changeAlbumId(album.id,'albumId')}>
				<p>{album.title}</p>
				</Link>
			</Col>
		)
	})
	return(
		<Container>
			<Row>
				{albums}
			</Row>
		</Container>
	)
}

export default ViewAlbums