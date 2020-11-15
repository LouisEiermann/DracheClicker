const initialState = {
  haider: 0,
  haiderProSekunde: 0,

  pfadLevel: 0,
  herzLevel: 0,
  reweLevel: 0,
  burgLevel: 0,
  schanzeLevel: 0,
  grabLevel: 0,

  pfadPrice: 50,
  herzPrice: 500,
  rewePrice: 5000,
  burgPrice: 50000,
  schanzePrice: 500000,
  grabPrice: 5000000,

  pfadPower: 1,
  herzPower: 1,
  rewePower: 1,
  burgPower: 1,
  schanzePower: 1,
  grabPower: 1
}

const reducer = (state = initialState, action) => {
  const newState = {...state};
  switch(action.type){
    case 'TICK':
      let haider = state.haider + (state.pfadLevel * state.pfadPower /60) + (state.herzLevel * state.herzPower * 5 /60) + (state.reweLevel * state.rewePower * 25 /60) + (state.burgLevel * state.burgPower * 125 /60) + (state.schanzeLevel * state.schanzePower * 625 /60) + (state.grabLevel * state.grabPower * 3125 /60);
      newState['haider'] = haider;
      newState['haiderProSekunde'] = (state.pfadLevel * state.pfadPower) + (state.herzLevel * state.herzPower * 5) + (state.reweLevel * state.rewePower * 25) + (state.burgLevel * state.burgPower * 125) + (state.schanzeLevel * state.schanzePower * 625) + (state.grabLevel * state.grabPower * 3125);
      return newState
    case 'ADD_HAIDER':
      newState['haider'] += 1;
      return newState;
    case 'ADD_LOCATION':
      newState[action.payload.type + "Level"] += 1;
      newState[action.payload.type + "Price"] *= 1.5;
      newState['haider'] -= action.payload.price;
      return newState;
    case 'SUBTRACT_LOCATION':
      newState[action.payload.type] -= 1;
      return newState;
    case 'ADD_ITEM':
      newState[action.payload.type + "Power"] += 1;
      newState['haider'] -= action.payload.price;
      return newState;
    default:
      return newState;
  }
}

export default reducer;