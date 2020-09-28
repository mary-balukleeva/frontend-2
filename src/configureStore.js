import { createStore, applyMiddleware } from 'redux'
import thunk  from 'redux-thunk';
import api from './services';
import rootReducer from './redux'

export default function configureStore(preloadedState) {
  return createStore(
      rootReducer,
      // preloadedState,
      applyMiddleware(thunk.withExtraArgument(api))
  )
}
