import React, { Component } from 'react';

function Education(props){
	return(
		<section className="education">	
			<h1> Education </h1>
			<h3>{props.education}</h3>
		</section>
		)
}

export default Education