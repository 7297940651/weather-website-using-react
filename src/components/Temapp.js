import React, { useEffect, useState } from 'react'
import './css/style.css'

const Temapp=()=>{
    const [city,setcity]=useState(null)
    const[search,setsearch]=useState("Mumbai")

    useEffect(()=>{
        const fetchApi=async()=>{
            const url=`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=be3c5aa2fc91c81d28ba075e5fab24cf`
            const response= await fetch(url)
            const resJson= await response.json()

            setcity(resJson.main)
        };
        fetchApi();
    },[search])
    return(
        <>
        <div className="box">
        <div className="inputData">
        <input
         type="search" 
         value={search}
         className="inputFeild" 
             onChange={(event)=>{setsearch(event.target.value)}}
         />
          </div>

          {
              !city ?(
                  <p className="errorMsg">No Data Found</p>
              ): (
                  <>
                  <div className="info">
          <h2 className="location">
          <i className="fas fa-street-view" style={{color:"white"}}></i>
          {search}

          </h2>
          <h1 className="temp">
              {city.temp}°C
          </h1>
          <h3 className="tempmin_max">Min:{city.temp_min}°C | Max:{city.temp_max}°C</h3>


          </div>
          <div className=" wave "> </div>
           <div className="wave-two "> </div>
          <div className="wave-three "> </div> 

                  </>

              )}

          

          
          </div>
        </>
    )
}
export default Temapp