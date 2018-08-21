import React, { Component } from 'react';

function Image(props){
	return(
			<a href="#"><img src={props.src} className="grid-2"/></a>
		)
}

export default Image