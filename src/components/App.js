import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import LoadingBar from 'react-redux-loading'
import LeaderBoard from './LeaderBoard'
import AddPoll from './AddPoll'
import Poll from './Poll'
import Nav from './Nav'

class App extends Component {

  componentDidMount(){
      this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className="container">
            <Nav />
            <div className="container">
              {this.props.loading === true
                ? null
                : <div>
                    <Route exact path="/" component={Dashboard} />
                    <Route path="/leaderboard" component={LeaderBoard} />
                    <Route path="/add" component={AddPoll} />
                    <Route path="/polls/:id" component={Poll} />
                  </div>
              }
            </div>
          </div>
        </Fragment>
      </Router>
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
