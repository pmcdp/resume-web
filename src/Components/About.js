import React from "react";
import PDF from '../download/cv.pdf'

const About = ({ data }) => {
  if (data) {
    var profilepic = "images/" + data.image;

    var email = data.email;
  }

  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img
            className="profile-pic"
            src={profilepic}
            alt="Pedro Miguel Pereira"
          />
        </div>
        <div className="nine columns main-col">
          <h2>Sobre mim</h2>

          <p>Olá!! o meu nome é Pedro Miguel Pereira, tenho 22 anos e resido na cidade de Aveiro.<br></br> Sou licenciado em Comunicação Multimédia. Desde muito cedo ganhei um gosto por interfaces e pela intuitividade que estas oferecem aos utilizadores, levando-me assim a interessar pelas áreas de programação mobile e web. Para além destes tenho também interesse nas áreas de UI design e user experience, vídeo e fotografia.<br></br> Sou motiviado e emprenhado, adoro trabalhar em equipa, trocar ideias com colegas e dou o meu melhor em todos os projetos em que me insiro</p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contacto</h2>
              <p className="address">
                <span>{email}</span>
              </p>
            </div>
            <div className="columns download">
              <p>
                <a href={PDF} download="Pedro_Miguel_Pereira_CV.pdf" className="button">
                  <i className="fa fa-download"></i>Download CV 
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
