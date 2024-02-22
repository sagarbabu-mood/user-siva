import { Link, withRouter } from "react-router-dom";

import {
  HeaderBgContainer,
  LogoIconStyling,
  LogoText,
  TabOptionsStyling,
  LogoContainer,
  HamburgerIcon,
} from "./styledComponents";

const Header = () => (
  <HeaderBgContainer>
    <LogoIconStyling />

    <LogoContainer>
      <LogoText>Victaman Services</LogoText>
    </LogoContainer>

    <LogoContainer>
      <Link to="/">
        <TabOptionsStyling>Home</TabOptionsStyling>
      </Link>

      <Link to="/trackingPage">
        <TabOptionsStyling>Tracking</TabOptionsStyling>
      </Link>

      <HamburgerIcon />
    </LogoContainer>
  </HeaderBgContainer>
);
export default Header;
