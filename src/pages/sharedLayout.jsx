import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";

export default function SharedLayout() {
  return(
    <>
      <Navbar loggedIn="Login" />
      <Outlet />
    </>
  )
}