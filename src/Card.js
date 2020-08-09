import React from 'react';
import './hlogo.jpg';
import 'tachyons';


const Card =(props)=>{
	return(
		<div className='bg-light-green dib br4 pa3 ma2 bw6 shadow-5 grow'>
			<img src={`https://robohash.org/${props.id}?200x200`} alt='robot images'/>
			<div>
				<h1>{props.name}</h1>
				<p>{props.email}</p>
			</div>
		</div>
	);
}

export default Card;