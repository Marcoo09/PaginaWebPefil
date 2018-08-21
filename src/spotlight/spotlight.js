import React, { Component } from 'react';

function SpotLight(props){
	return(
			<div className="row">
				<div className="grid-3">
					<img src={props.img}/>
				</div>
				<div className="grid-3">
					<h1>{props.title}</h1>
					<p>{props.description}</p>
				</div>
			</div>
		)
}

export default SpotLight