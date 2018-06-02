export const RECEIVE_POLLS = 'RECEIVE_POLLS'

function receivePolls(polls){
  return {
    type: RECEIVE_POLLS,
    polls
  }
}
