import styled from "styled-components";

import { FaTruckFast } from "react-icons/fa6";

import { GiHamburgerMenu } from "react-icons/gi";

export const HeaderBgContainer = styled.div`
  background-color: #263386;
  height: 20vh;
  display: flex;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  justify-content: space-between;
`;

export const LogoIconStyling = styled(FaTruckFast)`
  background-color: transparent;
  color: #b49d44;

  font-size: 80px;

  @media screen and (max-width: 767px) {
    font-size: 35px;
  }
`;

export const LogoText = styled.h1`
  color: #b49d44;
  font-family: "Raleway";
  font-weight: normal;
  font-size: 20px;

  @media screen and (max-width: 767px) {
    font-size: 16px;
  }
`;

export const TabOptionsStyling = styled.p`
  text-decoration: none;
  color: #b49d44;
  font-size: 20px;
  font-family: "Lato";
  font-weight: 600;
  margin-right: 20px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const HamburgerIcon = styled(GiHamburgerMenu)`
  @media screen and (min-width: 768px) {
    display: none;
  }
  @media screen and (max-width: 767px) {
    display: block;
    color: #b49d44;
    font-size: 30px;
  }
`;
