import React from "react";
import { ReactIcon,HtmlIcon,BootstrapIcon,JsIcon } from "./icons";
import Bounce from "react-reveal/Bounce";
import styled from "styled-components";

const StyledH1=styled.h1`
text-align:center;
font-family:cambria;
font-style:bold;
`;
const StyledSkills=styled.h2`
background-color:#808080;
padding-top:3%;
padding-bottom:3%;
`;


function Skills(props) {
    return(
        <div className="container-fluid my-5 py-5"><Bounce bottom>
           <StyledH1> <h1 className="text-center">Skills</h1></StyledH1>
            </Bounce>
            <StyledSkills>
            <div className="col-10 mx auto">
            <div className="row">
            <div className="col-md-4 mx-auto pt-5 order-1 order-lg-1">
            <div className="text-center">
            <span><bounce left>
           <div className="logo1" ><ReactIcon/></div><div className="skill1">REACT JS<br/></div>
           <div className="logo2" ><HtmlIcon/></div><div className="skill2"> HTML<br/></div>
           <div className="logo3" ><BootstrapIcon/></div><div className="skill3"> BOOTSTRAP<br/></div>
           <div className="logo4" ><JsIcon/></div><div className="skill4" >JAVASCRIPT<br/></div>
           </bounce>
            </span>
            </div>
            </div>
            </div>
            </div>
            </StyledSkills>
            </div>
    );
    
}
export default Skills;