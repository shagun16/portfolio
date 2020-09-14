import React from "react";
import { Link } from "react-router-dom";
import Slide from "react-reveal/Slide";
import styled from "styled-components";

const StyledH1=styled.h1`
text-align:center;
font-family:cambria;
font-style:bold;
font-size:1.5rem;
background-color:#808080;
`;
 
const StyledSocial=styled.p`
background-color:#000000;
`;

const StayTuned = () => {
      return(
      <div>
          <Slide left>
          <StyledH1><h1>STAYTUNED!!</h1></StyledH1>
          <StyledSocial>
        <div className="social d-flex justify-content-center">
        <Link to="https://github.com/shagun16"><i class="social fab fa-github fa-3x"></i></Link>
        <Link to="https://www.linkedin.com/in/shagun-verma-920469197/"><i class="social fab fa-linkedin fa-3x"></i></Link>
        <Link to="https://twitter.com/@shagun166yuhu "><i class="social fab fa-twitter fa-3x"></i></Link>
        <Link to="https://instagram.com/not.shagun_"><i class="social fab fa-instagram fa-3x"></i></Link>
        </div>
        </StyledSocial>
        </Slide>
        </div>
    );
  }

export default StayTuned;