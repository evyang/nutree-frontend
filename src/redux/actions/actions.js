import {
  REQUEST_COUNTRYDATA,
  RECEIVE_COUNTRYDATA,
  RECEIVE_COUNTRYLIST,
  RECEIVE_COUNTRYDATA_ERROR,
  COUNTRYDATA_URL, COUNTRYLIST_URL
} from "../../constants/ActionTypes";

function requestCountryData () {
  return {
    type: REQUEST_COUNTRYDATA
  }
}

function receiveCountryData (json) {
  return {
    type: RECEIVE_COUNTRYDATA,
    countryData: json,
  }
}

function receiveCountryList (json) {
  return {
    type: RECEIVE_COUNTRYLIST,
    list: json,
  }
}

function receiveCountryDataError (error) {
  return {
    type: RECEIVE_COUNTRYDATA_ERROR,
    error,
  };
}

export function fetchCountryList () {
  return (dispatch) => {
    dispatch(receiveCountryList());
    return fetch(`${COUNTRYLIST_URL}?`)
      .then(req => req.json())
      .then(json => {
        if (!json.success) {
          throw new Error(json.message);
        }
        dispatch(receiveCountryList(json.message));
      })
      .catch(err => dispatch(receiveCountryDataError(err)));
  }
}

export function fetchCountryData (countryName) {
  return (dispatch) => {
    dispatch(requestCountryData());
    return fetch(`${COUNTRYDATA_URL}?country=${countryName}`)
      .then(req => req.json())
      .then(json => {
        if (!json.success) {
          throw new Error(json.message);
        }
        dispatch(receiveCountryData(json.message));
      })
      .catch(err => dispatch(receiveCountryDataError(err)));
  }
}
