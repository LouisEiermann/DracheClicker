const reweReducer = (reweLevel = 0, action) => {
  switch(action.type){
    case 'ADD_REWE':
      return reweLevel + action.payload;
    case 'NO_FUNDS':
      return reweLevel;
    default:
      return reweLevel
  }
};

export default reweReducer;
