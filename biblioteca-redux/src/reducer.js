export function reducer(state, action) {
    //definir a action que lê o modelo de dados
    if (action.type === 'READ_BOOKS') {
        return {
            books: [...action.payload],
        }
    }
    if (action.type === 'DELETE_MESSAGE') {
        return {
            books: state.books.filter(b => b.id !== action.id)
        }
    }
    return state;
}