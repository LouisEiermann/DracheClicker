const schanzePriceReducer = (schanzePrice = 500000, action) => {
  switch(action.type){
    case 'INCREASE_SCHANZE_PRICE':
      return schanzePrice + action.payload;
    default:
      return schanzePrice
  }
};

export default schanzePriceReducer;
