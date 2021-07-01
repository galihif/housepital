import rootReducer from './reducer'
import { createStore } from 'redux'
import { persistStore, persistReducer, Persistor } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistedReducer = persistReducer({ key: 'housepital', storage }, rootReducer)

export const store = createStore(persistedReducer)
export const persistor = persistStore(store)