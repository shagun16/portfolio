import React from 'react';
import Pic from "../images/pic.jpg";
import Zoom from "react-reveal/Zoom";
import styled from "styled-components";

const StyledContainer=styled.image`
text-align:center;
border:1px solid #0000;
width:2000px;
height:fir-content;
`;
const StyledH1=styled.h1`
text-align:center;
font-family:cambria;
font-style:bold;
font-size:3rem;
background-color:#808080;
`;
const StyledPara=styled.p`
text-align:center;
font-family:cambria;
font-style=italic;
font-size:1.5rem;
padding:5%;
background-color:#1B4F72;
`;
const About = () => {
    return ( 
        <div className="container-fluid my-5 py-5">
            <div className="row">
            <StyledContainer>
                    <div className="col-lg-6">
                            <div><zoom left>
                                <img src={Pic} className="ml-2 pl-5" height="450px" alt="Profile_pic">
                                </img>
                                <h1>Hey!I AM SHAGUN VERMA..</h1>
                                </zoom>
                                </div>
                        </div>
                        </StyledContainer>
                     <div className="col-lg-6">
                       <StyledH1> <Zoom cascade><h1>ABOUT!!</h1></Zoom></StyledH1>
                        <StyledPara><Zoom right><p>I am a pursuing BCA from GRAPHIC ERA DEEMED 
                            <br/>TO BE UNIVERSITY,DEHRADUN.I love exploring... I am an intermediate in React.js and 
                            <br/> i also design websites webpages for startup projects...!!
                            <br/>It takes alot of thinking to create websites but in the end its all worth waiting
                            <br/><span style={{fontStyle:"italic"}}>
                                "I always learned that you should never give up on things you love"
                                </span>
                                </p>
                                </Zoom>
                                </StyledPara>
                                </div>
                    </div>
                </div>
     );
}
export default About;