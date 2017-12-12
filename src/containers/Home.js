import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { toggleHome } from '../actions/home'
import './Home.css'

@connect(store => {
  return store.home
})
export default class Home extends React.Component {
  constructor (props) {
    super(props)
    this.toggleHome = this.toggleHome.bind(this)
  }

  toggleHome () {
    this.props.dispatch(toggleHome())
  }

  componentDidMount () {
  }

  render () {
    const {home} = this.props

    return <div>
      <h1>Hello World!</h1>
      <h2>Home is where the heart <span className={home ? 'red' : ''}>{home ? 'is!' : `isn't`}</span></h2>
      <button onClick={this.toggleHome}>Toggle where the heart is</button>
    </div>
  }
}

Home.propTypes = {
  home: PropTypes.bool,
  dispatch: PropTypes.func
}
