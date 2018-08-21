import React, { Component } from 'react';
import back from './header.jpg'
function Header(props){
	let headerStyle ={
		backgroundImage: 'url('+ back+ ')'
	}
		return(
			<header style={headerStyle}>
				<h1>{props.name}</h1>
				<p>{props.title}</p>
			</header>
			)
}

export default Header;1