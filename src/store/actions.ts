import type { Film } from '../types'
import type { Action } from './reducer'

export const addFilm = (film: Film): Action => ({
  type: 'ADD_FILM',
  payload: film,
})

export const removeFilm = (filmId: string | number): Action => ({
  type: 'REMOVE_FILM',
  payload: filmId,
})

export const setRating = (filmId: string | number, rating: number): Action => ({
  type: 'SET_RATING',
  payload: { filmId, rating },
})

export const sortFilms = (): Action => ({
  type: 'SORT_FILMS',
})
