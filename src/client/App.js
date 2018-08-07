import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import * as contentful from 'contentful'
import App from './App'


var client = contentful.createClient({
  space: 'add_space_id',
  accessToken: 'add_access_token' })
client.getEntries().then(entries => {
  entries.items.forEach(entry => {
    if(entry.fields) {
      console.log(entry.fields)
    }
  })
})

ReactDOM.render((
  <Router>
    <App />
  </Router>
), document.getElementById('root'))
