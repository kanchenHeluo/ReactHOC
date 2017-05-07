import React from 'react'

module.exports = {
	localStorageSubscription(WrappedComponent){
		let hasLocalStorage = localStorage
		if(!hasLocalStorage){
			return WrappedComponent
		}
		let name = WrappedComponent.displayName || WrappedComponent.name || WrappedComponent.constructor.displayName || WrappedComponent.constructor.name

		class LocalStorageComponent extends WrappedComponent{
			componentWillMount(){
				console.log('mount2')
				super.componentWillMount();
				this.setState( JSON.parse( localStorage.getItem( name )))
				
			}

			componentWillUpdate(nextProps, nextState){
				console.log('update2')
				super.componentWillUpdate();
				console.log(this.state.inputData)
				localStorage.setItem( name, JSON.stringify( nextState ))
			}
		}
		LocalStorageComponent.displayName = name
		return LocalStorageComponent
	}
}