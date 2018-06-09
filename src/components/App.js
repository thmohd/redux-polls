import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import LoadingBar from 'react-redux-loading'
import LeaderBoard from './LeaderBoard'
import AddPoll from './AddPoll'
import Poll from './Poll'

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
            : <Poll match={{params: {id: "6ni6ok3ym7mf1p33lnez"}}}/>
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
