import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import LoadingBar from 'react-redux-loading'
import LeaderBoard from './LeaderBoard'
import AddPoll from './AddPoll'

class App extends Component {

  componentDidMount(){
      this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div>
        <LoadingBar />
        <div className="container">
          {this.props.loading === true
            ? null
            : <AddPoll />
          }
        </div>
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
