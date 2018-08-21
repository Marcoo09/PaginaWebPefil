import React, { Component } from 'react'
import Description from '../components/description'
import Gallery from '../components/gallery'
import Testimonial from '../components/testimonial'

class Introduction extends Component{
	constructor(props){
		super(props)
		this.state = {
			title: "Welcome!",
			introduction: "I am 18 and I am Uruguayan, I love programming, learning new things and taking advantage of my time. Also I like doing sports as football and basketball to maintain me fit"
		}
	}

	render(){
		return(
			<div className ="container">
				<Description title = {this.state.title} introduction = {this.state.introduction} />
				<hr/>
				<Gallery/>
				<hr/>
				<Testimonial/>
			</div>
			)
	}
}

export default Introduction