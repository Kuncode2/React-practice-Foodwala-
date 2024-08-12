import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IMG_CDN_URL } from '../config'
import Shimmerui from './Shimmerui'

const ResMenu = () => {
    const {id} = useParams()  // dynamic rule
    const [menudata,setMenudata]=useState(null)

    useEffect (()=>{
        getResInfo()
    },[])   

     async function getResInfo(){
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId="+id )
       
        const json = await data.json()

        setMenudata(json?.data?.cards[2]?.card?.card?.info)
    }

                        

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