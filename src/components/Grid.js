import React from "react"; 
import styled from 'styled-components';


const StyledH1 = styled.h1`
color: teal;
border: 5px solid red;
background-color: silver;
`
const Styledinfo = styled.p`
color: white;
`
function PhotoCard(props){
  console.log(props);
  return(
<div>
  <StyledH1>{props.title}</StyledH1>
  <Styledinfo><img src={props.url} />
  <p>
  {props.explanation}
  </p>
  </Styledinfo>
</div>
  );
}

export default PhotoCard