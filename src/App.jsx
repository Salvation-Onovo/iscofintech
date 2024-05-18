import { useEffect, useState } from 'react'
import './App.css'
import Index from './routes/Index'

export const App = () => {

  const [loader, setLoader] = useState(true)

  useEffect(() => {
    setTimeout(() => { setLoader(false) }, 3000)
  }, [])

  return (
    <>
      {
        loader ? (
          <div className='flex absolute w-full h-screen justify-center items-center bg-white'>
            <div className="loader"></div>
          </div>
        ) : <Index />
      }
    </>

  )
}

export default App
