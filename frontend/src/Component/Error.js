import React from 'react'
import Navbar from './Navbar'

export default function Error() {
  return (
    <>
      <div className='errorPage'>
      <div className="navv">
        {<Navbar/>}
      </div>
      <div className="error">
        Oops! An error occured.... Please login Again
      </div>
      </div>
    </>
  )
}
