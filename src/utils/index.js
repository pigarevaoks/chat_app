import moment from 'moment';

export const insertMessage = (messages, action) => {
    let newArray = messages.slice();
    const lastDate = newArray[newArray.length - 1].date
    if (action.payload.message.date !== lastDate) {
        newArray.splice(newArray.length, 0, generateDateMessage());
    }
    newArray.splice(newArray.length, 0, action.payload.message);
    return newArray;
}

export const reInsertMessage = (messages, action) => {
    return messages
}

export const removeMessage = (messages, action) => {
    let newArray = messages.slice();
    newArray.splice(action.payload.index, 1);
    return newArray;
}

export const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

export const generateDateMessage = () => {
    return {
        id: getRandomInt(1, 100),
        type: 'date',
        date: moment().format('MM-DD-YYYY'),
        time: moment().format('HH:MM'),
    }
}
