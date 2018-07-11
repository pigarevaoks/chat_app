import initialState from './initialState';
import { CHANGE_MESSAGE, ADD_MESSAGE, DELETE_MESSAGE, RESEND_MESSAGE } from 'actions/allActions';
import { insertMessage, removeMessage, reInsertMessage } from 'utils'

export default function routeEditor(state = initialState, action) {
    switch (action.type) {
        case CHANGE_MESSAGE: 
            return { ...state, inputValue: action.payload };

        case ADD_MESSAGE:
            return { ...state, 
                chat: {
                    ...state.chat,
                    messages: insertMessage(state.chat.messages, action)
                }
            }

        case DELETE_MESSAGE:
            return { ...state, 
                chat: {
                    ...state.chat,
                    messages: removeMessage(state.chat.messages, action)
                }
            }

        case RESEND_MESSAGE:
            return {
                ...state,
                chat: {
                    ...state.chat,
                    messages: reInsertMessage(state.chat.messages, action)
                }
            }

        default:
            return state;
    }
}

