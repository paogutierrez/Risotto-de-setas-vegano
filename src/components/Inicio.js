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
      <div className="contenedorParrafo">
        <h1>Tips</h1>
        <p className="parrafoInicial">
          Para ti que te encanta cocinar, Recetas PUMPKIN te trae diferentes
          recetas para todos los momentos y para que mejores tus habilidades y
          sorprendas a todos con estas deliciosas preparaciones. Dependiendo de
          lo que vayas a preparar necesitarás diferentes implementos. Estos son
          algunos consejos para estar siempre bien preparado:
          <br></br> 
          <br></br> 
          Lee la
          receta de forma completa.<br></br> Antes de cocinar despeja el
          ambiente.<br></br> Alista los ingredientes para que estén a la mano.{" "}
          <br></br>Limpia la cocina mientras vas cocinando.<br></br> Evita
          distracciones mientras cocines.
          <br></br> 
          <br></br> 
          Si empiezas a tener en cuenta
          estas recomendaciones vas a notar lo bien que te va en la cocina, cómo
          mejoras tus técnicas y de esta forma las cosas saldrán bien obteniendo
          resultados deliciosos. Descubre la categoría de platos fuertes con
          todas las recetas deliciosas que puedes preparar en tu casa con
          ingredientes que son muy fáciles de conseguir. Si necesitas ideas para
          preparar platos fuertes, esta categoría es perfecta para ti.
        </p>
      </div>
    </div>
  );
};

export default MenuNavegacion;
