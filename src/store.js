import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

export default function configureStore(
    initialState={
        message: null,
        order: 0,
        // image: null,
        // realQuote: null,
        // fakeQuote: null
    }
) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    );
}