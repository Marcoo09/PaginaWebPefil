import React, { Component } from 'react';

function eachEx(props){
	return(
		<div className="row">
			<div className="grid-2">
					<h2>{props.placeName}</h2>
					<p>{props.period}</p>
				</div>
				<div className="grid-4">
					<ul>
						{
							props.responsabilities.map((responsability) =>{
								return(
									<li key ={responsability}>{responsability}</li>
								)
							})

						}
					</ul>
				</div>
		</div>
		)
}

export default eachEx