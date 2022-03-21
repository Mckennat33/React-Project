import { render } from "@testing-library/react"
import React from "react"
import { useState } from "react"
import Item from "./Item"
// current
// forecast 
// location 



function WeatherDisplay({ defaultDisplay, current }) {
    // console.log(defaultDisplay)
    return ( 
        <div>
            <h3>Display</h3>
                {/* {defaultDisplay.map((weather, index) => (
                    <ul key={index} >
                            <li>{defaultDisplay[0].city}</li>
                            <li>{defaultDisplay[1].astronomy.sunrise}</li>
                            <li>{console.log(weather.city)}</li>
                        </ul>
                ))}  */}
                {/* <p>{console.log(defaultDisplay[1].astronomy.sunrise)}</p> */}
                <Item />
        </div>
    )
}


export default WeatherDisplay; 

