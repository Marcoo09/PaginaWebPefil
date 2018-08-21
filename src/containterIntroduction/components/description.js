import React, { Component } from 'react';

function Description(props){
	return(
		<section className="center">
			<h1>{props.title}</h1>
			<p>
				{props.introduction}
			</p>
		</section>
		)
}

export default Description