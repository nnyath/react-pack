import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Loadable from 'react-loadable'

import Home from 'Containers/Home/Home'
import store from 'Redux/store'

const Loading = () => <div>Loading ...</div>

const Split = Loadable({
  loader: () => import('Containers/Split/Split'),
  loading: Loading
})

export default () => (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path='/' render={() => <Redirect to='/home' />} />
        <Route path='/home' component={Home} />
        <Route path='/split' component={Split} />
      </div>
    </Router>
  </Provider>
)
