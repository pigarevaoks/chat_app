export const insertItem = (messages, action) => {
    const date = action.payload.date;
    if (messages[date] === undefined) {
        return { ...messages, [date]: [action.payload.message]}
    } else {
        return { ...messages, [date]: [...messages[date], action.payload.message] }
    }
}

export const updateItemInArray = (array, action) => {
    return array.map((item, index) => {
        if (index !== action.payload.key) {
            return item;
        }
        return {
            ...item,
            formatted_address: action.payload.formatted_address,
            location: {
                lat: action.payload.lat,
                lng: action.payload.lng
            }
        };
    });
}

export const removeItem = (array, action) => {
    let newArray = array.slice();
    newArray.splice(action.payload.index, 1);
    return newArray;
}

export const updatePositionInAray = (array, action) => {
    let newArray = array.slice();
    newArray.splice(action.payload.to, 0, newArray.splice(action.payload.from, 1)[0]);
    return newArray;
}
