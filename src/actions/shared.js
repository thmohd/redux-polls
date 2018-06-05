import { getInitialData } from '../utils/api'
import { receiveUsers } from './users'
import { receivePolls } from './polls'
import { setAuthedUser } from './authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'

const USER_ID = 'tylermcginnis'
const LOADING = 'LOADING'
//thunk
export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading())

    getInitialData()
    .then(({users, polls}) => {
      dispatch(receiveUsers(users))
      dispatch(receivePolls(polls))
      dispatch(setAuthedUser(USER_ID))
      dispatch(hideLoading())
    })
  }
}
