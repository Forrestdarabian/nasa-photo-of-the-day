import React, { useState, useEffect } from "react";
import axios from "axios"
import PhotoCard from "./components/Grid.js"
import "./App.css";

function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    console.log("first render")
  axios.get('https://api.nasa.gov/planetary/apod?api_key=3e36NVbhT9wtjMkpVR6BgnN1XJbYgvoGi4ffuFCf')
  .then(res => {
    console.log(res.data);
    setData(res.data);
  });
  }, [])

 
  return (
    <div className="App">
      <p>
        Hello! Here, you can find a beautiful image from the NASA Website!
      </p>
      <PhotoCard title={data.title}
      url={data.url}
      explanation={data.url}/>
    </div>
  );
}

export default App;
