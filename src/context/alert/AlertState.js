import React, { useReducer } from 'react'
import AlertContext from './alertContext'
import AlertReducer from './AlertReducer'

import {
  SET_ALERT,
  REMOVE_ALERT
} from '../types'

const AlertState = props => {

  const initialState = null

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  // Set Alert
  const setAlert = (msg, tpy) => {

    //setAlert({ message: msg, type: tpy });
    dispatch({
      type: SET_ALERT,
      payload: { msg, tpy }
    })

    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000);
  }


  return <AlertContext.Provider value={{
    alert: state,
    setAlert
  }}>
    {props.children}
  </AlertContext.Provider>
}

export default AlertState;