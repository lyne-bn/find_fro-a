import React from 'react';
import "./Footer.css"
import instagram from '../Assets/instagram.svg'
import fb from '../Assets/facebook.svg'
import tiktok from '../Assets/tiktok.svg'
import logo2 from '../Assets/logo2.svg'
import mail from "../Assets/mail.svg"

const Footer = () => {
  return (
    <>
    <div className='Footer'>
        <div className='item'>
            <img alt='logo' src={logo2}></img>
            <p className='gris'>Donnez vie à vos projets grâce aux meilleurs talents freelances. Des esprits créatifs aux experts techniques, trouvez des professionnels prêts à réaliser votre vision</p>
            <p className='rights'>All rights reserved</p>
        </div>
        <div className='test'>
            <div className='item'>
                <p className='titre'>Contactez nous</p>
                <div className='mail'>
                    <img className='mailtof' alt='mail' src={mail}></img>
                    <a href="mailto:FindForça@gmail.com"><p className='blanc'>FindForça@gmail.com</p></a>
                </div>
            </div>
            <div className='item'>
                <p className='titre'>Pages</p>
                <div className='titles'>
                    <a href='/'><p className='blanc'>Accueil</p></a>
                    <a href='/'><p className='blanc'>A propos</p></a>
                    <a href='/projets'><p className='blanc'>Projets</p></a>
                    <a href='/freelancers'><p className='blanc'>Freelancers</p></a>
                </div>
            </div>
        </div>
        <div className='item'>
            <div className='social-media'>
                <a href='/instagram'><img className='media' alt='instagram' src={instagram}></img></a>
                <a href='/tiktok'><img className='media' alt='tiktok' src={tiktok}></img></a>
                <a href='/facebook'><img className='media' alt='facebook' src={fb}></img></a>
            </div>
            <p className='gris'>N'hésitez pas à nous suivre sur nos réseaux sociaux, restons connectés !</p>
        </div>
    </div>
    <div className='FooterResp'>
        <img alt='logo' src={logo2}></img>
        <div className='items'>
            <div className='item'>
                <div className='social-media'>
                    <a href='/instagram'><img className='media' alt='instagram' src={instagram}></img></a>
                    <a href='/tiktok'><img className='media' alt='tiktok' src={tiktok}></img></a>
                    <a href='/facebook'><img className='media' alt='facebook' src={fb}></img></a>
                </div>
                <p className='gris'>N'hésitez pas à nous suivre sur nos réseaux sociaux, restons connectés !</p>
            </div>
            <div className='item'>
                <p className='titre'>Contactez nous</p>
                <img className='mailtof' alt='mail' src={mail}></img>
            </div>
        </div>
        <p className='rights'>All rights reserved</p>
    </div>
    </>
  );
};

export default Footer;