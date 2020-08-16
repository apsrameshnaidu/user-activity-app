import {createStore, applyMiddleware, compose} from 'redux';
import { logger } from 'redux-logger';
import {MakeStore, createWrapper, Context} from 'next-redux-wrapper';
import appReducer from "./reducer";

export interface State {
    iState: string;
}

let composeEnhancers: any;
if (typeof window !== "undefined") {
    composeEnhancers = window?.['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;
} else {
    composeEnhancers = compose;
}

const middleware = applyMiddleware(logger);
const store = createStore(appReducer , composeEnhancers(middleware));

const makeStore: MakeStore = (context: Context) => store;
// export an assembled wrapper
export const wrapper = createWrapper<State>(makeStore, {debug: true});
export default store;
