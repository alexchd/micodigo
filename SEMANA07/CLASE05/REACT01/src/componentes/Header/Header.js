import React from 'react'

const Header = () => {
    return (
        <nav className="cabecera">
           <h1>El blog de codigo</h1> 
           <div className="links">
            <a href="/">Inicio</a>
            <a href="/carpeta">Nueva carpeta</a>

           </div>
        </nav>
    )
}

export default Header
