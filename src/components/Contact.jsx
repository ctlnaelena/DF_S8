import { useState } from 'react';

const EMPTY_FORM = { nombre: '', email: '', mensaje: '' };

/**
 * Sección de contacto con formulario controlado.
 * Al enviarlo (simulado, no hay backend) se reemplaza el formulario
 * por un mensaje de confirmación: otro ejemplo de renderizado condicional.
 */
function Contact() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [sent, setSent] = useState(false);

  // Un solo manejador para todos los campos, usando el atributo "name"
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
  };

  const handleReset = () => {
    setForm(EMPTY_FORM);
    setSent(false);
  };

  return (
    <section id="contacto">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-5">
            <p className="eyebrow">Contáctanos</p>
            <h2>Visítanos o hazlo por acá</h2>
            <address>
              <p>Suecia 456, Providencia</p>
              <p>Lunes a sábado, 10:00 – 21:00</p>
              <p>+56 9 8765 4321</p>
            </address>
          </div>

          <div className="col-lg-7">
            {sent ? (
              <div className="contact-form contact-success p-4 text-center" role="status">
                <p className="h4 mb-2">¡Gracias, {form.nombre}!</p>
                <p className="mb-3">Recibimos tu mensaje y te responderemos a {form.email} muy pronto.</p>
                <button type="button" className="btn btn-primary" onClick={handleReset}>
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form className="contact-form p-4" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="nombre" className="form-label">Nombre</label>
                  <input type="text" id="nombre" name="nombre" className="form-control" placeholder="Tu nombre"
                    value={form.nombre} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Correo</label>
                  <input type="email" id="email" name="email" className="form-control" placeholder="tu@correo.cl"
                    value={form.email} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="mensaje" className="form-label">Mensaje</label>
                  <textarea id="mensaje" name="mensaje" className="form-control" rows="4"
                    placeholder="¿Buscas un libro en especial?" value={form.mensaje} onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">Enviar mensaje</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
