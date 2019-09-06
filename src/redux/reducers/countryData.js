import {
  REQUEST_COUNTRYDATA,
  RECEIVE_COUNTRYDATA,
  RECEIVE_COUNTRYDATA_ERROR
} from "../../constants/ActionTypes";

const initState = {
  isFetching: false,
  standard: {},
  currentCountry: {},
  allCountries: [],
  error: '',
};

export default function (state = initState, action) {
  switch (action.type) {
    case REQUEST_COUNTRYDATA:
      return {...state, isFetching: true};
    case RECEIVE_COUNTRYDATA:
      if (action.countryData.countryName === 'standard') {
        return {
          ...state, isFetching: false,
          standard: action.countryData
        };
      } else {
        if (state.allCountries.some(c => c.countryName === action.countryData.countryName)) {
          return {
            ...state, isFetching: false,
            currentCountry: action.countryData
          };
        } else {
          const allCountries = state.allCountries.slice();
          allCountries.push(action.countryData);
          return {
            ...state, isFetching: false,
            currentCountry: action.countryData,
            allCountries,
          };
        }
      }
    case RECEIVE_COUNTRYDATA_ERROR:
      return {...state, isFetching: false, error: action.error};
    default:
      return state;
  }
}
