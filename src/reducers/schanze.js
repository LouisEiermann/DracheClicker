const schanzeReducer = (schanzeLevel = 0, action) => {
  switch(action.type){
    case 'ADD_SCHANZE':
      return schanzeLevel + action.payload;
    case 'NO_FUNDS':
      return schanzeLevel;
    default:
      return schanzeLevel
  }
};

export default schanzeReducer;
