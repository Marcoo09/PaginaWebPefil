import React, { Component } from 'react';
import Each from './eachEx.js'

class Experience extends Component{
	constructor(props){
		super(props)
		this.state = {
			experience:[{'placeName':'La Esquina Azul', 'responsabilities': ["Administrate the social networks of the restaurant", "Marketing"], "period":"2015 - 2017"},{'placeName':'DVelop Software Solutions', 'responsabilities': ["Give Support of the producs which the company dvelop.","Mantain products documentation", "Dvelop examples to the clients"], "period":"2017 - Currently"}]
		}
	}

	render(){
		return(
			<section className="experience">
				<h1 className = "center">Experience</h1>

				{
					this.state.experience.map((exp)=>{
						return(

							<Each key ={exp['placeName']} placeName={exp['placeName']} responsabilities = {exp['responsabilities']} period={exp['period']}/>
							)
					})
				}
			</section>
			)
	}
}

export default Experience
