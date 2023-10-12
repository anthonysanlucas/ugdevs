import { useState, useEffect } from 'react'

const SendReviews = () => {
  const [teacherOptions, setTeacherOptions] = useState([])
  const [teacherName, setTeacherName] = useState('')
  const [review, setReview] = useState('')
  const [isActiveSuccess, setIsActiveSuccess] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadTeacherNames = async () => {
      try {
        const response = await fetch('/data/teacherReviews.json')
        const teacherList = await response.json()
        setTeacherOptions(teacherList)
      } catch (err) {
        setError(err)
        console.log(err)
      }
    }
    loadTeacherNames()
  }, [])

  if (error) {
    console.log(error)
    return <p className="text-primary font-medium">Lo sentimos, ha ocurrido un error...</p>
  }

  const sendReview = async event => {
    event.preventDefault()

    const API =
      'https://script.google.com/macros/s/AKfycbx-WwCCee2YR2cGqcy2tv_ZnV6eFOZMWGVycm6lWSBezc-3zqMvVzIHb6MTords8kHw/exec'

    let reviewData = {
      teacher: teacherName,
      review: review,
      date: new Date().toLocaleDateString()
    }

    try {
      const response = await fetch(API, {
        method: 'POST',
        body: JSON.stringify(reviewData)
      })
      const result = await response.text()
      console.log(result)
    } catch (err) {
      console.error(err)
    }

    setTeacherName('')
    setReview('')

    setTimeout(() => {
      setIsActiveSuccess(true)
    }, 150)
  }

  return (
    <form className="relative w-full max-w-3xl">
      <div
        className={`${
          isActiveSuccess ? 'block' : 'hidden'
        } absolute bottom-16 left-4 flex items-center w-full max-w-xs p-4 mb-4 bg-slate-300 rounded-md shadow`}
        role="alert">
        <svg
          className="w-10 h-10 text-green-500"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20">
          <path
            fill="currentColor"
            d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
          />
        </svg>
        <p className="ml-3 text-sm font-normal text-black-dark">
          Reseña envíada, debería estar disponible en pocos minutos.
        </p>
        <button
          type="button"
          className="ml-auto -mx-1.5 -my-1.5 text-3xl text-black-medium rounded-md p-1.5 inline-flex items-center justify-center h-8 w-8 transition-colors duration-100 hover:bg-slate-200 focus:ring-0 focus:outline-none"
          onClick={() => setIsActiveSuccess(false)}
          aria-label="Cerrar">
          <span className="sr-only">Cerrar confirmación de envío de reseña</span>×
        </button>
      </div>
      <div className="relative w-full">
        <label htmlFor="teacherList" className="sr-only">
          Elige un profesor
        </label>
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-6 h-6 text-slate-300"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none">
            <path
              fill="currentColor"
              d="M20.29 8.29 16 12.58l-1.3-1.29-1.41 1.42 2.7 2.7 5.72-5.7zM4 8a3.91 3.91 0 0 0 4 4 3.91 3.91 0 0 0 4-4 3.91 3.91 0 0 0-4-4 3.91 3.91 0 0 0-4 4zm6 0a1.91 1.91 0 0 1-2 2 1.91 1.91 0 0 1-2-2 1.91 1.91 0 0 1 2-2 1.91 1.91 0 0 1 2 2zM4 18a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v1h2v-1a5 5 0 0 0-5-5H7a5 5 0 0 0-5 5v1h2z"></path>
          </svg>
        </div>
        <input
          id="teacherList"
          className="block w-full p-4 pl-10 text-sm text-black-dark bg-transparent border-2 border-slate-300 rounded-md placeholder:text-black-dark transition-colors duration-100 hover:border-primary focus:border-primary focus:ring-0 focus:outline-none sm:text-base"
          type="search"
          list="teacher-list"
          autoComplete="on"
          value={teacherName}
          onChange={e => setTeacherName(e.target.value)}
          placeholder="Elige un profesor..."
        />
      </div>
      <datalist id="teacher-list">
        {teacherOptions.map(teacher => (
          <option key={String(teacher.id) + 'teacher'} value={teacher.name} />
        ))}
      </datalist>
      <textarea
        className="my-10 w-full bg-transparent border border-slate-300 rounded-md px-6 py-4 resize-none transition-colors duration-100 hover:border-primary focus:border-primary focus:ring-0 focus:outline-none"
        name="review"
        value={review}
        onChange={e => setReview(e.target.value)}
        cols="30"
        rows="10"
        maxLength="1000"
        placeholder="Escribe tu reseña, tus compañeros te lo agradecerán."
      />
      <button
        className="inline-block w-full px-10 py-3 bg-primary text-white font-medium rounded-md shadow-sm shadow-primary-dark/40 transition-colors duration-100 hover:bg-primary-dark hover:shadow-md hover:shadow-primary-dark/40"
        type="submit"
        onClick={sendReview}
        disabled={!teacherOptions.some(t => t.name === teacherName) || review === ''}>
        Enviar Reseña
      </button>
    </form>
  )
}

export default SendReviews
