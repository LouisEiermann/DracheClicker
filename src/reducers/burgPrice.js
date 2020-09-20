const burgPriceReducer = (burgPrice = 50000, action) => {
  switch(action.type){
    case 'INCREASE_BURG_PRICE':
      return burgPrice + action.payload;
    default:
      return burgPrice
  }
};

export default burgPriceReducer;
