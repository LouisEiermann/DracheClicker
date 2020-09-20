import haiderReducer from './haiders';
import haiderProSekundeReducer from './haiderProSekunde';
import pfadPriceReducer from './pfadPrice';
import herzPriceReducer from './herzPrice';
import rewePriceReducer from './rewePrice';
import burgPriceReducer from './burgPrice';
import schanzePriceReducer from './schanzePrice';
import grabPriceReducer from './grabPrice';
import pfadReducer from './pfad';
import herzReducer from './herz';
import reweReducer from './rewe';
import burgReducer from './burg';
import schanzeReducer from './schanze';
import grabReducer from './grab';
import pfadPowerReducer from './pfadPower';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  haiders: haiderReducer,
  haiderProSekunde: haiderProSekundeReducer,
  pfadPrice: pfadPriceReducer,
  herzPrice: herzPriceReducer,
  rewePrice: rewePriceReducer,
  burgPrice: burgPriceReducer,
  schanzePrice: schanzePriceReducer,
  grabPrice: grabPriceReducer,
  pfadLevel: pfadReducer,
  herzLevel: herzReducer,
  reweLevel: reweReducer,
  burgLevel: burgReducer,
  schanzeLevel: schanzeReducer,
  grabLevel: grabReducer,
  pfadPower: pfadPowerReducer
});

export default allReducers;
