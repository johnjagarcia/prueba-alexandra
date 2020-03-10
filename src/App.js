import React from "react";
import "./App.scss";

class login extends React.Component {
  render() {
    return (
      <figure className="figure" id="figuerLOgin" display="block">
        <nav className="nav">
          <img
            className="img"
            src={`https://keifit.com/wp-content/uploads/2016/12/LOGO-FITNESS-LIFESTYLE-SIN-FONDO-BLANCO.png`}
          />
        </nav>
        <body>
          <section className="box_center">
            <br></br>
            <h2 className="text1">INICIO DE SESIÓN</h2>
            <br></br>
            <section className="containerText2">
              <span className="_text2">
                Si no reconoces tu imagen de seguridad no escribas tu clave
              </span>
            </section>
            <br></br>
            <img
              className="img"
              src={`https://static9.depositphotos.com/1594920/1089/i/600/depositphotos_10891347-stock-photo-holstein-cow-5-years-old.jpg`}
            />
            <label className="text3">Contraseña:</label>
            <input className="input" type="text"></input>
            <br></br>
            <a className="link1" href="#">
              Olvide mi Contraseña
            </a>
            <br></br>
            <button href="#" className="button" onClick="mostrarHome()">
              CONTINUAR
            </button>
            <a className="link2" href="#">
              Continuar
            </a>
          </section>
        </body>
      </figure>
    );
  }
}
export default login;

function mostrarHome() {
  document.getElementById("bodyHome").style.display = "block";
  document.getElementById("figuerLOgin").style.display = "none";
}
