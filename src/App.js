import React,{ Component } from 'react';
import robots from './robots';
import Cardlist from './Cardlist';
import Searchbox from './Searchbox';
import Scroll from './Scroll';


class App extends Component{
	constructor(){
		super()
		this.state ={
			robots:robots,
			searchinput:''
		}
	}


changedSearch(event){
	this.setState({searchinput:event.target.value})
	// console.log(filteredRobots);
}	

	render(){
		const filteredRobots = this.state.robots.filter(robot=>{
		return robot.name.toLowerCase().includes(this.state.searchinput.toLowerCase());
		
	});
		return(
		<div className='tc'> 
			<h1 id='headtitle'>ROBOFRIENDS</h1>
			<Searchbox searching={this.changedSearch.bind(this)}/>
			<Scroll>
				<Cardlist robots={ filteredRobots } />;
			</Scroll>
		</div>
	);
	}
}

export default App;