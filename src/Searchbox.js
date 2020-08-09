import React from 'react';


const Searchbox=({searching})=>{
	return(
		<div className='pa3 ma4' >
			<input type='search' 
			placeholder='Search robots' 
			className='pa3 grow ba b--green bg-lightest-blue'
			onChange={ searching }
			/>
		</div>
	); 
}

export default Searchbox;