import { useForm } from "react-hook-form";
import { edadValidator } from "./validators";
import { Form, Button, Alert } from 'react-bootstrap';

const Formulario = () => {
    const { register, formState: { errors }, watch, handleSubmit } = useForm({
      defaultValues: {
        nombre: 'Elvis Uriel',
        direccion: 'Talent-logy'
      }
    });
  
    const onSubmit = (data) => {
      console.log(data);
    }
  
    const incluirTelefono = watch('incluirTelefono');
  
    return (
      <div>
        <h2>Formulario</h2>
        <p>Nombre: {watch('nombre')}</p>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group>
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" {...register('nombre', {
              required: true,
              maxLength: 30
            })} />
            {errors.nombre?.type === 'required' && <Alert variant="danger">El campo nombre es requerido</Alert>}
            {errors.nombre?.type === 'maxLength' && <Alert variant="danger">El campo nombre debe tener menos de 10 caracteres</Alert>}
          </Form.Group>
          <Form.Group>
            <Form.Label>Dirección</Form.Label>
            <Form.Control type="text" {...register('direccion', {
              required: true
            })} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" {...register('email', {
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
            })} />
            {errors.email?.type === 'pattern' && <Alert variant="danger">El formato del email es incorrecto</Alert>}
          </Form.Group>
          <Form.Group>
            <Form.Label>Edad</Form.Label>
            <Form.Control type="text" {...register('edad', {
              validate: edadValidator
            })} />
            {errors.edad && <Alert variant="danger">La edad debe estar entre 18 y 65</Alert>}
          </Form.Group>
          <Form.Group>
            <Form.Label>País</Form.Label>
            <Form.Control as="select" {...register('pais')}>
              <option value="es">España</option>
              <option value="it">Italia</option>
              <option value="fr">Francia</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Check type="checkbox" label="¿Incluir teléfono?" {...register('incluirTelefono')} />
          </Form.Group>
          {incluirTelefono && (
            <Form.Group>
              <Form.Label>Teléfono</Form.Label>
              <Form.Control type="text" {...register('telefono')} />
            </Form.Group>
          )}
          <Button variant="primary" type="submit">Enviar</Button>
        </Form>
      </div>
    );
  }
  
  export default Formulario;
  