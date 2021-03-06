export const tick = () => {
    return [
        {
            type: 'TICK'
        }
    ]
};

export const countdown = () => {
    return [
        {
            type: 'COUNTDOWN'
        }
    ]
};

export const triggerEvent = (props) => {
    if (props['timer'] === 0) {
        return [
            {
                type: 'PLAY_EVENT'
            }
        ]
    } else {
        return {
            type: 'CANT_RESET'
        }
    }
};

export const resetProgress = () => {
    return [
        {
            type: 'RESET_PROGRESS'
        }
    ]
};

export const switchAudio = () => {
    return [
        {
            type: 'SWITCH_AUDIO'
        }
    ]
};

export const switchMusic = () => {
    return [
        {
            type: 'SWITCH_MUSIC'
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
                    power: props['power']
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
