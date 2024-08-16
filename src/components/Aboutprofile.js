  import React from 'react'
  import { Link } from 'react-router-dom'

  const Aboutprofile = ({test}) => {

    const handledata = ()=>{
      const data = console.log(550005+50500)
      test(data)
    }

    return (
      <div>
      This is profile
      <button onClick={handledata}>click me </button>
      </div>
    )
  }

  export default Aboutprofile