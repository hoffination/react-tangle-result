import React from 'react'
import './react-tangle-result.css'

const INCREASING = 'tr-increasing'
const DECREASING = 'tr-decreasing'

module.export = React.createClass({
  propTypes: {
    value: React.PropTypes.number.isRequired
  },
  getInitialState: function () {
    return {
      timeout: null,
      className: ''
    }
  },
  componentWillReceiveProps: function (nextProps) {
    // check for change in value
    if (JSON.stringify(this.props.value) !== JSON.stringify(nextProps.value)) {
      let _this = this
      let className = (this.props.value > nextProps.value) ? DECREASING : INCREASING
      // if a value is currently changing, restart the animation
      if (this.state.timeout) {
        clearTimeout(this.state.timeout)
        this.setState({
          className: ''
        })
        window.requestAnimationFrame(function () {
          _this.setState({
            className: className
          })
        })
      // otherwise
      } else {
        this.setState({
          className: className
        })
      }
      this.setState({
        timeout: setTimeout(function () {
          clearTimeout(_this.state.timeout)
          _this.setState({
            className: '',
            timeout: null
          })
        }, 800)
      })
    }
  },
  render: function () {
    return (
      <div className='tangle-result'>
        <span className={this.state.className}>{this.props.value}</span>
      </div>
    )
  }
})
