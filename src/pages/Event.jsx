import  { useState, useEffect } from 'react';
import { getEvents, insertEvent } from '../hooks/event';
import PackageCard from '../components/Card';
import Button from '../components/Button';
import Input from '../components/Input';

const Event = () => {
  const [events, setEvents] = useState([]);
  const [formData, setFormData] = useState({
    CustomerName: '',
    CantPieces: '',
    EventDate: '',
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      // getEvents ahora espera page, limit (opcional)
      const data = await getEvents(1, 20);
      // data.events es el array
      setEvents(data.events || []);
    } catch (error) {
      console.error('Error al obtener eventos:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // insertEvent ya mapea los nombres internamente
      await insertEvent(formData);
      setFormData({ CustomerName: '', CantPieces: '', EventDate: '' });
      await fetchEvents(); // refrescar lista
    } catch (error) {
      console.error('Error al insertar evento:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-montserrat font-bold text-gray-800 mb-8">
        Gestión de Eventos
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-md p-6 mb-10 border border-gray-100"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Input
            placeholder="Nombre del cliente"
            name="CustomerName"
            value={formData.CustomerName}
            onChange={handleChange}   // <- cambiado a onChange
          />
          <Input
            placeholder="Cantidad de piezas"
            name="CantPieces"
            type="number"
            value={formData.CantPieces}
            onChange={handleChange}
          />
          <Input
            placeholder="Fecha del evento"
            name="EventDate"
            type="date"
            value={formData.EventDate}
            onChange={handleChange}
          />
        </div>
        <div className="mt-4 flex justify-end">
          <Button type="submit" variant="primary" disabled={loading}>
            {loading ? 'Guardando...' : 'Crear Evento'}
          </Button>
        </div>
      </form>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.length === 0 ? (
          <p className="text-gray-500 col-span-full text-center">
            No hay eventos registrados.
          </p>
        ) : (
          events.map((event) => (
            <PackageCard
              key={event._id}
              paquete={{ ...event, estado: 'Activo' }}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Event;