import React from "react"
//import useState from "react"
import { useEffect, useState } from "react";


function Item() {

    const [ test, setTest ] = useState([])

    useEffect(() => {
        fetch("https://yahoo-weather5.p.rapidapi.com/weather?location=sunnyvale&format=json&u=f", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "yahoo-weather5.p.rapidapi.com",
                "x-rapidapi-key": "de51889a1fmshe095099b1a97993p13134fjsnc818ad7373cb"
            }
        })
        .then((response) => response.json())
        .then((data) => {
            setTest(data)
        })
        .catch(err => {
            console.error(err);
        });
    }, [])

    let displayTest = Object.values(test)

// console.log(displayTest)

    return(
        <div>
            {displayTest.map((weather, index) => {
                return (
                    <ul key={index}>
                        <li>{}</li>

                    </ul>
                )
            })}
        </div>
    )
}

export default Item; 

