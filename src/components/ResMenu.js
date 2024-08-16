import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IMG_CDN_URL } from '../config'
import Shimmerui from './Shimmerui'
import useResMenu from '../utils/useResMenu'

const ResMenu = () => {          
    const {id} = useParams()  // dynamic rule
    const menudata = useResMenu(id)  

  return (!menudata) ? <Shimmerui/> :(
    <div>
        <h1>{"Productid:"+id}</h1>
        <h2>{menudata.name}</h2>
        <img src={IMG_CDN_URL + menudata.cloudinaryImageId}/>
        <h3>{menudata.area}</h3>
        <h3>{menudata.locality}</h3>
        <h3>{menudata.costForTwo}</h3>
        <h3>{menudata.avgRatingString} stars</h3>
    </div>
  )

}

export default ResMenu