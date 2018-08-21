import React, { Component } from 'react';
import re from './images/re.png'

class Testimonial extends Component{
	constructor(props){
		super(props)
		this.state = {
			title:"Recomendations",
			testimonials: [{name:'Anibal Gonda', title: 'VP Capital Humano en Cuti, Genexus Technical Evangelist'},
							{name: 'Ing. Margarita Patiño', title: 'IBM Uruguay S.A'}]
		}
	}

	render(){
		return(
			<section className="testimonial">
				<div className="row">
					<h1 className = "center">{this.state.title}</h1>
					{
						this.state.testimonials.map((testimonial) =>{
							return(
								<div className={"grid-" + (this.state.testimonials.length + 1)} key={testimonial.name}>
									<img src={re}/>
									<h2>{testimonial.name}</h2>
									<p>{testimonial.title}</p>
								</div>
							)
						})

					}

				</div>
			</section>
			)
	}
}

export default Testimonial