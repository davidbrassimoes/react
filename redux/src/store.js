import reducer from './reducer';
import { createStore } from 'redux';

const initialState = { messages: [] };
export const store = createStore(reducer, initialState);