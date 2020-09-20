export const addHaider = (props) => {
  return [
    {
    type: 'ADD_HAIDER',
    payload: props
    }
  ]
};

// props[0] = preis +++ props[1] = haiderkonto

export const addPfad = (props) => {
  if (props[1] >= props[0]) {
    return [
      {
        type: 'SUBTRACT_HAIDER',
        payload: props[0]
      },
      {
        type: 'ADD_PFAD',
        payload: 1
      },
      {
        type: 'INCREASE_PFAD_PRICE',
        payload: props[0] * 0.5
      },
      {
        type: 'ADD_HAIDER_PRO_SEKUNDE',
        payload: 1
      }
    ]
  } else {
    return {
      type: 'NO FUNDS'
    }
  }
};

export const addHerz = (props) => {
  if (props[1] >= props[0]) {
    return [
      {
        type: 'SUBTRACT_HAIDER',
        payload: props[0]
      },
      {
        type: 'ADD_HERZ',
        payload: 1
      },
      {
        type: 'INCREASE_HERZ_PRICE',
        payload: props[0] * 0.5
      },
      {
        type: 'ADD_HAIDER_PRO_SEKUNDE',
        payload: 5
      }
    ]
  } else {
    return {
      type: 'NO FUNDS'
    }
  }
};

export const addRewe = (props) => {
  if (props[1] >= props[0]) {
    return [
      {
        type: 'SUBTRACT_HAIDER',
        payload: props[0]
      },
      {
        type: 'ADD_REWE',
        payload: 1
      },
      {
        type: 'INCREASE_REWE_PRICE',
        payload: props[0] * 0.5
      },
      {
        type: 'ADD_HAIDER_PRO_SEKUNDE',
        payload: 25
      }
    ]
  } else {
    return {
      type: 'NO FUNDS'
    }
  }
};

export const addBurg = (props) => {
  if (props[1] >= props[0]) {
    return [
      {
        type: 'SUBTRACT_HAIDER',
        payload: props[0]
      },
      {
        type: 'ADD_RUINE',
        payload: 1
      },
      {
        type: 'INCREASE_BURG_PRICE',
        payload: props[0] * 0.5
      },
      {
        type: 'ADD_HAIDER_PRO_SEKUNDE',
        payload: 125
      }
    ]
  } else {
    return {
      type: 'NO FUNDS'
    }
  }
};

export const addSchanze = (props) => {
  if (props[1] >= props[0]) {
    return [
      {
        type: 'SUBTRACT_HAIDER',
        payload: props[0]
      },
      {
        type: 'ADD_SCHANZE',
        payload: 1
      },
      {
        type: 'INCREASE_SCHANZE_PRICE',
        payload: props[0] * 0.5
      },
      {
        type: 'ADD_HAIDER_PRO_SEKUNDE',
        payload: 625
      }
    ]
  } else {
    return {
      type: 'NO FUNDS'
    }
  }
};

export const addGrab = (props) => {
  if (props[1] >= props[0]) {
    return [
      {
        type: 'SUBTRACT_HAIDER',
        payload: props[0]
      },
      {
        type: 'ADD_GRAB',
        payload: 1
      },
      {
        type: 'INCREASE_GRAB_PRICE',
        payload: props[0] * 0.5
      },
      {
        type: 'ADD_HAIDER_PRO_SEKUNDE',
        payload: 3125
      }
    ]
  } else {
    return {
      type: 'NO FUNDS'
    }
  }
};

// handling upgrades

export const addPfadPower = (props) => {
  if (props[1] >= props[0]) {
    return [
      {
        type: 'SUBTRACT_HAIDER',
        payload: props[0]
      },
      {
        type: 'ADD_PFADPOWER',
        payload: 1
      }
    ]
  } else {
    return {
      type: 'NO FUNDS'
    }
  }
};
