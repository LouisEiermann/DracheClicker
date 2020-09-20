const grabPriceReducer = (grabPrice = 5000000, action) => {
  switch(action.type){
    case 'INCREASE_GRAB_PRICE':
      return grabPrice + action.payload;
    default:
      return grabPrice
  }
};

export default grabPriceReducer;
