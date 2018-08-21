import React, { Component } from 'react';

function Footer(props){
	return(
		<footer className="center">
			<hr/>
			<span>&copy; {props.content}</span>
		</footer>
		)
}

export default Footer