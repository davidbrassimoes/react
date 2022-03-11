import { createStore } from 'redux'
import { reducer } from './reducer'

let initialState = {
    books: [],
}

export const store = createStore(reducer, initialState)