const burgReducer = (burgLevel = 0, action) => {
  switch(action.type){
    case 'ADD_BURG':
      return burgLevel + action.payload;
    case 'NO_FUNDS':
      return burgLevel;
    default:
      return burgLevel
  }
};

export default burgReducer;
