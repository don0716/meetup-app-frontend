import { useState } from "react"

const Header = ({isDisabled, onSearchChange}) => {
    
    return (
        <> 
         <div className="bg-light">
         <div className="container">
            <nav className="navbar d-flex justify-content-between align-items-center px-2">

                    <a href="/home" className="navbar-brand">
                        <img className="img-fluid" src="/meetup-logo-1.png" alt="Meetup Logo" width="100" height="50" />
                    </a>

                    {isDisabled ? <form className="d-flex ms-auto" role="search">
                        <input className="form-control me-2" type="search" disabled placeholder="Search By Title and Tags"/>
                    </form> : <form className="d-flex ms-auto" role="search" onChange={(e) => onSearchChange(e.target.value)}>
                        <input className="form-control me-2" type="search" placeholder="Search By Title and Tags"/>
                    </form> }

                    
                    
            </nav>
    
            <hr />
         </div>
         </div>
        </>
    )
}

export default Header 