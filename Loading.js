import React from 'react'
import loading from '../loading.gif'

export default function Loading() {
  return (
    <div>
      <img src={loading} alt='Loading' className='d-flex justify-content-center container' style={{height: "50px",width: "50px"}}/>
    </div>
  )
}