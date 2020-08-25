import { combineReducers } from 'redux'
import { homeReducer, homeSaga } from './home'

const rootReducer = combineReducers({
  homeReducer
})

const rootSaga = [
	homeSaga()
]

export {
  rootReducer,
  rootSaga
}
