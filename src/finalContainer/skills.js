import React, { Component } from 'react';

function Skills(props){

	return(
		<section>
			<div className="row">
				<div className="grid-2">
					<h1>Skills</h1>
					<ul>
						{
							props.skills.map((skill) => {
								return(
									<li key ={skill}>{skill}</li>
								)
							})
						}
					</ul>
				</div>
				
				<div className="grid-4">
					<h1>In Conclusion</h1>
					<p>
						{
							props.description
						}
					</p>
					
						<br/>
						<h4>My networks:</h4>
						<ul>
							<li> <a href={props.linkedin}>Linkedin</a></li>
							<li> <a href={props.twitter}>Twitter</a></li>
							<li> <a href={props.github}>Github</a></li>
						</ul>
						<h4>You can also contact me by email: </h4>
						<ul>
							{
								props.contact.map((email)=>{
									return <li key ={email}>{email}</li>
								})
							}
						</ul>
				</div>
			</div>
		</section>
		)

}

export default Skills