import React, { useState } from 'react';
import ReactModal from 'react-modal';
import logo from "../Assets/logo.svg";
import more from "../Assets/More.svg";
import "./NavBar.css"

// Ensure that your modal is properly attached to the app element
ReactModal.setAppElement('#root');

function NavBar({ user }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="Nav">
        <img alt="logo" src={logo} />
        <div className="titles">
          <a href="/"><p>Accueil</p></a>
          <a href="/"><p>A propos</p></a>
          <a href="/projets"><p>Projets</p></a>
          <a href="/freelancers"><p>Freelancers</p></a>
        </div>
        <div>
          {user ? (
            <button>Profil</button>
          ) : (
            <div className="buttons">
              <a href="/connection"><button className="boutton">Connection</button></a>
              <a href='/inscription'><button className="boutton">S'inscrire</button></a>
            </div>
          )}
        </div>
      </div>

      <div className="Navresp">
        <div className="more-section relative">
          <button className="menu-icon" onClick={toggleMenu}>
            <img alt="more" className="more" src={more} />
          </button>
        </div>
        <img alt="logo" src={logo} className="logo" />
      </div>

      {/* The Popup */}
      {isMenuOpen && (
        <div className="popup">
          <div className="titles">
            <a href="/"><p>Accueil</p></a>
            <a href="/"><p>A propos</p></a>
            <a href="/projets"><p>Projets</p></a>
            <a href="/freelancers"><p>Freelancers</p></a>
          </div>
          <div>
            {user ? (
              <button>Profil</button>
            ) : (
              <div className="buttons">
                <a href="/connection"><button className="boutton">Connection</button></a>
                <a href='/inscription'><button className="boutton">S'inscrire</button></a>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default NavBar;
