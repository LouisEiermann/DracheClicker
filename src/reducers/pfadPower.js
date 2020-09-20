const pfadPowerReducer = (pfadPower = 0, action) => {
  switch(action.type){
    case 'ADD_PFADPOWER':
      return pfadPower + action.payload;
    case 'NO_FUNDS':
      return pfadPower;
    default:
      return pfadPower
  }
};

export default pfadPowerReducer;
