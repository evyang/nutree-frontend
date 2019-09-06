import {createSelector} from 'reselect'

const standardSelector = state => state.countryData.standard;
// const allCountriesSelector = state => state.countryData.allCountries;
const currentCountrySelector = state => state.countryData.currentCountry;

export const getTwoCountries = createSelector(
  [standardSelector, currentCountrySelector],
  (standard, current, variables) => {
    let newStandard;
    let newCurrent;
      if (standard.data) {newStandard = {
        key: standard.countryName,
        label: standard.countryName,
        values: {}
      };
      standard.data.forEach(d => newStandard.values[d.key] = Math.log10(Number(d.data)+1));
    }
    if (current.data) {
      newCurrent = {
        key: current.countryName,
        label: current.countryName,
        values: {}
      };
      current.data.forEach(d => newCurrent.values[d.key] = Math.log10(Number(d.data)+1));
    }

    return [newStandard, newCurrent, standard.data]
  }
);

// const subtotalSelector = createSelector(
//   shopItemsSelector,
//   items => items.reduce((acc, item) => acc + item.value, 0)
// )
//
// const taxSelector = createSelector(
//   subtotalSelector,
//   taxPercentSelector,
//   (subtotal, taxPercent) => subtotal * (taxPercent / 100)
// )
//
// export const totalSelector = createSelector(
//   subtotalSelector,
//   taxSelector,
//   (subtotal, tax) => ({ total: subtotal + tax })
// )
//
// let exampleState = {
//   shop: {
//     taxPercent: 8,
//     items: [
//       { name: 'apple', value: 1.20 },
//       { name: 'orange', value: 0.95 },
//     ]
//   }
// };
