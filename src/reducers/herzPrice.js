const herzPriceReducer = (herzPrice = 500, action) => {
  switch(action.type){
    case 'INCREASE_HERZ_PRICE':
      return herzPrice + action.payload;
    default:
      return herzPrice
  }
};

export default herzPriceReducer;
