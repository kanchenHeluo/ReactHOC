import React from 'react'
import {localStorageSubscription} from './HOC.js'

class ComponentA extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			inputData: '',
			displayData: 0
		}
		this.handleInputChange = this.handleInputChange.bind(this)
	}

	handleInputChange(e){
		this.setState({inputData: e.target.value})
		this.setState({displayData: e.target.value*e.target.value})
	}
	componentWillMount(){		
		console.log('mount1')
	}
	componentWillUpdate(){
		console.log('update1')
	}

	render(){
		return (
			<div>
				<input type="text" value={this.state.inputData} onChange={this.handleInputChange}/>
				<p>{this.state.displayData}</p>
			</div>
		)
	}
}

export default localStorageSubscription(ComponentA)