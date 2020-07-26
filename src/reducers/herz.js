const herzReducer = (herzLevel = 0, action) => {
  switch(action.type){
    case 'ADD_HERZ':
      return herzLevel + action.payload;
    case 'NO_FUNDS':
      return herzLevel;
    default:
      return herzLevel
  }
};

export default herzReducer;
