import axios from 'axios';

export const FETCH_START = "FETCH_START";
export const FETCH_FAIL = "FETCH_FAIL";
export const FETCH_SUCCESS = "FETCH_SUCCESS";

export const getMonsters = () => {
  return(dispatch) => {
    dispatch(fetchStart());
    axios.get('https://mhw-db.com/monsters')
      .then(resp => {
        dispatch({type:FETCH_SUCCESS, payload:resp.data});
      })
      .catch(err => {
        dispatch({type:FETCH_FAIL, payload:err});
      })
  }
}

export const fetchStart = () => {
  return({type:FETCH_START});
}

export const fetchFail = (error) => {
  return({type:FETCH_FAIL, payload:error})
}

export const fetchSuccess = (monsters) => {
  return({type:FETCH_SUCCESS, payload:monsters})
}