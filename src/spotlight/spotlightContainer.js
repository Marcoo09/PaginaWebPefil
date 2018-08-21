import React, { Component } from 'react';
import SpotLight from './spotlight'
import spotlight from './images/spotlight.png'

class SpotLightContainer extends Component{
	constructor(props){
		super(props)
		this.state = {

		}
	}
	render(){
		return(
				<section className="spotlight">
					<div className = "container">
						<SpotLight img={spotlight} title = "Tecnic Support in DVelop Software" description = "Nowaday, I work with Genexus giving support of products which my company develop."/>
					</div>
				</section>
			)
	}
}

export default SpotLightContainer