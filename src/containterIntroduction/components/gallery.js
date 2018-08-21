import React, { Component } from 'react';
import Image from './image'
import startupWeekend from './images/startupWeekend.jpg'
import reconocimiento1 from './images/reconocimiento1.jpg'
import dvelop1 from './images/dvelop1.JPG'
import gxStudents from './images/gxStudents.jpg'
import reconocimiento2 from './images/reconocimiento2.jpg'
import dvelop2 from './images/dvelop2.jpg'


const route = './images/'


class Gallery extends Component{
	constructor(props){
		super(props)
		this.state ={
			title: "Gallery",
			namesImages: [startupWeekend, reconocimiento1,dvelop1,gxStudents,reconocimiento2, dvelop2]
		}
	}

	render(){
		return(
			<section className = "gallery">
				<h1 className="center">{this.state.title}</h1>
				<div className = "row">
					{	
						this.state.namesImages.map((image) => {
							return(
								<Image key = {image} src = {image} />
							)

						})
					}
				</div>
			</section>
			)
		}
}

export default Gallery;