import {
  REQUEST_COUNTRYDATA,
  RECEIVE_COUNTRYLIST,
  RECEIVE_COUNTRYDATA_ERROR
} from "../../constants/ActionTypes";

const initState = {
  isFetching: false,
  list: [],
  error: '',
};

export default function (state = initState, action) {
  switch (action.type) {
    case REQUEST_COUNTRYDATA:
      return {...state, isFetching: true};
    case RECEIVE_COUNTRYLIST:
      return {
        ...state, isFetching: false,
        list: action.list,
      };
    case RECEIVE_COUNTRYDATA_ERROR:
      return {...state, isFetching: false, error: action.error};
    default:
      return state;
  }
}
