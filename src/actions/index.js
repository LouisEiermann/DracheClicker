export const tick = () => {
  return [
    {
      type: 'TICK'
    }
  ]
};

export const addHaider = (props) => {
  return [
    {
      type: 'ADD_HAIDER',
      payload: props
    }
  ]
};

export const addLocation = (props) => {
  if (props['haider'] >= props['price']) {
    return [
      {
        type: 'ADD_LOCATION',
        payload: {
          type: props['type'],
          price: props['price']
        }
      }
    ]
  } else {
    return {
      type: 'NO FUNDS'
    }
  }
};

// handling upgrades
export const addItem = (props) => {
  if (props['haider'] >= props['price']) {
    return [
      {
        type: 'ADD_ITEM',
        payload: {
          type: props['type'],
          price: props['price'],
        }
      }
    ]
  } else {
    return {
      type: 'NO FUNDS'
    }
  }
};

export const subtractLocation = (props) => {
  if (props['haiders'] >= props['price']) {
    return [
      {
        type: 'SUBTRACT_LOCATION',
        payload: props['price']
      },
      {
        type: 'ADD_LOCATION',
        payload: 1
      },
      {
        type: 'INCREASE_LOCATION_PRICE',
        payload: props['price'] * 0.5
      },
      {
        type: 'ADD_HAIDER_PRO_SEKUNDE',
        payload: props['haidersprosekunde']
      }
    ]
  } else {
    return {
      type: 'NO FUNDS'
    }
  }
};
