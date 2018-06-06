import React from 'react'
import { connect } from 'react-redux'

function LeaderBoard({ users }) {
    return (
      <ul>
        { users.map( user => (
          <li className='user' key={user.id}>
            <img src={user.avatarUrl} alt={`avatar for ${user.name}`}/>
            <div>
              <h1>{user.name}</h1>
              <p>{`${user.polls} Polls`}</p>
              <p>{`${user.answers} Answers`}</p>
            </div>
          </li>
        ))}

       </ul>
    )
}

const mapStateToProps = ({users}) => {
  return {
    users: Object.keys(users).map(id => {
      const { name, avatarUrl, polls, answers } = users[id]

      return {
        id,
        name,
        avatarUrl,
        polls: polls.length,
        answers: answers.length
      }
    })
    .sort((a,b) => b.polls + b.answers > a.polls + a.answers )
  }
}
export default connect(mapStateToProps)(LeaderBoard)
