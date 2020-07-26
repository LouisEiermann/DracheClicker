const haiderProSekundeReducer = (haiderProSekunde = 0, action) => {
  switch(action.type){
    case 'ADD_HAIDER_PRO_SEKUNDE':
      return haiderProSekunde + action.payload;
    default:
      return haiderProSekunde
  }
};

export default haiderProSekundeReducer;
