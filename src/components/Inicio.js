import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/menuStyle.css";
import Imagen from "./Imagen";

const MenuNavegacion = () => {
  return (
    <div className="menu">
      <Navbar>
        <Container>
          <img
            alt=""
            src="https://res.cloudinary.com/do2ijjhfn/image/upload/v1645928764/Pumpkin_Coffee_Cafe_nkffdu.png"
            width="150"
            height="120"
            className="d-inline-block align-top"
          />
          <Nav className="items">
            <Link to="/Inicio" className="item">
              Inicio
            </Link>

            <Link to="/Login" className="item">
              Login
            </Link>

            <Link to="/Registro" className="item">
              Registrate
            </Link>

            <Link to="/PlatoDeHoy" className="item1">
              Plato de hoy
            </Link>
          </Nav>
        </Container>
      </Navbar>
      <Imagen />
      <div>
        <p className="parrafoInicial">
          ¿Sin ideas para elaborar recetas saludables? No te preocupes, porque
          desde PUMPKIN te dejamos recetas de platos saludables y fáciles de
          hacer perfectos para enfrentar las altas temperaturas sin renunciar a
          la dieta sana y equilibrada. Prepara papel y bolígrafo y apunta todos
          los ingredientes que necesitas para preparar tu menú saludable y muy
          rico.
        </p>
      </div>
    </div>
  );
};

export default MenuNavegacion;
