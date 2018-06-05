import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'

class App extends Component {

  componentDidMount(){
      this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div className="container">
      {this.props.loading === true
        ? 'loading'
        : <Dashboard />
      }
      </div>
    )
  }
}

function mapStateToProps({authedUser}){
  return {
    loading: authedUser === null
  }
}
const ConnectedApp = connect(mapStateToProps)(App)

export default ConnectedApp
