import React from "react"

function Header (){
    return(
        <header>
        <div className = "hero-text-box">
        <h1> Goodbye junk foods. <br/> Hello super healthy meals</h1>
        <a className = "btn btn-full" href = "#about">Im hungry</a>
        <a className = "btn btn-ghost" href = "#sign-up">Show me more</a>
          </div>
          </header>
    )
}

export default Header