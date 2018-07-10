import initialState from './initialState';
import { CHANGE_MESSAGE, ADD_MESSAGE, DELETE_MESSAGE } from 'actions/allActions';
import { insertItem, removeItem } from 'utils'

export default function routeEditor(state = initialState, action) {
  switch (action.type) {
    case CHANGE_MESSAGE: 
      return { ...state, inputValue: action.payload };

    case ADD_MESSAGE:
        insertItem(state.chat.messages, action)
        return { 
            ...state, 
            chat: {
                ...state.chat,
                messages: insertItem(state.chat.messages, action)
            }
        }

    case DELETE_MESSAGE:
      return { ...state, messages: removeItem(state.messages, action) };

    default:
      return state;
  }
}

