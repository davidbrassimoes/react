export default function reducer(state, action) {
    // atualiza o state da store consoante a action recebida

    if (action.type === 'ADD_MESSAGE') {
        return {
            messages: [...state.messages, action.message]
            //messages: state.messages.concat(action.message)
        }
    }

    if (action.type === 'DELETE_MESSAGE') {
        return {
            messages: state.messages.filter((msg, i) => i !== action.index)
        }
    }

    return state;
}