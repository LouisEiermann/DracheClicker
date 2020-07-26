const rewePriceReducer = (rewePrice = 2000, action) => {
  switch(action.type){
    case 'INCREASE_REWE_PRICE':
      return rewePrice + action.payload;
    default:
      return rewePrice
  }
};

export default rewePriceReducer;
