import React, { useEffect, useState } from "react"; 
import axios from "axios";
import "./Card.js"

export default function NasaGrid({ limit })
    const [nasa, setNasa] = useState([])

    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=3e36NVbhT9wtjMkpVR6BgnN1XJbYgvoGi4ffuFCf')
            .then(response => {
                const nasaInfo = response.data
                console.log('nasainfo', nasaInfo)
                setNasa(nasaInfo)
            })
    }, [])

    

    return (
    <div className="App">
        <Header  limit={3} columns={3} />
         {/*<h1>Hello, here you can find NASA's Photo of the Day</h1> <Card>
           <img src=‘nasa-img’/>
           <a href=“nasa-url”>{nasa-url}</a>
           <p>{nasa-paragraph}</p>
         </CatCard>
       </catGrid> /> */}
        <PhotoDisplayContainer pics={["1", "2", "3"]}/> 
      </div>
    )