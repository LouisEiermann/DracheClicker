const haiderReducer = (haider = 0, action) => {
  switch(action.type){
    case 'ADD_HAIDER':
      return haider + action.payload;
    case 'SUBTRACT_HAIDER':
      return haider - action.payload;
    default:
      return haider
  }
};

export default haiderReducer;
