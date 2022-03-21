import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import MenuDeNavegacion from "../components/MenuDeNavegacion";
import "../styles/loginAndRegister.css";
import { useForm } from "../hooks/useForm";
import { registroEmailPasswordNombre} from '../actions/actionRegister';
import { useDispatch } from "react-redux";

const Registro = () => {

  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm({
    names: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formValues;

  const handleRegistro = (e) => {
      e.preventDefault();
      dispatch(registroEmailPasswordNombre(email,password,name))
  }

  return (
    <div>
      <MenuDeNavegacion />
      <h4 className="inicio">Registrate</h4>

      <Form className="formulario1" onSubmit={handleRegistro}>
        <Form.Group className="mb-1" controlId="formBasicName">
          <Form.Label className="color"></Form.Label>
          <Form.Control
            className="input1"
            type="text"
            placeholder="Ingrese su nombre"
            name="name"
            value={name}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-1" controlId="formBasicEmail">
          <Form.Label className="color"></Form.Label>
          <Form.Control
            className="input1"
            type="email"
            placeholder="Ingrese su e-mail"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-1" controlId="formBasicPassword">
          <Form.Label className="color"></Form.Label>
          <Form.Control
            className="input1"
            type="password"
            placeholder="Ingrese su contraseña"
            name="password"
            value={password}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Container className="auth__social-networks">
          <Container className="google-btn">
            <Container className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </Container>
          </Container>
        </Container>
        <Button variant="primary" type="submit" className="botonLogin">
          Registrarse
        </Button>
      </Form>
    </div>
  );
};

export default Registro;
