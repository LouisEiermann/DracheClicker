const pfadReducer = (pfadLevel = 0, action) => {
  switch(action.type){
    case 'ADD_PFAD':
      return pfadLevel + action.payload;
    case 'NO_FUNDS':
      return pfadLevel;
    default:
      return pfadLevel
  }
};

export default pfadReducer;
