import React from "react"
import trollface from "/trollface.png"

function Header() {
    return (
        <header>
            <img src={trollface} className="header--logo"></img>
            <h1 className="header--title">Meme Generator</h1>
            <h3 className="header--project">React Course - Project 3</h3>
        </header>
    )
}

export default Header