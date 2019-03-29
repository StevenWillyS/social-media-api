import React from 'react'

export const Col = props => {
	return(
		<div className={ props.col ? `col-${props.col} ${props.className}` : `col ${props.className}`}>
			{props.children}
		</div>
	)
}
export const Row = props => {
	return(
		<div className={`row ${props.className}`}>
			{props.children}
		</div>
	)
}
export const Container = props => {
	return(
		<div className={`container ${props.className}`}>
			{props.children}
		</div>
	)
}