import React from "react";
import "./App.css";
import NaveGod from "./assets/NaveGod.png";
import Switcher from "./assets/Switcher.png";

function App() {
  return (
    <div>
      <div className="circulos">
        <svg
          className="circulo circulo1"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="path"
            d="M21.6,-4.3C35.9,12.2,60.7,30.8,58.8,46.4C57,62.1,28.5,74.7,10.9,68.4C-6.6,62.1,-13.2,36.8,-15.5,20.9C-17.8,5,-15.7,-1.4,-12.3,-11.6C-9,-21.7,-4.5,-35.6,-0.4,-35.4C3.7,-35.1,7.4,-20.7,21.6,-4.3Z"
            transform="translate(100 100)"
          />
        </svg>

        <svg
          className="circulo circulo2"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="path"
            d="M25.4,-20.3C39.2,-3,61,7.9,62.3,19C63.6,30.1,44.4,41.3,26.1,47.6C7.8,53.9,-9.7,55.3,-27.1,49.5C-44.4,43.7,-61.5,30.8,-60,18.9C-58.5,7.1,-38.4,-3.8,-25.3,-20.9C-12.3,-38,-6.1,-61.3,-0.2,-61.2C5.8,-61.1,11.7,-37.5,25.4,-20.3Z"
            transform="translate(100 100)"
          />
        </svg>
        <svg
          className="circulo circulo3"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="path"
            d="M19,-22.9C29.4,-14,45.7,-12.5,45.3,-8.8C45,-5.2,28,0.6,20.3,9.6C12.6,18.7,14.2,30.9,9,38.9C3.9,46.9,-7.9,50.6,-13,44.8C-18.1,39,-16.4,23.7,-27.5,12.2C-38.7,0.6,-62.7,-7.4,-66.1,-15.8C-69.6,-24.3,-52.5,-33.2,-38.1,-41.4C-23.6,-49.6,-11.8,-57,-3.7,-52.5C4.4,-48.1,8.7,-31.8,19,-22.9Z"
            transform="translate(100 100)"
          />
        </svg>
        <svg
          className="circulo circulo4"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="path"
            d="M51.3,-58.7C66.2,-59.8,77.9,-44.4,72.6,-30.7C67.4,-16.9,45.2,-4.7,33.4,4.5C21.6,13.7,20.3,19.9,16.5,27C12.6,34,6.3,41.9,1.3,40.2C-3.8,38.5,-7.6,27.1,-22.2,23.5C-36.7,19.9,-61.9,24.1,-66.5,19.4C-71,14.7,-54.9,1,-42.3,-6.3C-29.7,-13.7,-20.6,-14.8,-14.2,-16.5C-7.7,-18.2,-3.9,-20.4,7.2,-30.3C18.2,-40.1,36.4,-57.6,51.3,-58.7Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <header className="header">
        <h1 className="h1">
          <a href="" className="a">
            Daian
          </a>
        </h1>
        <nav className="nav">
          <ul className="ul">
            <li className="li">
              <a href="#inicio" title="Inicio" className="a">
                Inicio
              </a>
            </li>
            <li className="li">
              <a href="#works" title="Trabajos" className="a">
                Works
              </a>
            </li>
            <li className="li">
              <a href="#about" title="Contacto" className="a">
                About
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="main">
        <div className="seccion" id="inicio">
          <section className="secion">
            <h2 className="h2"> Giménez García Daián</h2>
            <h3 className="h3"> Frontend Developer</h3>
            <ul className="ul">
              <li className="li">
                <a
                  href="https://github.com/Kidmand"
                  target="_blank"
                  className="a"
                  title="Github"
                >
                  Visita mi Github
                </a>
              </li>
              <li className="li">
                <a
                  href="https://www.linkedin.com/in/dai%C3%A1n-exequiel-garc%C3%ADa-gim%C3%A9nez-827846282/"
                  className="a"
                  title="Linkedin"
                  target="_blank"
                >
                  Visita mi Likendin
                </a>
              </li>
            </ul>
          </section>
        </div>

        <section className="seccion works" id="works">
          <h2 className="h2"> Proyectos</h2>
          <p className="p">
            Aquí te presento algunos de los proyectos hechos en la universidad.
          </p>
          <div className="grid">
            <article className="article">
              <a
                href="https://github.com/Kidmand/Oragnizacion-del-cumputador-proyecto/tree/master/rpi-asm-framebuffer-LABORATORIO"
                title="Trabajo1"
                target="_blank"
                className="a"
              >
                <figure className="figures">
                  <img
                    src={NaveGod}
                    alt="Imagen"
                    className="img"
                    loading="lazy"
                  />
                </figure>
                <h4 className="h4"> NaveGod (assembly)</h4>
              </a>
            </article>
            <article className="article">
              <a
                href="https://github.com/Kidmand/Ingenieria-del-Software-1-Frontend"
                title="Trabajo2"
                target="_blank"
                className="a"
              >
                <figure className="figures">
                  <img
                    src={Switcher}
                    alt="Imagen"
                    className="img"
                    loading="lazy"
                  />
                </figure>
                <h4 className="h4"> El Switcher (online)</h4>
              </a>
            </article>
          </div>
        </section>

        <section className="seccion about" id="about">
          <h2 className="h2"> Sobre mi</h2>
          <p className="p">
            Hola, soy un estudiante de la Universidad Nacional de Córdoba y esta
            es mi primera página web.
          </p>
          <p className="p">
            Estoy emocionado de compartir mis proyectos, aprendizajes y
            habilidades en este espacio.
          </p>
          <p className="p">
            Mi objetivo es aprender y crecer en el desarrollo web y otros campos
            relacionados con la tecnología.
          </p>
          <ul className="rrss ul">
            <li className="li">
              <a
                href="https://github.com/Kidmand"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="white"
                  viewBox="0 0 16 16"
                  className="svg"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </a>
            </li>
            <li className="li">
              <a
                href="https://www.linkedin.com/in/dai%C3%A1n-exequiel-garc%C3%ADa-gim%C3%A9nez-827846282/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="48"
                  height="48"
                  fill="white"
                  className="svg"
                >
                  <path d="M22.23 0H1.77C.79 0 0 .774 0 1.727v20.545C0 23.226.79 24 1.77 24h20.46c.98 0 1.77-.774 1.77-1.728V1.727C24 .774 23.21 0 22.23 0zM7.12 20.452H3.56V9h3.56v11.452zM5.34 7.41c-1.14 0-2.06-.925-2.06-2.063A2.061 2.061 0 0 1 5.34 3.285c1.14 0 2.06.925 2.06 2.062 0 1.138-.92 2.063-2.06 2.063zM20.452 20.452h-3.56v-5.613c0-1.337-.025-3.06-1.865-3.06-1.868 0-2.153 1.46-2.153 2.966v5.707h-3.56V9h3.416v1.563h.049c.475-.9 1.637-1.845 3.37-1.845 3.601 0 4.267 2.37 4.267 5.455v6.279z" />
                </svg>
              </a>
            </li>
          </ul>
        </section>
      </main>

      <footer className="footer">
        <span className="span">
          {" "}
          Tu pasado no es tu destino, tu destino depende de ti, comienza ahora
          mismo a construirlo.
        </span>
      </footer>
    </div>
  );
}

export default App;
