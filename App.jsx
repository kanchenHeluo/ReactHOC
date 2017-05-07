import React from 'react'
import ReactDOM from 'react-dom'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'

const app = document.createElement('div')
document.body.appendChild(app)
ReactDOM.render(<div><ComponentA /><ComponentB /></div>, app)