import React from 'react'
import "./Header.scss"
import Language from './Language'
import { useSelector, useDispatch } from "react-redux";
import {
  CHeader,
  CHeaderBrand,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CToggler,
} from "@evenlogics/react";

import { Logo } from "@evenlogics/whf-ra-components";
import Notification from './Notification';
import Profile from './Profile';

const Header = (props) => {
  let element_moon = document.querySelector('.fa-moon')
  let element_sun = document.querySelector('.fa-sun')
  const dispatch = useDispatch();
  /* eslint-enable */
  const sidebarShow = useSelector((state) => state.sidebarShow);

  if (element_moon && element_sun) {
    element_sun.style.display = "none";
    element_moon.style.display = "none";
  }



  const toggleSidebarMobile = () => {
    console.log("clicking 2")

    const val = [false, "responsive"].includes(sidebarShow)
      ? true
      : "responsive";
    dispatch({ type: "set", sidebarShow: val });
  };

  return (
    <CHeader withSubheader>
      <CToggler
        inHeader
        className="ml-md-3 d-lg-none"
        onClick={toggleSidebarMobile}
      />

      <CHeaderBrand className="mx-auto d-lg-none">
        <Logo type="mobile" />
      </CHeaderBrand>

      <CHeaderNav className="d-md-down-none mr-auto">
        <CHeaderNavItem className="px-3">

          <CHeaderNavLink to="/">
            Shorex Dashboard
          </CHeaderNavLink>

        </CHeaderNavItem>

      </CHeaderNav>

      <CHeaderNav className="px-2">
        <Language />
        <Notification />
        <Profile />
      </CHeaderNav>
    </CHeader>

  )
}

export default Header


