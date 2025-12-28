import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from 'react-redux'
import { createStore } from 'redux'
import { filmsReducer } from './reducer'

export const store = createStore(filmsReducer)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
