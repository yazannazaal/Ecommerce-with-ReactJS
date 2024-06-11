import { Outlet } from "react-router-dom";
import React from "react";
import BottomBar from "../components/header/BottomBar";
import SearchBar from "../components/header/SearchBar";
import TobBar from "../components/header/TobBar";

export default function Root() {
  return (
    <div>
      <TobBar />
      <SearchBar />
      <BottomBar />

      <Outlet />
    </div>
  );
}
