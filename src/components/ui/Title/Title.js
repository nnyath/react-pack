import React from 'react'
import PropTypes from 'prop-types'

export default class Title extends React.PureComponent {
  render () {
    return <h1>{this.props.title}</h1>
  }
}

Title.propTypes = {
  title: PropTypes.string
}
