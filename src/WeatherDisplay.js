import { render } from "@testing-library/react"
import React from "react"
import { useState } from "react"
import Item from "./Item"
// current
// forecast 
// location 

function WeatherDisplay({ defaultDisplay }) {
console.log(defaultDisplay)
    return ( 
        <div>
            <h3>Display</h3>
                {defaultDisplay.map((weather, index) => {
                    return (
                    <ul key={index} >
                        <li key={index} >{weather.name}</li>
                        <li></li>
                    </ul>
                        )
                })}
        </div>
    )
}


export default WeatherDisplay; 