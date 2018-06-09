import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddPoll } from '../actions/polls'
class AddPoll extends Component {

  state = {
    question: '',
    a: '',
    b: '',
    c: '',
    d: ''
  }
  handleInputChange = (e) => {
    const name = e.target.name
    this.setState({
      [name]: e.target.value
    })
  }

  handleFormSubmit = (e) => {
    e.preventDefault()
    this.props.history.push('/')
    this.props.dispatch(handleAddPoll(this.state))
  }

  isDisabled = () => {
    const { q, a, b, c, d } = this.state
    return q === ''
           || a === ''
           || b === ''
           || c === ''
           || d === ''
  }

  render() {
    return (
      <div>
        <form className="add-form" onSubmit={this.handleFormSubmit}>
          <label>
            <h3>What is your question?</h3>
            <input
              type="text"
              name="question"
              id="question"
              className="input"
              value = { this.state.question }
              onChange={this.handleInputChange}/>
          </label>
          <label><h3>What are the options?</h3></label>
          <label>
            A.
            <input
              type="text"
              name="a"
              className="input"
              value = { this.state.a }
              onChange={this.handleInputChange}/>
          </label>
          <label>
            B.
            <input
              type="text"
              name="b"
              className="input"
              value = { this.state.b }
              onChange={this.handleInputChange}/>
          </label>
          <label>
            C.
            <input
              type="text"
              name="c"
              className="input"
              value = { this.state.c }
              onChange={this.handleInputChange}/>
          </label>
          <label>
            D.
            <input
              type="text"
              name="d"
              className="input"
              value = { this.state.d }
              onChange={this.handleInputChange}/>
          </label>

          <button
            type="submit"
            disabled={this.isDisabled()}
            className="btn"
            >Add Poll</button>
        </form>
      </div>
    )
  }
}

export default connect()(AddPoll)
