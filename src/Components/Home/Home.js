import React from "react";
import "./Home.scss";

class pageHOme extends React.Component {
  render() {
    return (
      <body>
        <div>
          <nav className="nav2">
            <img
              className="img"
              src={`https://keifit.com/wp-content/uploads/2016/12/LOGO-FITNESS-LIFESTYLE-SIN-FONDO-BLANCO.png`}
            />
          </nav>
        </div>
        <div class="container">
          <div class="section1">
            <h4 className="title1">Kredipuntos</h4>
            <h4 className="title2">4.000 kptc</h4>
            <div className="linea"></div>
            <nav>
              <li class="parent">
                <a href="#" className="inicio">
                  Inicio➤
                </a>
              </li>
              <li>
                <a className="items" href="#">
                  Mis Creditos
                </a>
              </li>
              <li>
                <a className="items" href="#">
                  Mis FInanzas
                </a>
              </li>
              <li class="parent">
                <a className="items" href="#">
                  Mis Pagos
                </a>
              </li>
              <li>
                <a className="items" href="#">
                  Mi Score
                </a>
              </li>
              <li>
                <a className="items" href="#">
                  Mis INversiones
                </a>
              </li>
            </nav>
          </div>
          <div class="section2">
            <div className="saludo">
              <span className="textsaludo">¡Hola, Miguel!</span>
              <section className="containerText22">
                <span className="_text22">
                  Aqui podrás incluir y ver los detalles de
                </span>
                <span className="_text23"> tus movimientos financieros</span>
              </section>
            </div>
          </div>
        </div>
      </body>
    );
  }
}
export default pageHOme;
