import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect, useRef } from "react"
import { useAuth } from "../context/AuthContext"

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState (false)
    const navRef = useRef(null)
    const { isLoggedIn, logout} = useAuth()
    const navigate = useNavigate()

    const closeMenu = () => {
        setMenuOpen(false);
    }

    const handleLogout = () => {
        logout()
        navigate("/")
    }

    useEffect(() => {
        if (!menuOpen) 
        return;
            const handleClickOutside = (event) => {
                if (navRef.current && !navRef.current.contains(event.target)) {
                    closeMenu();
                }
            }

            document.addEventListener('mousedown', handleClickOutside);
            return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [menuOpen]);

    return (
        <div className="header">
            <div className="img-text-header">
                <Link to="/"> <img src="/logo.jpg" alt="logo imgage" /> </Link>
                <h1>Strength Body Mind</h1>
            </div>
            <div className="buttons-header">
                <>
                {isLoggedIn ? (
                    <button className="sign-in-button-header" onClick={handleLogout}> Logga ut </button>
                ) : (
                    <Link to="/Signin">
                        <button className="sign-in-button-header"> Logga in </button>
                    </Link>
                )}
                </>

                <button className="menu-button-header" onClick={() => setMenuOpen(true)} aria-label="Menu" >
                ☰
                </button>

                {menuOpen && <div className="menu-overlay" onClick={() => setMenuOpen(false)}></div>}

                <nav ref={navRef} className={`navbar ${menuOpen ? 'open' : ''}`}>
                    <button className="close-button" onClick={() => setMenuOpen(false)}>×</button>
                    <Link to="/Welcomesignedin" onClick={closeMenu}>Mina Sidor</Link> 
                    <Link to="/Workoutoverview" onClick={closeMenu}>Träningsprogram</Link> 
                    <Link to="/About" onClick={closeMenu}>Om oss</Link> 
                </nav>
            </div>
        </div>
    )
}