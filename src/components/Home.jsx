import React from "react";
import styled from "styled-components";
import homeImg from '../images/home.jpg';
// import { Element } from "react-scroll";
const StyledContainer=styled.section`
text-align:center;
font-family:cambria;
font-style:bold;
font-size:3rem;
background-color:#1B4F72;
`
const BackgroundImg = styled.img`
width:1080px;
height:700px;
`;

const Home = () => {
    return(
        <StyledContainer>
        <div className="container-fluid my-10 py-10">
            <div className="row">
                <div className="col-12 mx-auto">
                    <div className="text-center mt-5">
                        <h1 className="pt-4">MY PORTFOLIO</h1>
                    </div>
                </div>
            </div>
        </div>
        <BackgroundImg src ={homeImg}/>
        </StyledContainer>
    );
};
export default Home;