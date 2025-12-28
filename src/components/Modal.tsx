import { useState, type FormEvent } from 'react'
import { useDispatch } from 'react-redux'
import { addFilm } from '../store/actions'

interface Props {
  isOpen: boolean
  onClose: () => void
}

const Modal = ({ isOpen, onClose }: Props) => {
  const dispatch = useDispatch()
  const [movieName, setMovieName] = useState('')
  const [rating, setRating] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (!movieName.trim()) {
      return
    }

    const newFilm = {
      id: movieName.trim(),
      name: movieName.trim(),
      rating: rating ? parseInt(rating) : 0,
    }

    dispatch(addFilm(newFilm))

    // Reset form and close modal
    setMovieName('')
    setRating('')
    onClose()
  }

  if (!isOpen) return null

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
      }}
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: '#1a1a1a',
          padding: '2rem',
          borderRadius: '8px',
          maxWidth: '500px',
          width: '90%',
          maxHeight: '90vh',
          overflow: 'auto',
          position: 'relative',
          border: '1px solid #333',
        }}
      >
        {onClose && (
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              background: 'transparent',
              border: 'none',
              fontSize: '1.5rem',
              cursor: 'pointer',
              color: '#888',
              padding: '0.25rem 0.5rem',
              lineHeight: 1,
            }}
            aria-label="Close modal"
          >
            ×
          </button>
        )}

        <h2 style={{ marginTop: 0, marginBottom: '1.5rem' }}>Add New Movie</h2>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1rem' }}>
            <label
              htmlFor="movie-name"
              style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontSize: '0.9rem',
                color: '#ccc',
              }}
            >
              Movie Name
            </label>
            <input
              id="movie-name"
              type="text"
              value={movieName}
              onChange={(e) => setMovieName(e.target.value)}
              placeholder="Enter movie name"
              required
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: '4px',
                border: '1px solid #333',
                backgroundColor: '#242424',
                color: '#fff',
                fontSize: '1rem',
                boxSizing: 'border-box',
              }}
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label
              htmlFor="rating"
              style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontSize: '0.9rem',
                color: '#ccc',
              }}
            >
              Rating (0-10)
            </label>
            <input
              id="rating"
              type="number"
              min="0"
              max="10"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              placeholder="Enter rating"
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: '4px',
                border: '1px solid #333',
                backgroundColor: '#242424',
                color: '#fff',
                fontSize: '1rem',
                boxSizing: 'border-box',
              }}
            />
          </div>

          <div
            style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}
          >
            <button
              type="button"
              onClick={onClose}
              style={{
                padding: '0.75rem 1.5rem',
                borderRadius: '4px',
                border: '1px solid #333',
                backgroundColor: 'transparent',
                color: '#ccc',
                cursor: 'pointer',
                fontSize: '1rem',
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              style={{
                padding: '0.75rem 1.5rem',
                borderRadius: '4px',
                border: '1px solid transparent',
                backgroundColor: '#646cff',
                color: '#fff',
                cursor: 'pointer',
                fontSize: '1rem',
              }}
            >
              Add Movie
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Modal
