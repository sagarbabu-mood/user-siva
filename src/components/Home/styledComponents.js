import styled from "styled-components";

import { FaTruckFast } from "react-icons/fa6";

import { IoMdLogIn } from "react-icons/io";

export const FormBgContainer = styled.div`
  background-color: #c2dff2;
  height: 100vh;
  display: flex;

  align-items: center;

  justify-content: center;
`;

export const RegisterFormContainer = styled.form`
  background-color: #000e38;
  min-height: 65%;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 20px;
  padding-bottom: 20px;
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    width: 85%;
  }
`;

export const LabelForInput = styled.label`
  font-family: "Roboto";
  font-size: 15px;
  font-weight: 400;
  color: #ffffff;
  margin-bottom: 5px;
`;

export const InputElement = styled.input`
  width: 250px;
  font-size: 15px;
  font-family: "Roboto";
  font-weight: normal;
  color: #ffffff;
  background-color: #0e0e0f;
  border-style: solid;
  border-color: #2b2b2b;
  border-width: 2px;
  border-radius: 5px;
  padding: 4px;

  &:focus {
    outline: none;
    border-color: #2b2b2b;
  }
`;

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 15px;
`;

export const LogoIconStyling = styled(FaTruckFast)`
  background-color: transparent;
  color: #b49d44;

  font-size: 80px;

  @media screen and (max-width: 767px) {
    font-size: 35px;
  }
`;

export const LogoInIconStyling = styled(IoMdLogIn)`
  background-color: transparent;
  color: #b49d44;

  font-size: 35px;
  align-self: flex-end;

  @media screen and (max-width: 767px) {
    font-size: 30px;
  }
`;

export const LogoText = styled.h1`
  color: #b49d44;
  font-family: "Raleway";
  font-weight: normal;
  font-size: 15px;

  @media screen and (max-width: 767px) {
    font-size: 16px;
  }
`;

export const RegisterButton = styled.button`
  color: #ec9613;
  font-family: "Raleway";
  font-size: 15px;
  height: 40px;
  width: 180px;
  padding: 4px;
  border: none;
  border-radius: 5px;
  background-color: #136fd6;
`;

export const ToLoginText = styled.p`
  font-family: "Roboto";
  font-size: 14px;
  font-weight: 400;
  color: #b49d44;
  margin-bottom: 5px;
`;

export const LogoIconContainer = styled.div`
  display: flex;
  align-self: flex-end;
  background-color: none;

  align-items: center;
`;


