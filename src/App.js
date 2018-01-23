import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import Home from 'Containers/Home/Home'
import store from 'Redux/store'

export default () => (
  <Provider store={store}>
    <Router>
      <Home />
    </Router>
  </Provider>
)
