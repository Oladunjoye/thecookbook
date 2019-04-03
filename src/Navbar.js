import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="App-header">
      <Link to="/">
        <h1 className="App-title">THE COOKBOOK</h1>
      </Link>
    </header>
  );
}

export default Navbar;
