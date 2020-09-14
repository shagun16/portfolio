import React from 'react';
import Flip from 'react-reveal/Flip';
import styled from "styled-components";

const StyledH1=styled.h1`
background-color: gray;
text-align:center;
font-family:cambria;
font-style:bold;
`;
const StyledQuality1=styled.h3`
margin-left:5%;
text-align:left;
font-family:cambria;

`;
const StyledQuality2=styled.h3`
text-align:center;
font-family:cambria;
`;
const StyledQuality3=styled.h3`
margin-right:5%;
text-align:right;
font-family:cambria;
`;


function Services(props) {
    return (
         <Flip bottom>
            <StyledH1>
        <h1>Qualities</h1>
        </StyledH1>
            <div className="row">
              <StyledQuality1>
                <div className="feature-box col-lg-4">
                <i class="icon1 fas fa-heart fa-4x fa-tomato"></i>
                 <h3>Passion For Knowledge</h3>
                 </div>
                 </StyledQuality1>
                 <StyledQuality2>
               <div className="feature-box col-lg-4">
               <i class="icon2 fas fa-map fa-4x"></i>
                 <h3>Ability To Plan For Everything</h3>
                 </div>
                 </StyledQuality2>
                 <StyledQuality3>
               <div className="feature-box col-lg-4">
               <i class="icon3 fas fa-running fa-4x"></i>
                 <h3>"Accelerated Failure" Mentality</h3>
                 </div>
                 </StyledQuality3>
                 </div>
            </Flip>
    );
}

export default Services;