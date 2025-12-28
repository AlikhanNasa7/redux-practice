import type { Film } from '../types'

type State = {
  films: Film[]
}

const initialState: State = {
  films: [],
}

export type Action =
  | { type: 'ADD_FILM'; payload: Film }
  | { type: 'REMOVE_FILM'; payload: string | number }
  | { type: 'SET_RATING'; payload: { filmId: string | number; rating: number } }
  | { type: 'SORT_FILMS' }

export const filmsReducer = (
  state: State = initialState,
  action: Action
): State => {
  switch (action.type) {
    case 'ADD_FILM': {
      return {
        ...state,
        films: [...state.films, action.payload],
      }
    }
    case 'REMOVE_FILM': {
      const filmId = action.payload
      const films = state.films.filter((film) => film.id !== filmId)
      return {
        ...state,
        films: [...films],
      }
    }
    case 'SET_RATING': {
      const { filmId, rating } = action.payload
      return {
        ...state,
        films: state.films.map((film) =>
          film.id === filmId ? { ...film, rating } : film
        ),
      }
    }
    case 'SORT_FILMS':
      return {
        ...state,
        films: [...state.films].sort((a, b) => a.rating - b.rating),
      }
    default:
      return state
  }
}
