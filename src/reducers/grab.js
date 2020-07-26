const grabReducer = (grabLevel = 0, action) => {
  switch(action.type){
    case 'ADD_GRAB':
      return grabLevel + action.payload;
    case 'NO_FUNDS':
      return grabLevel;
    default:
      return grabLevel
  }
};

export default grabReducer;
