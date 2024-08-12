import React from 'react'

const Shimmerui = () => {
  return (
    <div className='card-list'>
     {Array(20).fill("").map((e, index) => <div key={index} className='shimmer-card'></div>
    )}
    </div>
  )
}

export default Shimmerui