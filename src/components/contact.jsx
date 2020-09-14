import React from 'react';
import styled from "styled-components";

const StyledH1=styled.h1`
text-align:center;
font-family:cambria;
font-style:bold;
font-size:1.5rem;
background-color:#1B4F72;
`;

const StyledEMail=styled.em`
text-align:center;
font-family:cambria;
font-size:1.5rem;
`;

const StyledPhone=styled.p`
text-align:center;
font-family:cambria;
font-size:1.5rem;
`;


class Contact extends React.Component {
  state = {  }
  render() { 
    return (
      <div className="container-fluid py-4">
        <StyledH1><h1>CONTACT ME!!<i className="fas fa-hand-pointer-0"></i></h1></StyledH1>
        <div className="row">
          <div className="col-12 mx-auto"></div>
          <div className="text-center pt-5 text-white">
          <StyledEMail> <p><i className="fa fa-2x fa-phone fa-1x"></i> Phone:- +919520374370</p></StyledEMail>
          <StyledPhone><p className="text-white pb-5">
              <i className="fa fa-2x fa-envelope fa-1x"></i> E-mail:- shagun1625@gmail.com
            </p></StyledPhone>
          </div>
        </div>
      </div>
      );
  }
}
 
export default Contact;