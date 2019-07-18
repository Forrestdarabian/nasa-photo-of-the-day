import React, { useState, useEffect } from "react";
import axios from "axios"
import PhotoCard from "./components/Grid.js"
import styled from 'styled-components';
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

  const StyledP1 = styled.p`
  color: red;
`
const StyledP2 = styled.p`
color: green;
`
const StyledP3 = styled.p`
color: blue;
`
const StyledP4 = styled.p`
color: orange;
`
const StyledP5 = styled.p`
color: purple;
`
const StyledP6 = styled.p`
color: yellow;
`
const StyledP7 = styled.p`
color: brown;
`
const StyledP8 = styled.p`
color: cyan;
`
const StyledP9 = styled.p`
color: crimson;
`
const StyledP10 = styled.p`
color: olive;
`
  return (
    <div className="App">
      <p>
        Hello! Here, you can find a beautiful image from the NASA Website!
      </p>
      <PhotoCard title={data.title}
      url={data.url}
      explanation={data.url}/>
      <h3>Some Awesome Moon Facts!</h3>
      <StyledP1>The Moon is the Earth’s only natural satellite. A natural satellite is a space body that orbits a planet, a planet like object or an asteroid.</StyledP1>

      <StyledP2>The average distance from the Moon to the Earth is 384403 kilometres (238857 miles).</StyledP2>

      <StyledP3>The Moon orbits the Earth every 27.3 days.</StyledP3>

      <StyledP4>Mons Huygens is the tallest mountain on the Moon, it is 4700 metres tall, just over half the height of Mt Everest (8848m).</StyledP4>

      <StyledP5>The Moon rotates on its axis in around the same length of time it takes to orbit the Earth. This means that from Earth we only ever see around 60% of its surface (50% at any one time).</StyledP5>

      <StyledP6>The side that we can see from Earth is called the near side while the other side is called the far side (it is sometimes called the dark side despite the fact that it illuminated by the Sun just as much as the near side).</StyledP6>

      <StyledP7>The effect of gravity is only about one fifth (17%) as strong on the surface of the Moon compared to the strength of gravity on the surface of the Earth.</StyledP7>

      <StyledP8>The Soviet Union’s Luna program featured the first successful landing of an unmanned spacecraft on the surface of the Moon in 1966.</StyledP8>

      <StyledP9>The USA’s NASA Apollo 11 mission in 1969 was the first manned Moon landing.</StyledP9>

      <StyledP10>The first person to set foot on the Moon was Neil Armstrong.</StyledP10>
<p>All facts taken from http://www.sciencekids.co.nz/sciencefacts/space/moon.html</p>  

    </div>
  );
}

export default App;
