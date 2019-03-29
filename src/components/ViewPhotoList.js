import React from 'react'
import { Link } from "react-router-dom"
import { Col,Row } from './BootstrapComponent'

const ViewPhotoList = props =>{
	const photos = props.photos.map((photo,index)=>{
		return(
			<Col 
			  col='2'
			  key={photo.id}
			  className='p-1'>
				<Link 
				  to={`photo/${photo.id}`}
				  onClick={()=>props.changeSelectPhoto(photo.id)}>
					<img src={photo.thumbnailUrl} alt='Thumbnail' />
				</Link>
			</Col>
		)
	})
	return(
		<Row>
			{photos}
		</Row>
	)
}

export default ViewPhotoList