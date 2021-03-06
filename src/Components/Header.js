import React from "react";
import TypeWriter from "react-typewriter";

const Header = ({ data }) => {
  if (data) {
    var networks = data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });
  }

  return (
    <header id="home">
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
              Sobre
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#resume">
              Currículo
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#portfolio">
              Projetos
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#contact">
              Contacto
            </a>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">
            Hello There!
          </h1>
          <h3>
            <TypeWriter typing={1.2}> O meu nome é Pedro Miguel Pereira e tenho um enorme interesse por programação mobile e web, assim como por edição de fotografia e de vídeo.</TypeWriter>
          </h3>
          <hr />
          <ul className="social">{networks}</ul>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
};

export default Header;
