import {Component} from 'react'

/**
 * The HookTestBedErrorBoundary component.
 *
 * @return {JSX.Element}
 */
class HookTestBedErrorBoundary extends Component {
  constructor (props) {
    super(props)

    this.state = {error: null, componentStack: null}
  }

  componentDidCatch (error, errorInfo) {
    this.setState({
      error: error,
      componentStack: errorInfo.componentStack,
    })
  }

  render () {
    if (this.state.error !== null) {
      return (
        <div>
          <pre>
            {String(this.state.error)}
          </pre>

          <pre>
            {this.state.componentStack}
          </pre>
        </div>
      )
    }
    return this.props.children
  }
}

export default HookTestBedErrorBoundary
