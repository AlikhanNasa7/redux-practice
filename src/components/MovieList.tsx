import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Modal from './Modal'
import { removeFilm, sortFilms } from '../store/actions'
import type { RootState } from '../store'
import type { Film } from '../types'

const MovieList = () => {
  const films = useSelector((state: RootState) => state.films)
  const [showModal, setShowModal] = useState(false)
  const dispatch = useDispatch()

  function showAddFilmModal() {
    setShowModal(true)
  }

  function removeFilmFromList(filmId: string | number) {
    dispatch(removeFilm(filmId))
  }

  function sortByRating() {
    dispatch(sortFilms())
  }
  return (
    <>
      <button onClick={showAddFilmModal}>Add movie</button>
      <button onClick={sortByRating}>Sort by rating</button>
      <div>
        {films.map((film: Film) => {
          return (
            <li key={film.id}>
              {film.name}: {film.rating}
              <button onClick={() => removeFilmFromList(film.id)}>-</button>
            </li>
          )
        })}
      </div>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  )
}

export default MovieList
