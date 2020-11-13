const initialState = {
  haider: 0,
  haiderProSekunde: 0,
  pfadLevel: 0,
  herzLevel: 0,
  reweLevel: 0,
  burgLevel: 0,
  schanzeLevel: 0,
  grabLevel: 0,
  pfadPrice: 10,
  herzPrice: 10,
  rewePrice: 10,
  burgPrice: 10,
  schanzePrice: 10,
  grabPrice: 10
}

const reducer = (state = initialState, action) => {
  const newState = {...state};
  switch(action.type){
    case 'TICK':
      let haider = state.haider + state.pfadLevel + state.herzLevel * 5 + state.reweLevel * 25 + state.burgLevel * 125 + state.schanzeLevel * 625 + state.grabLevel * 3125;
      newState['haider'] = haider;
      newState['haiderProSekunde'] = state.pfadLevel + state.herzLevel * 5 + state.reweLevel * 25 + state.burgLevel * 125 + state.schanzeLevel * 625 + state.grabLevel * 3125;
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
    default:
      return newState;
  }
}

export default reducer;