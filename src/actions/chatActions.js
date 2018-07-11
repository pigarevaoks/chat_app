import * as allActions from 'actions/allActions';

export const change = item => ({
    type: allActions.CHANGE_MESSAGE,
    payload: item
})

export const addMessage = (message) => ({
    type: allActions.ADD_MESSAGE,
    payload: { message }
});

export const deleteMessage = index => ({
    type: allActions.DELETE_MESSAGE,
    payload: { index }
});

export const resendMessage = index => ({
    type: allActions.RESEND_MESSAGE,
    payload: { index }
});