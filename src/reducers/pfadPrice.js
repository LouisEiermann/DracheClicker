const pfadPriceReducer = (pfadPrice = 50, action) => {
  switch(action.type){
    case 'INCREASE_PFAD_PRICE':
      return pfadPrice + action.payload;
    default:
      return pfadPrice
  }
};

export default pfadPriceReducer;
