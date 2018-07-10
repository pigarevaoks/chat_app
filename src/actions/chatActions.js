import * as allActions from 'actions/allActions';

export const change = item => ({
    type: allActions.CHANGE_MESSAGE,
    payload: item
})

export const addMessage = (message, date) => ({
    type: allActions.ADD_MESSAGE,
    payload: { message, date }
});

export const deleteMessage = index => ({
    type: allActions.DELETE_MESSAGE,
    payload: { index }
});