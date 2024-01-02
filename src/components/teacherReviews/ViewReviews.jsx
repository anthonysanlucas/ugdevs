import { useState, useEffect } from 'react'
import SendReviewsModal from '@/components/teacherReviews/SendReviewModal'

const ViewReviews = () => {
  const [reviews, setReviews] = useState([])
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const loadReviews = async () => {
      try {
        const response = await fetch('/data/teacherReviews.json')
        const data = await response.json()
        setReviews(data)
      } catch (err) {
        setError(err)
        console.log(err)
      }
    }
    loadReviews()
  }, [])

  const openReviewModal = () => setIsOpen(true)

  if (error) {
    console.log(error)
    return <p className="text-primary font-medium">Lo sentimos, ha ocurrido un error...</p>
  }

  const reviewsSearched = reviews.filter(review =>
    review.name?.toLowerCase().includes(search.toLocaleLowerCase())
  )

  const conditionalRender = () => {
    if (search === '') {
      return (
        <div className="grid place-content-center place-items-center w-full h-full">
          <svg
            className="w-full"
            width="321"
            height="281"
            viewBox="0 0 321 281"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M266 122H11C9.15409 121.998 7.38352 121.268 6.07291 119.968C4.76229 118.668 4.01747 116.903 4.00024 115.058L0 7C0.00208302 5.14412 0.740248 3.36485 2.05255 2.05255C3.36485 0.740248 5.14412 0.00208302 7 0H262C263.846 0.00199308 265.617 0.732251 266.927 2.03214C268.238 3.33202 268.983 5.09654 269 6.94238L273 115C272.998 116.856 272.26 118.635 270.947 119.947C269.635 121.26 267.856 121.998 266 122ZM2.00024 6.94727L6 115C6.00153 116.326 6.52881 117.596 7.46616 118.534C8.40351 119.471 9.67439 119.998 11 120H266C267.316 119.998 268.579 119.478 269.515 118.552C270.451 117.626 270.984 116.369 271 115.053L267 7C266.998 5.67438 266.471 4.40351 265.534 3.46616C264.596 2.5288 263.326 2.00152 262 2H7C5.68351 2.00152 4.4206 2.5216 3.4848 3.44757C2.54901 4.37354 2.01565 5.63087 2.00024 6.94727Z"
              fill="#00509C"
            />
            <path
              d="M314 281H59C57.1541 280.998 55.3835 280.268 54.0729 278.968C52.7623 277.668 52.0175 275.903 52.0002 274.058L48 166C48.0021 164.144 48.7402 162.365 50.0526 161.053C51.3649 159.74 53.1441 159.002 55 159H310C311.846 159.002 313.617 159.732 314.927 161.032C316.238 162.332 316.983 164.097 317 165.942L321 274C320.998 275.856 320.26 277.635 318.947 278.947C317.635 280.26 315.856 280.998 314 281ZM50.0002 165.947L54 274C54.0015 275.326 54.5288 276.596 55.4662 277.534C56.4035 278.471 57.6744 278.998 59 279H314C315.316 278.998 316.579 278.478 317.515 277.552C318.451 276.626 318.984 275.369 319 274.053L315 166C314.998 164.674 314.471 163.404 313.534 162.466C312.596 161.529 311.326 161.002 310 161H55C53.6835 161.002 52.4206 161.522 51.4848 162.448C50.549 163.374 50.0157 164.631 50.0002 165.947Z"
              fill="#00509C"
            />
            <path
              d="M119.5 182.5C117.776 182.5 116.123 183.185 114.904 184.404C113.685 185.623 113 187.276 113 189C113 190.724 113.685 192.377 114.904 193.596C116.123 194.815 117.776 195.5 119.5 195.5H249.5C251.224 195.5 252.877 194.815 254.096 193.596C255.315 192.377 256 190.724 256 189C256 187.276 255.315 185.623 254.096 184.404C252.877 183.185 251.224 182.5 249.5 182.5H119.5Z"
              fill="#0084FF"
            />
            <path
              d="M119.5 213.5C117.776 213.5 116.123 214.185 114.904 215.404C113.685 216.623 113 218.276 113 220C113 221.724 113.685 223.377 114.904 224.596C116.123 225.815 117.776 226.5 119.5 226.5H249.5C251.224 226.5 252.877 225.815 254.096 224.596C255.315 223.377 256 221.724 256 220C256 218.276 255.315 216.623 254.096 215.404C252.877 214.185 251.224 213.5 249.5 213.5H119.5Z"
              fill="#0084FF"
            />
            <path
              d="M119.5 244.5C117.776 244.5 116.123 245.185 114.904 246.404C113.685 247.623 113 249.276 113 251C113 252.724 113.685 254.377 114.904 255.596C116.123 256.815 117.776 257.5 119.5 257.5H249.5C251.224 257.5 252.877 256.815 254.096 255.596C255.315 254.377 256 252.724 256 251C256 249.276 255.315 247.623 254.096 246.404C252.877 245.185 251.224 244.5 249.5 244.5H119.5Z"
              fill="#0084FF"
            />
            <path
              d="M71.5 23.5C69.7761 23.5 68.1228 24.1848 66.9038 25.4038C65.6848 26.6228 65 28.2761 65 30C65 31.7239 65.6848 33.3772 66.9038 34.5962C68.1228 35.8152 69.7761 36.5 71.5 36.5H201.5C203.224 36.5 204.877 35.8152 206.096 34.5962C207.315 33.3772 208 31.7239 208 30C208 28.2761 207.315 26.6228 206.096 25.4038C204.877 24.1848 203.224 23.5 201.5 23.5H71.5Z"
              fill="#0084FF"
            />
            <path
              d="M71.5 54.5C69.7761 54.5 68.1228 55.1848 66.9038 56.4038C65.6848 57.6228 65 59.2761 65 61C65 62.7239 65.6848 64.3772 66.9038 65.5962C68.1228 66.8152 69.7761 67.5 71.5 67.5H201.5C203.224 67.5 204.877 66.8152 206.096 65.5962C207.315 64.3772 208 62.7239 208 61C208 59.2761 207.315 57.6228 206.096 56.4038C204.877 55.1848 203.224 54.5 201.5 54.5H71.5Z"
              fill="#0084FF"
            />
            <path
              d="M71.5 85.5C69.7761 85.5 68.1228 86.1848 66.9038 87.4038C65.6848 88.6228 65 90.2761 65 92C65 93.7239 65.6848 95.3772 66.9038 96.5962C68.1228 97.8152 69.7761 98.5 71.5 98.5H201.5C203.224 98.5 204.877 97.8152 206.096 96.5962C207.315 95.3772 208 93.7239 208 92C208 90.2761 207.315 88.6228 206.096 87.4038C204.877 86.1848 203.224 85.5 201.5 85.5H71.5Z"
              fill="#0084FF"
            />
          </svg>
          <p className="text-center mt-8 text-black-medium">Las reseñas aparecerán aquí.</p>
        </div>
      )
    }

    if (reviewsSearched.length === 0) {
      return (
        <div className="grid place-content-center place-items-center w-full h-full">
          <svg
            className="w-full"
            width="270"
            height="144"
            viewBox="0 0 270 144"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M187.652 0H82.3483C74.4388 0 68.0269 6.41192 68.0269 14.3214V14.3214C68.0269 22.2309 74.4388 28.6429 82.3483 28.6429H187.652C195.561 28.6429 201.973 22.2309 201.973 14.3214C201.973 6.41192 195.561 0 187.652 0Z"
              fill="#CBD5E1"
            />
            <path
              d="M14.3214 57.2858H255.679C263.588 57.2858 270 63.6977 270 71.6072C270 79.5167 263.588 85.9286 255.679 85.9286H14.3214C6.41191 85.9286 0 79.5167 0 71.6072C0 63.6977 6.41191 57.2858 14.3214 57.2858Z"
              fill="#CBD5E1"
            />
            <path
              d="M14.3214 114.572H255.679C263.588 114.572 270 120.983 270 128.893C270 136.802 263.588 143.214 255.679 143.214H14.3214C6.41191 143.214 0 136.802 0 128.893C0 120.983 6.41191 114.572 14.3214 114.572Z"
              fill="#CBD5E1"
            />
            <path
              d="M181.439 94.5208C183.346 71.4858 166.218 51.2667 143.183 49.3603C120.148 47.4538 99.9284 64.582 98.022 87.617C96.1155 110.652 113.244 130.871 136.279 132.778C159.314 134.684 179.533 117.556 181.439 94.5208Z"
              fill="#0084FF"
            />
            <path
              d="M150.724 73.631L139.731 84.6245L128.737 73.631C126.957 71.8514 124.072 71.8514 122.293 73.631C120.513 75.4106 120.513 78.2959 122.293 80.0755L133.286 91.069L122.293 102.063C120.515 103.844 120.517 106.729 122.299 108.507C124.078 110.283 126.958 110.283 128.737 108.507L139.731 97.5135L150.724 108.507C152.505 110.285 155.391 110.282 157.169 108.501C158.944 106.722 158.944 103.841 157.169 102.063L146.175 91.069L157.169 80.0755C158.948 78.2959 158.948 75.4106 157.169 73.631C155.389 71.8514 152.504 71.8514 150.724 73.631Z"
              fill="white"
            />
          </svg>
          <p className="text-center mt-8 text-black-medium [text-wrap:balance]">
            No existe este profesor en el listado, por ahora solo está disponible para la facultad
            de Ciencias Matemáticas y Físicas.
          </p>
        </div>
      )
    } else {
      return reviewsSearched.map(professor => (
        <article className="my-8" key={professor.id}>
          <h2 className="text-xl font-medium text-black-dark mb-4">{professor.name}</h2>
          <span className="text-primary text-sm">📝 Reseñas:</span>
          {professor.reviews.length === 0 ? (
            <p className="mt-2 text-black-medium">No hay ningún comentario</p>
          ) : (
            professor.reviews.map(review => (
              <div
                key={crypto.randomUUID()}
                className="my-8 max-w-2xl border border-slate-200 rounded-md px-6 py-4 transition-colors duration-100 hover:bg-primary/20">
                <p className="mb-2 text-black-medium">{review.text}</p>
                <small className="text-black-light text-sm font-medium">{review.date}</small>
              </div>
            ))
          )}
        </article>
      ))
    }
  }

  return (
    <section className="w-full">
      <header className="flex justify-between items-center gap-x-2 mb-10">
        <SendReviewsModal isOpen={isOpen} setIsOpen={setIsOpen} />

        <h1 className="text-left font-extrabold text-black-dark text-xl sm:text-3xl">
          Reseñas de Profesores
        </h1>
        <button
          onClick={openReviewModal}
          className="flex items-center gap-x-4 w-max whitespace-nowrap px-3 py-3 bg-primary text-white font-medium rounded-md text-xs shadow-sm shadow-primary-dark/40 transition-colors duration-100 sm:text-base sm:px-6 hover:bg-primary-dark hover:shadow-md hover:shadow-primary-dark/40">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11 16.5C11 16.7761 11.2239 17 11.5 17H12.5C12.7761 17 13 16.7761 13 16.5V13.5C13 13.2239 13.2239 13 13.5 13H16.5C16.7761 13 17 12.7761 17 12.5V11.5C17 11.2239 16.7761 11 16.5 11H13.5C13.2239 11 13 10.7761 13 10.5V7.5C13 7.22386 12.7761 7 12.5 7H11.5C11.2239 7 11 7.22386 11 7.5V10.5C11 10.7761 10.7761 11 10.5 11H7.5C7.22386 11 7 11.2239 7 11.5V12.5C7 12.7761 7.22386 13 7.5 13H10.5C10.7761 13 11 13.2239 11 13.5V16.5ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z"
              fill="white"
            />
          </svg>
          Crear Reseña
        </button>
      </header>

      <search role="search">
        <label htmlFor="review-search" className="sr-only">
          Buscar reseñas
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-primary"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            className="block w-full p-4 pl-10 text-sm text-black-dark bg-transparent border-2 border-slate-300 rounded-md placeholder:text-black-dark transition-colors duration-100 hover:border-primary focus:border-primary focus:ring-0 focus:outline-none sm:text-base"
            id="review-search"
            type="search"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Escribe el nombre de tu profesor..."
            required
          />
        </div>
      </search>
      <div className="w-full h-[500px] mt-10 px-4 border border-slate-300 rounded-md shadow-md overflow-y-auto">
        {conditionalRender()}
      </div>
    </section>
  )
}

export default ViewReviews
