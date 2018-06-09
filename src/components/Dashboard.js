import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Dashboard extends Component {

  state = {
    showAnswered: false
  }

  showAnswered(){
    this.setState({
        showAnswered: true
      })
  }

  showUnAnswered(){
    this.setState({
        showAnswered: false
      })
  }
  render() {

    const { answered, unanswered } = this.props
    const list = this.state.showAnswered === true
                 ? answered
                 : unanswered

    return (
      <div>
        <div className="dashboard-toggle">
          <button
            onClick={()=>this.showUnAnswered()}
            style={{textDecoration: this.state.showAnswered === true ? null : 'underline'}}
            >Unanswered
          </button>
          <span> | </span>
          <button
            onClick={()=>this.showAnswered()}
            style={{textDecoration: this.state.showAnswered === true ? 'underline' : null}}
            >Answered
          </button>
        </div>
        <ul className="dashboard-list">
              {list.map(q => {
                return <Link to={`/polls/${q.id}`}>
                          <li key={q.id}>{q.question}</li>
                       </Link>
              })}
        </ul>
      </div>
    )
  }
}


function mapStateToProps({ users, polls, authedUser }) {

  const answers = users[authedUser].answers
  const answered = Object.values(polls).filter(poll => answers.includes(poll.id))
  const unanswered = Object.values(polls).filter(poll => !answers.includes(poll.id))

  return {
    answered,
    unanswered
  }
}

export default connect(mapStateToProps)(Dashboard)
