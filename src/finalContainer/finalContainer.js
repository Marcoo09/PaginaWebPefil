import React, { Component } from 'react';
import Education from './education'
import Experience from './experience'
import Skills from './skills'
import Footer from './footer'

class FinalContainer extends Component{
	constructor(props){
		super(props)
		this.state = {
			education: "I am in my first year of college in ORT University. I am studying Systems engineering",
			content: "Marco Fiorito - 2018",
			skills: ["English","Basic Portuguese","Web Programming","Javascript", "Python", "Java","C#","HTML5 and CSS","Genexus", "ReactJS", "Knoledge about SQL Server and MySQL", "Unity"],
			github: "https://github.com/Marcoo09?tab=repositories" ,
			twitter: "https://twitter.com/maarcoo09?lang=es",
			linkedin: "https://www.linkedin.com/in/marco-fiorito/",
			description: "I think that I am an effort and persisten person. I like work in team because I can learn about the people who around me.",
			emails: ["marcofiorito1@gmail.com", "marcofiorito1@hotmail.com"]
		}
	}
	render(){
		return(
			<div className="container">
				<Education education = {this.state.education}/>
				<hr/>
				<Experience/>
				<hr/>
				<Skills skills = {this.state.skills} github = {this.state.github} twitter ={this.state.twitter} linkedin = {this.state.linkedin} description ={this.state.description} contact = {this.state.emails}/>
				<Footer content = {this.state.content}/>
			</div>
			)
	}
}

export default FinalContainer