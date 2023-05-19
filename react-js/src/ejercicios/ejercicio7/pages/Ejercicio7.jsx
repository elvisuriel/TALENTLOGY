import React, { useState } from "react";
import { Button, Container, FormGroup, Label, Input } from "reactstrap";


const Ejercicio7 = () => {
  const [date, setDate] = useState(""); // Estado para almacenar la fecha ingresada por el usuario
  const [daysLeft, setDaysLeft] = useState(null); // Estado para almacenar la cantidad de días que faltan para la fecha ingresada

  // Función que se ejecuta cuando el usuario hace clic en el botón "Calcular"
  const handleCalculate = () => {
    // Obtenemos la fecha actual y la fecha ingresada por el usuario
    const currentDate = new Date();
    const selectedDate = new Date(date);

    // Calculamos la diferencia entre ambas fechas en milisegundos
    const difference = selectedDate.getTime() - currentDate.getTime();

    // Convertimos la diferencia a días
    const days = Math.ceil(difference / (1000 * 60 * 60 * 24));

    // Actualizamos el estado con la cantidad de días que faltan para la fecha ingresada
    setDaysLeft(days);
  };

  // Función que se ejecuta cuando el usuario cambia la fecha
  const handleDateChange = (event) => {
    // Actualizamos el estado con la nueva fecha ingresada por el usuario
    setDate(event.target.value);
  };

  return (
    <Container>
      <div className="ejercicio7-container">
        <h2>Calculadora de días restantes</h2>
        <FormGroup>
          <Label for="dateInput">Ingrese una fecha:</Label>
          <Input
            type="date"
            id="dateInput"
            value={date}
            onChange={handleDateChange}
          />
        </FormGroup>
        <Button color="primary" onClick={handleCalculate}>
          Calcular
        </Button>
        {daysLeft !== null && (
          <p>Faltan {daysLeft} días para la fecha ingresada.</p>
        )}
      </div>
    </Container>
  );
};

export default Ejercicio7;
