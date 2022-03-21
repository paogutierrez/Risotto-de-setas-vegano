import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import MenuDeNavegacion from '../components/MenuDeNavegacion';
import '../styles/plato.css';
import { ingredientes } from '../helpers/url'


const PlatoDeHoy = () => {

  const [ingrediente, setIngrediente] = useState(null)

  useEffect(() => {
    ingredientes(setIngrediente)

}, [])

  return (
    <div className="contenedorPlato">
        <MenuDeNavegacion />
        <div className="plato">
            <p className="receta">Risotto de setas Vegano</p>
        </div>
        <div>
        <span className="ingredients">Ingredientes</span>
        <h1>Risotto de setas Vegano</h1>

        { ingrediente !== null ? (
          ingrediente.map(ingredients => (
          <Form key={ingredients.product} className="tablaIngredientes">
          <Form.Group className="mb-3 tabla">
          <Form.Check type="checkbox" label={ingredients.product} className="check"/>
          <span>Cantidad:{ingredients.quantity}</span>
         <br></br>
          <span>Precio $ {ingredients.price}</span>
        </Form.Group>
        </Form>
        ))
        ): ('No hay Ingredientes')}
        <Button
        className="botonComprar"
        >Comprar Ingredientes</Button>
        </div>
    </div>
  
  )
}

export default PlatoDeHoy;